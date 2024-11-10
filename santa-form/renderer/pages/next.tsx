import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import HiraganaKeyboard from '../components/hiraganaKeyboard'

export default function NextPage() {
  const [inputText, setInputText] = useState("")
  const onKeyInput = (k: string) => {
    setInputText(`${inputText}${k}`)
  }
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
        <div>
          <p>さんたさんに　おねがいしたい　ぷれぜんとを　かいてね！</p>
        </div>
        <div className='flex flex-row flex-wrap justify-center items-center content-center w-full sm:w-full md:w-4/5 lg:w-2/3 xl:w-1/2 2xl:w-2/5'>
          {/* TODO: back spaceアイコンを設定する。 */}
          <div className='bg-white text-gray-800 w-[calc(100%-100px)] h-8 flex flex-row flex-wrap justify-start items-center content-center'>
            {inputText}
          </div>
          <div className='flex flex-row flex-wrap justify-center items-center content-center ml-1'>
            <button>
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
        <Link href="/fin">
          <button className='bg-gray-500' onClick={onSend}>めーるを　おくる</button>
        </Link>
      </div>
    </React.Fragment>
  )
}
