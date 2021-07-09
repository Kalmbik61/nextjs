import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import React from "react";
import Button from "../components/Button/Button";
import HTitle from "../components/HTitle/HTitle";
import Par from "../components/Par/Par";
import Tag from "../components/Tag/Tag";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>My Top App with Next.js</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HTitle tag='h1'>Hello!</HTitle>
      <Button type='primary' arrow='right'>
        Primary
      </Button>
      <Button type='ghost' arrow='right'>
        Primary
      </Button>
      <Par> You will become the greatest developer, billioner and become new Elon Mask!</Par>
      <Par size='less'>
        You will become the greatest developer, billioner and become new Elon Mask!
      </Par>
      <Par size='large'>
        You will become the greatest developer, billioner and become new Elon Mask!
      </Par>

      <Tag size='s' color='ghost'>
        ghost
      </Tag>
      <Tag size='m' color='primary'>
        primary
      </Tag>
      <Tag size='m' color='red'>
        red
      </Tag>
      <Tag size='s' color='green'>
        green
      </Tag>
      <Tag size='m' color='grey' href='some website'>
        grey
      </Tag>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
