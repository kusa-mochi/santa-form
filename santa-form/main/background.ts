import path from 'path'
import { app, ipcMain } from 'electron'
import serve from 'electron-serve'
import { createWindow } from './helpers'
import fs from 'node:fs'

const isProd = process.env.NODE_ENV === 'production'

if (isProd) {
  serve({ directory: 'app' })
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`)
}

;(async () => {
  await app.whenReady()

  const mainWindow = createWindow('main', {
    width: 1000,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
    show: false,
  })

  mainWindow.setMenuBarVisibility(false)
  mainWindow.maximize()
  mainWindow.show()

  if (isProd) {
    await mainWindow.loadURL('app://./home')
  } else {
    const port = process.argv[2]
    await mainWindow.loadURL(`http://localhost:${port}/home`)
    mainWindow.webContents.openDevTools()
  }
})()

app.on('window-all-closed', () => {
  app.quit()
})

ipcMain.on('message', async (event, arg) => {
  event.reply('message', `${arg} World!`)
})

ipcMain.on("write-to-text-file", (event, content: string) => {
  const unixTimeNow: number = new Date().getTime() / 1000.0
  const fileName: string = `santa-form_${unixTimeNow}.txt`
  fs.writeFile(`./${fileName}`, content, err => {
    if (err) {
      console.error("failed to write text to a file:", err.message)
    } else {
      console.log("file saved!!!:", content)
    }
  })
})
