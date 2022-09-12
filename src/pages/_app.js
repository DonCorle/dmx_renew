import React from "react";
import Head from "next/head";
import { AppConfig } from "../utils/AppConfig";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{AppConfig.site_name}</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
