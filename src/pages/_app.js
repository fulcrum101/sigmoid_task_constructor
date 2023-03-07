import 'bootstrap/dist/css/bootstrap.css';
import 'sigmoid/styles/globals.css'
import Head from "next/head";


import My_navbar from "sigmoid/components/Navbar";

export default function App({ Component, pageProps }) {
  return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta name="description" content="Sigmoid task constructor"/>
          <title>Sigmoid</title>
            <link rel="preconnect" href="https://fonts.googleapis.com/"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital@0;1&display=swap" rel="stylesheet"/>
        </Head>
        <My_navbar/>
        <Component {...pageProps} />
      </>
  )
}
