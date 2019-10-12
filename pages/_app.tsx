import App, { AppContext } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { gutter, breakpoints } from '../components/Layout/Variables'

const GlobalStyle = createGlobalStyle`
  body {
    margin-top: 5vh;
    margin-bottom: 10vh;

    color: #003366;
    font-family: -apple-system, helvetica, futura, sans-serif;
    font-size: 16px;

    margin-left: ${gutter}%;
    margin-right: ${gutter}%;

    @media (max-width: ${breakpoints.medium}) {
      margin-left: ${gutter}%;
      margin-right: ${gutter}%;
    }
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
