import React, { useState } from 'react'
import type { AppProps } from 'next/app'

import '../styles/globals.css'
import MailContext from '../contexts/mailContext'

function MyApp({ Component, pageProps }: AppProps) {
  const [mailText, setMailText] = useState("")
  return (
    <MailContext.Provider value={{mailText, setMailText}}>
      <Component {...pageProps} />
    </MailContext.Provider>
  )
}

export default MyApp
