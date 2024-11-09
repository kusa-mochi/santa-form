import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { setTimeout } from 'timers'

export default function FinPage() {
  // プログレスバーの進捗
  const [progress, setProgress] = useState(0)
  // 進捗メッセージ
  const [progressMessage, setProgressMessage] = useState("")
  // 指定した時間が経過するまで待機する関数
  const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

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
        <div>{progressMessage}</div>
        <progress id="sending-progress" max="100" value={progress}></progress>
        <Link href="/home">Go to home page</Link>
      </div>
    </React.Fragment>
  )
}
