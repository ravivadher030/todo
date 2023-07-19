import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  console.log(pageProps)
  return (
    <>
      <Head>
        <title>Todo - App</title>
      </Head>
        <Component {...pageProps} />
    </>
  );
}
