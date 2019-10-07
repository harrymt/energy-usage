import React from 'react'
import App from 'next/app'
import Head from 'next/head'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <div>
        <Head>
          <title>Energy Usage</title>
          <link rel="manifest" href="/static/manifest.json" />
          <meta name="theme-color" content="#555" />
          <meta name="description" content="content" />
        </Head>
        <Component {...pageProps} />
      </div>
    )
  }
}
