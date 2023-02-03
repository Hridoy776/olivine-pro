import React from "react";
import Layout from "@/layout";
import Head from "next/head";

//  @ internal import //
import Cartbanner from "@/components/common/Cartbanner";
import Information from "@/components/about/Information";
import StartInfo from "@/components/about/Start-info";
import SecondaryBanner from "@/components/about/Secondary-banner";
import SignatureFood from "@/components/about/Signature-food";
import Dines from "@/components/home-page/Dines";

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
              <Information />
            </section>
            <section>
              <StartInfo />
            </section>
            <section>
              <SecondaryBanner />
            </section>
            <section>
              <SignatureFood />
            </section>
            <section>
            <Dines />
            </section>
          </main>
        </Layout>
      </main>
    </>
  );
};

export default index;
