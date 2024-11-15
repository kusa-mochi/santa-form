import React, { useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { setTimeout } from 'timers'
import MailContext from '../contexts/mailContext'

export default function FinPage() {
  // プログレスバーの進捗
  const [progress, setProgress] = useState(0)
  // 進捗に応じてサンタ画像に適用するアニメーションクラス
  const [santaAnimation, setSantaAnimation] = useState("")
  // 進捗を表すDOM要素に付するCSSクラス
  const [progressClass, setProgressClass] = useState("w-[0%]")
  // 進捗を表すDOM要素に付するCSSクラス名のリスト
  const progressClassList: string[] = [
    "w-[0%]",
    "w-[20%]",
    "w-[40%]",
    "w-[60%]",
    "w-[50%]",
    "w-[40%]",
    "w-[30%]",
    "w-[50%]",
    "w-[70%]",
    "w-[90%]",
    "w-[100%]",
    "w-[100%]",
  ]
  // 進捗メッセージ
  const [progressMessage, setProgressMessage] = useState("さんたさんに　おてがみを　おくっているよ！")
  // 進捗メッセージの文字列リソース
  const messages: string[] = [
    "さんたさんに　おてがみを　おくっているよ！",
    "さんたさんに　おてがみを　おくっているよ！",
    "さんたさんに　おてがみを　おくっているよ！",
    "あー！！！",
    "あー！！！",
    "あー！！！",
    "がんばれ　がんばれ！",
    "がんばれ　がんばれ！",
    "がんばれ　がんばれ！",
    "がんばれ　がんばれ！",
    "おてがみが　とどいたよ！　ぷれぜんとを　たのしみに　していてね🎅",
  ]

  // メール文面
  const {mailText} = useContext(MailContext)

  const saveFile = () => {
    window.ipc.writeToTextFile(mailText)
  }

  // 画面描画時にプログレスバーとメッセージを更新する処理。
  useEffect(() => {
    for (let prog: number = 0; prog < 11; prog++) {
      setTimeout(() => {
        setProgress((prog+1) * 10)
        setProgressClass(progressClassList[prog + 1])
        setProgressMessage(messages[prog])
        if (prog === 3) {
          setSantaAnimation("animate-vibrate")
        }
      }, (prog+1) * 2000)
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
        <div className='absolute top-0 left-[80%] mt-26'>
          <Image
            src="/images/snow_house.png"
            alt="さんたさんの　おうち"
            width={256}
            height={256}
          />
        </div>
        <div className='w-2/3 mt-28'>
          <Image
            className="ml-auto mr-auto transform scale-x-[-1] animate-vibrate"
            src="/images/christmas_santa_sori.png"
            alt="わたしだよ"
            width={256}
            height={256}
          />
        </div>
        <div className='text-white text-4xl mt-12 mb-8 animate-text-focus-in'>{progressMessage}</div>
        <div className='w-full sm:w-full md:w-9/10 lg:w-4/5 xl:w-2/3 2xl:w-1/2 h-8 bg-gray-700 flex flex-row flex-nowrap justify-start items-stretch rounded-full'>
          <div className={`bg-gray-100 transition-all ease-out duration-[2000ms] h-full rounded-full ${progressClass}`}></div>
        </div>
      </div>
    </React.Fragment>
  )
}
