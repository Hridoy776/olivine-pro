import Head from "next/head";
import React from "react";

type Props = {};

const index = (props: Props) => {
  return (
    <>
      <Head>
        <title>about</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <div>index</div>
    </>
  );
};

export default index;
