import React from 'react'
import '../scss/style.scss'
import Portfolio from '../components/Portfolio'
import Head from 'next/head'
export default function MyApp() {
  return (
    <>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <title>Title Here</title>
            {/* <link rel="shortcut icon" type="image/png" href="/icon.png" sizes="50x32"/> */}
            <meta name="title" content="Kit Harvey" />
            <meta
              name="description"
              content="I'm a self-taught front-end developer. I help clients and companies build their web user interfaces using React, TypeScript and Sass."
            />
        </Head>
        <Portfolio/>
    </>
  )
}