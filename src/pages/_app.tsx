import '../styles/index.css'
import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { AuthContextProvider } from 'context/auth'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <title>Viact</title>
          <meta property="og:title" content="Viact" />
          <meta name="twitter:site" content="@dwarvesf" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="description" content="Viact" />
          <meta property="og:description" content="Viact" />
          <meta property="og:image" content="/thumbnail.jpeg" />
          <meta name="twitter:image" content="/thumbnail.jpeg" />
        </Head>
        <AuthContextProvider>
          <Component {...pageProps} />
        </AuthContextProvider>
      </>
    )
  }
}
export default MyApp
