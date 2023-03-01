import 'bootstrap/dist/css/bootstrap.css';
import 'sigmoid/styles/globals.css'
import Head from "next/head";

import {useEffect} from "react";
import Navbar from "sigmoid/components/Navbar";

export default function App({ Component, pageProps }) {
  return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta name="description" content="Sigmoid task constructor"/>
          <title>Sigmoid</title>
        </Head>
        <Navbar/>
        <Component {...pageProps} />
      </>
  )
}
