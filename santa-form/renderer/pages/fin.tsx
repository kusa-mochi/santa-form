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
  // 雪アニメーションクラス
  const [roll1, setRoll1] = useState("animate-roll")
  const [roll2, setRoll2] = useState("animate-roll2")
  const [roll3, setRoll3] = useState("animate-roll3")
  const [roll4, setRoll4] = useState("animate-roll4")

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
          setRoll1("animate-fubuki1")
          setRoll2("animate-fubuki2")
          setRoll3("animate-fubuki3")
          setRoll4("animate-fubuki4")
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
        <div className='absolute w-full h-full top-0 left-0 pointer-events-none'>
          <div className={`${roll1} text-[#fffafa] text-[14px] fixed top-[-5%] [text-shadow:_5vw_-100px_2px,_10vw_-400px_3px,_20vw_-500px_4px,_30vw_-580px_1px,_39vw_-250px_2px,_42vw_-340px_5px,_56vw_-150px_2px,_63vw_-180px_0px,78vw_-220px_4px,_86vw_-320px_9px,_94vw_-170px_7px]`}>●</div>
          <div className={`${roll2} text-[#fffafa] text-[14px] fixed top-[-5%] [text-shadow:_15vw_-100px_2px,_20vw_-400px_3px,_30vw_-500px_4px,_40vw_-580px_1px,_49vw_-250px_2px,_52vw_-340px_5px,_66vw_-150px_2px,_73vw_-180px_0px,88vw_-220px_4px,_96vw_-320px_9px,_4vw_-170px_7px]`}>●</div>
          <div className={`${roll3} text-[#fffafa] text-[14px] fixed top-[-5%] [text-shadow:_25vw_-100px_2px,_30vw_-400px_3px,_40vw_-500px_4px,_50vw_-580px_1px,_59vw_-250px_2px,_62vw_-340px_5px,_76vw_-150px_2px,_83vw_-180px_0px,98vw_-220px_4px,_6vw_-320px_9px,_14vw_-170px_7px]`}>●</div>
          <div className={`${roll4} text-[#fffafa] text-[14px] fixed top-[-5%] [text-shadow:_35vw_-100px_2px,_40vw_-400px_3px,_50vw_-500px_4px,_60vw_-580px_1px,_69vw_-250px_2px,_72vw_-340px_5px,_86vw_-150px_2px,_93vw_-180px_0px,8vw_-220px_4px,_16vw_-320px_9px,_24vw_-170px_7px]`}>●</div>
        </div>
      </div>
    </React.Fragment>
  )
}
