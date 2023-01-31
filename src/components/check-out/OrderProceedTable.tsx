import React from "react";

type Props = {
    className:string;
};

const OrderProceedTable = (props: Props) => {
  return (
    <div className=" w-fit h-fit my-[60px] mx-auto bg-[#151515] px-[40px] py-[30px]">
      <h1 className="text-2xl uppercase mb-8">your order</h1>

      <table className=" shop_table  ">
        <thead>
          <tr className=" ">
            <th className=" ">order</th>
            <th className=" ">Contact</th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <th className=" ">order</th>
            <th className=" ">Contact</th>
          </tr>
          <tr className="">
            <th className=" ">order</th>
            <th className=" ">Contact</th>
          </tr>
          <tr className="">
            <th className=" ">order</th>
            <th className=" ">Contact</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderProceedTable;
