import App, { AppContext } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin-top: 5vh;
    margin-bottom: 10vh;

    color: #003366;
    font-family: -apple-system, helvetica, futura, sans-serif;
    font-size: 16px;
    margin-left: 3vh;
    margin-right: 3vh;
  }
`

export default class MyApp extends App {
  static async getInitialProps(props: AppContext) {
    const { Component, ctx } = props

    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>Energy Usage</title>
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    )
  }
}
