import Image from "next/image";
import React from "react";

// @ internal imporrt //
import img1 from "../../assets/images/zachariah-hagy-MCKrW7fB7Pw-unsplash.jpg";
import img2 from "../../assets/images/emiliano-vittoriosi-OFismyezPnY-unsplash.jpg";

type Props = {};

const SignatureFood = (props: Props) => {
  return (
    <div className="lg:flex bg-secondary justify-around items-start lg:p-24 min-h-[100vh]">
      <div className=" lg:w-[620px] lg:px-0 lg:pr-6 px-4 py-4 lg:py-0">
        <div className="flex items-center">
          <p className="text-primary uppercase mr-4 font-bold text-xl">
            ENJOY OUR SIGNATURE FOOD
          </p>
          <div className="h-[2px] w-40 bg-primary"></div>
        </div>
        <p className="text-3xl leading-6 lg:text-6xl font-Cormorant text-white">
          Excellent Ingredients
        </p>
        <p className="text-3xl leading-6 lg:text-6xl font-Cormorant text-white">
          & Authentic Japanese
        </p>
        <p className="mt-4 text-3xl leading-6 lg:text-6xl font-Cormorant text-white">
          Cuisine
        </p>
        <div className="text-white text-xl px-1">
          <p className="mt-6 mb-10 text-xl">
            We are located in an excellent location in the center of the city,
            quiet in the middle of the hustle and bustle. Enjoy your meal time
            in a comfortable environment. We can’t wait to serve you at our
            restaurant.
          </p>
          <p>
            We present delicious and enticing dishes with high-quality
            ingredients. There is no set protocol for ordering from the menu.
          </p>
        </div>
      </div>
      <div className="lg:h-[665px] px-4  max-w-lg lg:w-[510px] relative">
        <div className="lg:absolute lg:w-[80%] lg:h-[80%] z-10 top-0 right-0">
          <Image className="lg:h-full" src={img1} alt="" />
        </div>
        <div className="mt-12 lg:w-[80%] lg:h-[70%] lg:absolute bottom-20 left-[-30px]">
          <Image className="lg:h-full" src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignatureFood;
