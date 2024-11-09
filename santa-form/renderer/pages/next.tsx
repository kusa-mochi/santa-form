import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import HiraganaKeyboard from '../components/hiraganaKeyboard'

export default function NextPage() {
  const onKeyInput = (k: string) => {
    console.log(`typed:${k}`)
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
        <HiraganaKeyboard onClick={onKeyInput}/>
        <Link href="/fin">Go to fin page</Link>
      </div>
    </React.Fragment>
  )
}
