import React from "react";

type Props = {};

const Cartbanner = (props: Props) => {
  return (
    <div
      style={{
        backgroundImage: `url(https://i.ibb.co/NNp4HJz/cartbanner.jpg)`,
        width: "100%",
      }}
      className="hero min-h-[80vh]"
    >
      <div className="hero-overlay "></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-6xl font-medium">Cart</h1>
        </div>
      </div>
    </div>
  );
};

export default Cartbanner;
