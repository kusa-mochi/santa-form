import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function FinPage() {
  return (
    <React.Fragment>
      <Head>
        <title>さんたさんに　おねがいしよう！　🎅🦌🦌🦌🦌</title>
      </Head>
      <div className="grid grid-col-1 text-2xl w-full text-center">
        <div>
          <Image
            className="ml-auto mr-auto mt-8"
            src="/images/christmas_santa_sori.png"
            alt="Logo image"
            width={256}
            height={256}
          />
        </div>
        <span>⚡ Nextron ⚡</span>
      </div>
      <div className="mt-1 w-full flex-wrap flex justify-center">
        <Link href="/home">Go to home page</Link>
      </div>
    </React.Fragment>
  )
}
