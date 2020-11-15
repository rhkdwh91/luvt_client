// import App from "next/app";
import Head from 'next/head'
import BasicLayout from "layout/BasicLayout";

import type { AppProps /*, AppContext */ } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BasicLayout>
      <Head>
        <title>LUVT</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </BasicLayout>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp