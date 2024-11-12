import React, { useContext, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import HiraganaKeyboard from '../components/hiraganaKeyboard'
import MailContext from '../contexts/mailContext'
import Button from '../components/button'

export default function NextPage() {
  const {setMailText} = useContext(MailContext)
  const [inputText, setInputText] = useState("")
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
            alt="Logo image"
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
        <HiraganaKeyboard onClick={onKeyInput}/>
        {/* <Link href="/fin"> */}
        <div onClick={openConfirmDialog}>
          <Image src="/images/navigation_go.png" alt='これを　おすと　わたしに　めーるを　おくるよ' width={150} height={90} onClick={onSend} />
        </div>
        {/* </Link> */}
        <div className=''>
          <div className=''>
            <p className='text-4xl mb-3'>きみが　ほしいものは</p>
            <p className='text-5xl font-bold mb-3'>{inputText}</p>
            <p className='text-4xl'>かな？</p>
            <div>
              <Link href="/fin">
                <Button>はい</Button>
              </Link>
              <Button>いいえ</Button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
