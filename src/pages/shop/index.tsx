import Cartbanner from "@/components/common/Cartbanner";
import Navbar from "@/components/navbar/navbar";
import Order from "@/components/shop/Order";
import Layout from "@/layout";
import Head from "next/head";
import React from "react";

type Props = {};

const shop = (props: Props) => {
  return (
    <>
      <Head>
        <title>shop</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Layout>
        <main>
          <section>
            <Cartbanner>shop</Cartbanner>
          </section>
          <section className="bg-black py-8">
            <Order />
          </section>
        </main>
      </Layout>
    </>
  );
};

export default shop;
