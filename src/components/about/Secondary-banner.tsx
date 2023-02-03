import React from "react";
import Image from "next/image";

// @ internal import //
import shef from "../../assets/images/shef.jpg";
type Props = {};

const SecondaryBanner = (props: Props) => {
  return (
    <div
      className="hero min-h-[70vh]"
      style={{ backgroundImage: `url(${shef.src})` }}
    ></div>
  );
};

export default SecondaryBanner;
