import React from "react";
import Head from "next/head";

//@ internal import //
import ContactBanner from "@/components/contact/ContactBanner";
import Layout from "@/layout";
import Dines from "@/components/home-page/Dines";
import Genarel from "@/components/contact/Genarel";

type Props = {};

const contact = (props: Props) => {
  return (
    <>
      <Head>
        <title>contact</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Layout>
        <main className="bg-black py-28">
          <section>
            <ContactBanner />
          </section>
          <section>
            <Genarel/>
          </section>
          <section>
            <Dines />
          </section>
        </main>
      </Layout>
    </>
  );
};

export default contact;
