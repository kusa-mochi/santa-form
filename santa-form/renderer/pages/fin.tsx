import React, { useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { setTimeout } from 'timers'
import MailContext from '../contexts/mailContext'

export default function FinPage() {
  // プログレスバーの進捗
  const [progress, setProgress] = useState(0)
  // 進捗メッセージ
  const [progressMessage, setProgressMessage] = useState("さんたさんに　おてがみを　おくっているよ！")

  // メール文面
  const {mailText} = useContext(MailContext)

  const saveFile = () => {
    window.ipc.writeToTextFile(mailText)
  }

  // 画面描画時にプログレスバーとメッセージを更新する処理。
  useEffect(() => {
    setTimeout(() => {
      setProgress(10)
      setProgressMessage("うぇうぇうぇーい")
    }, 1000)

    setTimeout(() => {
      setProgress(20)
      setProgressMessage("うぇーい")
    }, 2000)

    setTimeout(() => {
      setProgress(30)
      setProgressMessage("ほげーーい")
    }, 3000)

    // ファイルを保存する。
    saveFile()
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>さんたさんに　おねがいしよう！　🎅🦌🦌🦌🦌</title>
      </Head>
      <div className="w-full flex flex-col flex-nowrap justify-start items-center">
        <div>
          <Image
            className="ml-auto mr-auto mt-8"
            src="/images/christmas_santa_sori.png"
            alt="Logo image"
            width={256}
            height={256}
          />
        </div>
        <div>{progressMessage}</div>
        <progress id="sending-progress" max="100" value={progress}></progress>
        <Link href="/home">Go to home page</Link>
      </div>
    </React.Fragment>
  )
}
