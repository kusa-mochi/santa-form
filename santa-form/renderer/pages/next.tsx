import React, { useContext, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import HiraganaKeyboard from '../components/hiraganaKeyboard'
import MailContext from '../contexts/mailContext'
import Button from '../components/button'

export default function NextPage() {
  const { setMailText } = useContext(MailContext)
  const [inputText, setInputText] = useState("")
  const [confirmDialogDisplay, setConfirmDialogDisplay] = useState("hidden")

  const onBackspace = () => {
    setInputText(inputText.slice(0, -1))
  }
  const onKeyInput = (k: string) => {
    setInputText(`${inputText}${k}`)
  }
  const onSend = () => {
    setMailText(inputText)
  }
  const openConfirmDialog = () => {
    setConfirmDialogDisplay("block animate-modal-fade-in")
  }
  const closeConfirmDialog = () => {
    setConfirmDialogDisplay("hidden")
  }
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
            alt="わたしだよ"
            width={256}
            height={256}
          />
        </div>
        <div className='text-white text-4xl'>
          <p className='mt-12 mb-3 animate-text-focus-in'>きみが　ほしいものは　なにかな？</p>
          <p className='mb-8 animate-text-focus-in'>ひらがなで　かいて、「すすむ」ぼたんを　おしてね！</p>
        </div>
        <div className='flex flex-row flex-wrap justify-center items-center content-center w-full sm:w-full md:w-9/10 lg:w-4/5 xl:w-2/3 2xl:w-1/2'>
          <div className='bg-white text-gray-800 w-[calc(100%-100px)] h-14 text-4xl flex flex-row flex-wrap justify-start items-center content-center mb-8'>
            {inputText}
          </div>
          <div className='flex flex-row flex-wrap justify-center items-center content-center ml-1'>
            <button onClick={onBackspace}>
              <Image
                src="/images/backspace.png"
                alt="もじを１つけすよ"
                width={32}
                height={32}
              />
            </button>
          </div>
        </div>
        <HiraganaKeyboard onClick={onKeyInput} />
        <div onClick={openConfirmDialog}>
          <Image src="/images/navigation_go.png" alt='これを　おすと　わたしに　めーるを　おくるよ' width={150} height={90} onClick={onSend} />
        </div>
        {/* 確認ダイアログ */}
        <div className={`absolute top-0 left-0 w-full h-full ${confirmDialogDisplay}`}>
          <div className='relative bg-black bg-opacity-90 w-full h-full'>
            <div className='w-full h-full flex flex-col flex-nowrap justify-center items-center text-white'>
              <p className='text-4xl mb-6'>きみが　ほしいものは</p>
              <p className='text-5xl font-bold mb-6'>{inputText}</p>
              <p className='text-4xl mb-10'>かな？</p>
              <div>
                <Link href="/fin" className='mr-8'>
                  <Button primary={true}>&nbsp;&nbsp;&nbsp;はい&nbsp;&nbsp;&nbsp;</Button>
                </Link>
                <Button onClick={closeConfirmDialog}>いいえ</Button>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute w-full h-full top-0 left-0 pointer-events-none'>
          <div className='text-[#fffafa] text-[10px] fixed top-[-5%] animate-roll [text-shadow:_5vw_-100px_2px,_10vw_-400px_3px,_20vw_-500px_4px,_30vw_-580px_1px,_39vw_-250px_2px,_42vw_-340px_5px,_56vw_-150px_2px,_63vw_-180px_0px,78vw_-220px_4px,_86vw_-320px_9px,_94vw_-170px_7px]'>●</div>
          <div className='text-[#fffafa] text-[10px] fixed top-[-5%] animate-roll2 [text-shadow:_15vw_-100px_2px,_20vw_-400px_3px,_30vw_-500px_4px,_40vw_-580px_1px,_49vw_-250px_2px,_52vw_-340px_5px,_66vw_-150px_2px,_73vw_-180px_0px,88vw_-220px_4px,_96vw_-320px_9px,_4vw_-170px_7px]'>●</div>
          <div className='text-[#fffafa] text-[10px] fixed top-[-5%] animate-roll3 [text-shadow:_25vw_-100px_2px,_30vw_-400px_3px,_40vw_-500px_4px,_50vw_-580px_1px,_59vw_-250px_2px,_62vw_-340px_5px,_76vw_-150px_2px,_83vw_-180px_0px,98vw_-220px_4px,_6vw_-320px_9px,_14vw_-170px_7px]'>●</div>
          <div className='text-[#fffafa] text-[10px] fixed top-[-5%] animate-roll4 [text-shadow:_35vw_-100px_2px,_40vw_-400px_3px,_50vw_-500px_4px,_60vw_-580px_1px,_69vw_-250px_2px,_72vw_-340px_5px,_86vw_-150px_2px,_93vw_-180px_0px,8vw_-220px_4px,_16vw_-320px_9px,_24vw_-170px_7px]'>●</div>
        </div>
      </div>
    </React.Fragment>
  )
}
