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
      <div className='absolute w-full h-full top-0 left-0 pointer-events-none	'>
        <div className='text-[#fffafa] text-[10px] fixed top-[-5%] animate-roll [text-shadow:_5vw_-100px_2px,_10vw_-400px_3px,_20vw_-500px_4px,_30vw_-580px_1px,_39vw_-250px_2px,_42vw_-340px_5px,_56vw_-150px_2px,_63vw_-180px_0px,78vw_-220px_4px,_86vw_-320px_9px,_94vw_-170px_7px]'>●</div>
        <div className='text-[#fffafa] text-[10px] fixed top-[-5%] animate-roll2 [text-shadow:_15vw_-100px_2px,_20vw_-400px_3px,_30vw_-500px_4px,_40vw_-580px_1px,_49vw_-250px_2px,_52vw_-340px_5px,_66vw_-150px_2px,_73vw_-180px_0px,88vw_-220px_4px,_96vw_-320px_9px,_4vw_-170px_7px]'>●</div>
        <div className='text-[#fffafa] text-[10px] fixed top-[-5%] animate-roll3 [text-shadow:_25vw_-100px_2px,_30vw_-400px_3px,_40vw_-500px_4px,_50vw_-580px_1px,_59vw_-250px_2px,_62vw_-340px_5px,_76vw_-150px_2px,_83vw_-180px_0px,98vw_-220px_4px,_6vw_-320px_9px,_14vw_-170px_7px]'>●</div>
        <div className='text-[#fffafa] text-[10px] fixed top-[-5%] animate-roll4 [text-shadow:_35vw_-100px_2px,_40vw_-400px_3px,_50vw_-500px_4px,_60vw_-580px_1px,_69vw_-250px_2px,_72vw_-340px_5px,_86vw_-150px_2px,_93vw_-180px_0px,8vw_-220px_4px,_16vw_-320px_9px,_24vw_-170px_7px]'>●</div>
      </div>
    </React.Fragment>
  )
}
