import Cartbanner from "@/components/common/Cartbanner";
import Navbar from "@/components/navbar/navbar";
import Order from "@/components/shop/Order";
import React from "react";

type Props = {};

const shop = (props: Props) => {
  return (
    <>
      <Navbar />
      <section>
        <Cartbanner />
      </section>
      <section className="bg-black py-8">
        <Order />
      </section>
    </>
  );
};

export default shop;
