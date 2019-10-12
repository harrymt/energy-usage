import App, { AppContext } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin-top: 10vh;
    font-family: monospace;
    text-align: center;

    background-color: red;
    color: #003366;
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
