import React from "react";
import Image from "next/image";

// @ internal import //
import img1 from "../../assets/images/zachariah-hagy-MCKrW7fB7Pw-unsplash.jpg";
import img2 from "../../assets/images/emiliano-vittoriosi-OFismyezPnY-unsplash.jpg";

type Props = {};

const Information = (props: Props) => {
  return (
    <div className="lg:flex bg-secondary justify-around items-start  lg:p-24 min-h-[100vh] ">
      <div className=" lg:w-[620px] lg:px-6 px-4 py-4 lg:py-0 order-1 lg:order-3">
        <div className="flex items-center">
          <p className="text-primary uppercase mr-4 font-bold text-xl">
            founded in 2022
          </p>
          <div className="h-[2px] w-40 bg-primary"></div>
        </div>
        <p className="text-3xl lg:text-5xl font-Cormorant text-white">
          A sophisticated interpretation of traditional Japanese cuisine
        </p>
        <div className="text-white text-xl px-1">
          <p className="mt-6 mb-10">
            A distinctive, well-preserved and comfortable space, high-quality
            products, authentic cuisine, food and drinks are done flawlessly.
          </p>
          <p>
            We continue to be one of the top Japanese restaurants in America,
            attracting countless food lovers from all over the world. Our
            one-of-a-kind menu includes authentic tapas-style Japanese dishes
            and homemade desserts.
          </p>
        </div>
      </div>
      <div className="lg:h-[665px] px-4  max-w-lg lg:w-[510px] relative order-2">
        <div className="lg:absolute lg:w-[80%] lg:h-[80%] z-10 top-0 right-0">
          <Image className="lg:h-full" src={img1} alt="" />
        </div>
        <div className="mt-12 lg:w-[80%] lg:h-[70%] lg:absolute bottom-10 left-0">
          <Image className="lg:h-full" src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Information;
