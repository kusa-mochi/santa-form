import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Button from '../components/button'

export default function HomePage() {
  return (
    <React.Fragment>
      <Head>
        <title>さんたの　さいと　🎅🦌🦌🦌🦌</title>
      </Head>
      <div className="grid grid-col-1 text-2xl w-full text-center">
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
          <p className='mt-12 mb-3 animate-text-focus-in'>わたしは　さんただよ🎅</p>
          <p className='mb-3 animate-text-focus-in'>ようこそ　わたしの　さいとへ。</p>
          <p className='mb-3 animate-text-focus-in'>「すすむ」ぼたんを　おして</p>
          <p className='mb-8 animate-text-focus-in'>きみが　ほしいものを　おしえてね。</p>
        </div>
      </div>
      <div className="mt-1 w-full flex-wrap flex justify-center">
        <Link href="/next">
          <Image src="/images/navigation_go.png" alt='これを　おすと　さいとを　ひらくよ' width={150} height={90} />
        </Link>
      </div>
    </React.Fragment>
  )
}
