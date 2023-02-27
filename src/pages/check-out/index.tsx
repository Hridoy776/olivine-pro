import BealingDetails from "@/components/check-out/BealingDetails";
import OrderProceedTable from "@/components/check-out/OrderProceedTable";
import Cartbanner from "@/components/common/Cartbanner";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/navbar";
import React from "react";

type Props = {};

const CheckOut = (props: Props) => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <section className=" ">
        <Cartbanner>CheckOut</Cartbanner>
        <div className="w-[1200px] mx-auto grid grid-cols-2 gap-4 justify-center ">
          <BealingDetails />
          <OrderProceedTable className="mx-auto" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CheckOut;
