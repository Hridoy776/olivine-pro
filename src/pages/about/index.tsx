import React from "react";
import Layout from "@/layout";
import Head from "next/head";

//  @ internal import //
import Cartbanner from "@/components/common/Cartbanner";
import Experience from "@/components/home-page/Experience";
import Information from "@/components/about/Information";

type Props = {};

const index = (props: Props) => {
  return (
    <>
      <Head>
        <title>about</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <main>
        <Layout>
          <main>
            <Cartbanner>about</Cartbanner>
            <section>
              <Information/>
            </section>
          </main>
        </Layout>
      </main>
    </>
  );
};

export default index;
