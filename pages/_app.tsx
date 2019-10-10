import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import styled from 'styled-components'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    const StyledApp = styled(Component)`
      background-color: #eee;
      color: #003366;
      scrollbar-width: none;
      overflow-x: hidden;
      overflow-y: auto;

      ::-webkit-scrollbar {
        display: none;
      }
    `

    return (
      <div>
        <Head>
          <title>Energy Usage</title>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#555" />
          <meta name="description" content="content" />
        </Head>
        <StyledApp {...pageProps} />
      </div>
    )
  }
}
