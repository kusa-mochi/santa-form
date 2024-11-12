import React, { useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { setTimeout } from 'timers'
import MailContext from '../contexts/mailContext'

export default function FinPage() {
  // プログレスバーの進捗
  const [progress, setProgress] = useState(0)
  // 進捗を表すDOM要素に付するCSSクラス
  const [progressClass, setProgressClass] = useState("w-[0%]")
  // 進捗を表すDOM要素に付するCSSクラス名のリスト
  const progressClassList: string[] = [
    "w-[0%]",
    "w-[10%]",
    "w-[20%]",
    "w-[30%]",
    "w-[40%]",
    "w-[50%]",
    "w-[60%]",
    "w-[70%]",
    "w-[80%]",
    "w-[90%]",
    "w-[100%]",
  ]
  // 進捗メッセージ
  const [progressMessage, setProgressMessage] = useState("さんたさんに　おてがみを　おくっているよ！")
  // 進捗メッセージの文字列リソース
  const messages: string[] = [
    "あ",
    "あい",
    "あいう",
    "あいうえ",
    "あいうえお",
    "か",
    "かき",
    "かきく",
    "かきくけ",
    "かきくけこ",
  ]

  // メール文面
  const {mailText} = useContext(MailContext)

  const saveFile = () => {
    window.ipc.writeToTextFile(mailText)
  }

  // 画面描画時にプログレスバーとメッセージを更新する処理。
  useEffect(() => {
    for (let prog: number = 0; prog < 10; prog++) {
      setTimeout(() => {
        setProgress((prog+1) * 10)
        setProgressClass(progressClassList[prog + 1])
        setProgressMessage(messages[prog])
      }, (prog+1) * 1000)
    }

    // ファイルを保存する。
    saveFile()
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>さんたの　さいと　🎅🦌🦌🦌🦌</title>
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
        <div className='text-white text-4xl'>{progressMessage}</div>
        {/* <progress id="sending-progress" max="100" value={progress}></progress> */}
        <div className='w-full sm:w-full md:w-9/10 lg:w-4/5 xl:w-2/3 2xl:w-1/2 h-8 bg-gray-700 flex flex-row flex-nowrap justify-start items-stretch'>
          <div className={`bg-gray-100 ${progressClass}`}></div>
        </div>
        <Link href="/home">Go to home page</Link>
      </div>
    </React.Fragment>
  )
}
