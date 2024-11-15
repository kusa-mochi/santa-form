import React, { useContext, useEffect, useState } from 'react'
import Head from 'next/head'
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
    "w-[45%]",
    "w-[30%]",
    "w-[15%]",
    "w-[35%]",
    "w-[55%]",
    "w-[80%]",
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

  // 終了メッセージクラス
  const [ending, setEnding] = useState("hidden")

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
      setTimeout(() => {
        setEnding("animate-text-focus-in")
      }, 13 * 2000);
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
          <div className={`bg-gray-100 transition-all ease-linear duration-[2000ms] h-full rounded-full ${progressClass}`}></div>
        </div>
        <div className='text-white text-4xl text-center'>
          <p className={`mt-16 mb-3 ${ending}`}>このさいとは　もう　とじてもらって　だいじょうぶだよ</p>
          <p className={`${ending}`}>それでは　また　くりすますに！</p>
        </div>
        <div className='absolute w-full h-full top-0 left-0 pointer-events-none'>
          <div className={`${roll1} text-[#fffafa] text-[14px] fixed top-[-5%] [text-shadow:_77vw_-571px_1px,_100vw_-615px_6px,_59vw_-327px_9px,_91vw_-323px_6px,_47vw_-237px_7px,_71vw_-726px_2px,_41vw_-869px_3px,_10vw_-905px_0px,_65vw_-644px_8px,_19vw_-472px_2px,_50vw_-586px_5px,_60vw_-245px_5px,_67vw_-716px_1px,_38vw_-666px_2px,_57vw_-484px_3px,_42vw_-105px_9px,_10vw_-597px_9px,_43vw_-740px_5px,_49vw_-523px_9px,_39vw_-619px_6px,_4vw_-88px_5px,_39vw_-399px_1px,_49vw_-43px_3px,_47vw_-529px_1px,_34vw_-324px_8px,_2vw_-699px_4px,_58vw_-112px_7px,_17vw_-159px_0px,_15vw_-513px_6px,_63vw_-203px_2px,_4vw_-999px_0px,_45vw_-128px_8px,_2vw_-104px_1px,_53vw_-439px_1px,_25vw_-751px_3px,_23vw_-692px_9px,_18vw_-18px_5px,_55vw_-293px_7px,_67vw_-813px_1px,_94vw_-847px_5px,_57vw_-485px_3px,_90vw_-337px_9px,_48vw_-743px_4px,_57vw_-23px_4px,_79vw_-567px_8px,_0vw_-339px_9px,_27vw_-322px_4px,_30vw_-270px_7px,_64vw_-688px_9px,_57vw_-378px_5px,_5vw_-785px_10px,_41vw_-336px_4px,_55vw_-344px_7px,_70vw_-26px_3px,_35vw_-480px_1px,_49vw_-920px_3px,_28vw_-720px_3px,_83vw_-61px_2px,_96vw_-984px_5px,_71vw_-693px_7px,_6vw_-76px_5px,_85vw_-45px_5px,_2vw_-597px_5px,_79vw_-394px_1px,_67vw_-678px_9px,_73vw_-873px_5px,_11vw_-176px_9px,_90vw_-408px_7px,_30vw_-475px_7px,_96vw_-120px_8px,_45vw_-483px_1px,_45vw_-756px_3px,_48vw_-923px_6px,_18vw_-580px_6px,_65vw_-555px_4px,_30vw_-373px_6px,_92vw_-148px_1px,_17vw_-926px_0px,_6vw_-141px_8px,_3vw_-857px_5px,_26vw_-106px_4px,_6vw_-807px_10px,_68vw_-900px_0px,_81vw_-620px_9px,_25vw_-531px_5px,_46vw_-24px_4px,_38vw_-899px_2px,_93vw_-529px_7px,_30vw_-229px_7px,_50vw_-663px_9px,_10vw_-903px_3px,_91vw_-669px_2px,_53vw_-703px_9px,_58vw_-165px_2px,_46vw_-127px_1px,_62vw_-799px_1px,_92vw_-223px_7px,_67vw_-384px_9px,_85vw_-371px_0px,_6vw_-480px_1px]`}>●</div>
          <div className={`${roll2} text-[#fffafa] text-[14px] fixed top-[-5%] [text-shadow:_87vw_-571px_1px,_10vw_-615px_6px,_69vw_-327px_9px,_1vw_-323px_6px,_57vw_-237px_7px,_81vw_-726px_2px,_51vw_-869px_3px,_20vw_-905px_0px,_75vw_-644px_8px,_29vw_-472px_2px,_60vw_-586px_5px,_70vw_-245px_5px,_77vw_-716px_1px,_48vw_-666px_2px,_67vw_-484px_3px,_52vw_-105px_9px,_20vw_-597px_9px,_53vw_-740px_5px,_59vw_-523px_9px,_49vw_-619px_6px,_14vw_-88px_5px,_49vw_-399px_1px,_59vw_-43px_3px,_57vw_-529px_1px,_44vw_-324px_8px,_12vw_-699px_4px,_68vw_-112px_7px,_27vw_-159px_0px,_25vw_-513px_6px,_73vw_-203px_2px,_14vw_-999px_0px,_55vw_-128px_8px,_12vw_-104px_1px,_63vw_-439px_1px,_35vw_-751px_3px,_33vw_-692px_9px,_28vw_-18px_5px,_65vw_-293px_7px,_77vw_-813px_1px,_4vw_-847px_5px,_67vw_-485px_3px,_0vw_-337px_9px,_58vw_-743px_4px,_67vw_-23px_4px,_89vw_-567px_8px,_10vw_-339px_9px,_37vw_-322px_4px,_40vw_-270px_7px,_74vw_-688px_9px,_67vw_-378px_5px,_15vw_-785px_10px,_51vw_-336px_4px,_65vw_-344px_7px,_80vw_-26px_3px,_45vw_-480px_1px,_59vw_-920px_3px,_38vw_-720px_3px,_93vw_-61px_2px,_6vw_-984px_5px,_81vw_-693px_7px,_16vw_-76px_5px,_95vw_-45px_5px,_12vw_-597px_5px,_89vw_-394px_1px,_77vw_-678px_9px,_83vw_-873px_5px,_21vw_-176px_9px,_0vw_-408px_7px,_40vw_-475px_7px,_6vw_-120px_8px,_55vw_-483px_1px,_55vw_-756px_3px,_58vw_-923px_6px,_28vw_-580px_6px,_75vw_-555px_4px,_40vw_-373px_6px,_2vw_-148px_1px,_27vw_-926px_0px,_16vw_-141px_8px,_13vw_-857px_5px,_36vw_-106px_4px,_16vw_-807px_10px,_78vw_-900px_0px,_91vw_-620px_9px,_35vw_-531px_5px,_56vw_-24px_4px,_48vw_-899px_2px,_3vw_-529px_7px,_40vw_-229px_7px,_60vw_-663px_9px,_20vw_-903px_3px,_1vw_-669px_2px,_63vw_-703px_9px,_68vw_-165px_2px,_56vw_-127px_1px,_72vw_-799px_1px,_2vw_-223px_7px,_77vw_-384px_9px,_95vw_-371px_0px,_16vw_-480px_1px]`}>●</div>
          <div className={`${roll3} text-[#fffafa] text-[14px] fixed top-[-5%] [text-shadow:_97vw_-571px_1px,_20vw_-615px_6px,_79vw_-327px_9px,_11vw_-323px_6px,_67vw_-237px_7px,_91vw_-726px_2px,_61vw_-869px_3px,_30vw_-905px_0px,_85vw_-644px_8px,_39vw_-472px_2px,_70vw_-586px_5px,_80vw_-245px_5px,_87vw_-716px_1px,_58vw_-666px_2px,_77vw_-484px_3px,_62vw_-105px_9px,_30vw_-597px_9px,_63vw_-740px_5px,_69vw_-523px_9px,_59vw_-619px_6px,_24vw_-88px_5px,_59vw_-399px_1px,_69vw_-43px_3px,_67vw_-529px_1px,_54vw_-324px_8px,_22vw_-699px_4px,_78vw_-112px_7px,_37vw_-159px_0px,_35vw_-513px_6px,_83vw_-203px_2px,_24vw_-999px_0px,_65vw_-128px_8px,_22vw_-104px_1px,_73vw_-439px_1px,_45vw_-751px_3px,_43vw_-692px_9px,_38vw_-18px_5px,_75vw_-293px_7px,_87vw_-813px_1px,_14vw_-847px_5px,_77vw_-485px_3px,_10vw_-337px_9px,_68vw_-743px_4px,_77vw_-23px_4px,_99vw_-567px_8px,_20vw_-339px_9px,_47vw_-322px_4px,_50vw_-270px_7px,_84vw_-688px_9px,_77vw_-378px_5px,_25vw_-785px_10px,_61vw_-336px_4px,_75vw_-344px_7px,_90vw_-26px_3px,_55vw_-480px_1px,_69vw_-920px_3px,_48vw_-720px_3px,_3vw_-61px_2px,_16vw_-984px_5px,_91vw_-693px_7px,_26vw_-76px_5px,_5vw_-45px_5px,_22vw_-597px_5px,_99vw_-394px_1px,_87vw_-678px_9px,_93vw_-873px_5px,_31vw_-176px_9px,_10vw_-408px_7px,_50vw_-475px_7px,_16vw_-120px_8px,_65vw_-483px_1px,_65vw_-756px_3px,_68vw_-923px_6px,_38vw_-580px_6px,_85vw_-555px_4px,_50vw_-373px_6px,_12vw_-148px_1px,_37vw_-926px_0px,_26vw_-141px_8px,_23vw_-857px_5px,_46vw_-106px_4px,_26vw_-807px_10px,_88vw_-900px_0px,_1vw_-620px_9px,_45vw_-531px_5px,_66vw_-24px_4px,_58vw_-899px_2px,_13vw_-529px_7px,_50vw_-229px_7px,_70vw_-663px_9px,_30vw_-903px_3px,_11vw_-669px_2px,_73vw_-703px_9px,_78vw_-165px_2px,_66vw_-127px_1px,_82vw_-799px_1px,_12vw_-223px_7px,_87vw_-384px_9px,_5vw_-371px_0px,_26vw_-480px_1px]`}>●</div>
          <div className={`${roll4} text-[#fffafa] text-[14px] fixed top-[-5%] [text-shadow:_7vw_-571px_1px,_30vw_-615px_6px,_89vw_-327px_9px,_21vw_-323px_6px,_77vw_-237px_7px,_1vw_-726px_2px,_71vw_-869px_3px,_40vw_-905px_0px,_95vw_-644px_8px,_49vw_-472px_2px,_80vw_-586px_5px,_90vw_-245px_5px,_97vw_-716px_1px,_68vw_-666px_2px,_87vw_-484px_3px,_72vw_-105px_9px,_40vw_-597px_9px,_73vw_-740px_5px,_79vw_-523px_9px,_69vw_-619px_6px,_34vw_-88px_5px,_69vw_-399px_1px,_79vw_-43px_3px,_77vw_-529px_1px,_64vw_-324px_8px,_32vw_-699px_4px,_88vw_-112px_7px,_47vw_-159px_0px,_45vw_-513px_6px,_93vw_-203px_2px,_34vw_-999px_0px,_75vw_-128px_8px,_32vw_-104px_1px,_83vw_-439px_1px,_55vw_-751px_3px,_53vw_-692px_9px,_48vw_-18px_5px,_85vw_-293px_7px,_97vw_-813px_1px,_24vw_-847px_5px,_87vw_-485px_3px,_20vw_-337px_9px,_78vw_-743px_4px,_87vw_-23px_4px,_9vw_-567px_8px,_30vw_-339px_9px,_57vw_-322px_4px,_60vw_-270px_7px,_94vw_-688px_9px,_87vw_-378px_5px,_35vw_-785px_10px,_71vw_-336px_4px,_85vw_-344px_7px,_0vw_-26px_3px,_65vw_-480px_1px,_79vw_-920px_3px,_58vw_-720px_3px,_13vw_-61px_2px,_26vw_-984px_5px,_1vw_-693px_7px,_36vw_-76px_5px,_15vw_-45px_5px,_32vw_-597px_5px,_9vw_-394px_1px,_97vw_-678px_9px,_3vw_-873px_5px,_41vw_-176px_9px,_20vw_-408px_7px,_60vw_-475px_7px,_26vw_-120px_8px,_75vw_-483px_1px,_75vw_-756px_3px,_78vw_-923px_6px,_48vw_-580px_6px,_95vw_-555px_4px,_60vw_-373px_6px,_22vw_-148px_1px,_47vw_-926px_0px,_36vw_-141px_8px,_33vw_-857px_5px,_56vw_-106px_4px,_36vw_-807px_10px,_98vw_-900px_0px,_11vw_-620px_9px,_55vw_-531px_5px,_76vw_-24px_4px,_68vw_-899px_2px,_23vw_-529px_7px,_60vw_-229px_7px,_80vw_-663px_9px,_40vw_-903px_3px,_21vw_-669px_2px,_83vw_-703px_9px,_88vw_-165px_2px,_76vw_-127px_1px,_92vw_-799px_1px,_22vw_-223px_7px,_97vw_-384px_9px,_15vw_-371px_0px,_36vw_-480px_1px]`}>●</div>
        </div>
      </div>
      <audio src='/sounds/bell.mp3' autoPlay></audio>
    </React.Fragment>
  )
}
