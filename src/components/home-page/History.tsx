import Image from "next/image";
import React from "react";
import img1 from "../../assets/images/zachariah-hagy-MCKrW7fB7Pw-unsplash.jpg";
import img2 from "../../assets/images/ivan-stern-LOLSb7m6XkU-unsplash.jpg";

type Props = {};

const History = (props: Props) => {
  return (
    <div className="lg:flex bg-secondary justify-around  lg:p-24 min-h-[100vh] ">
      <div className=" lg:w-[620px] lg:p-6 p-4">
        <div className="flex    items-center">
          <p className="text-primary uppercase mr-4 font-bold text-xl">
            founded in 2022
          </p>
          <div className="h-[2px] w-40 bg-primary"></div>
        </div>
        <h1 className="text-3xl lg:text-7xl font-Cormorant text-white">
          A sophisticated interpretation of traditional Japanese cuisine
        </h1>
        <div>
          <div className="mt-12">
            <Image src={img2} alt="" />
          </div>
        </div>
      </div>
      <div className="lg:h-[765px] p-4  max-w-lg lg:w-[510px]">
        <Image className="w-[100%]" src={img1} alt="" />
      </div>
    </div>
  );
};

export default History;
