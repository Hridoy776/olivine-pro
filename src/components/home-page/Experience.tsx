import React from "react";
import Image from "next/image";

// @ internal import //
import img1 from "../../assets/images/zachariah-hagy-MCKrW7fB7Pw-unsplash.jpg";
import img2 from "../../assets/images/ivan-stern-LOLSb7m6XkU-unsplash.jpg";

type Props = {};

const Experience = (props: Props) => {
  return (
    <div className="flex bg-secondary justify-around  p-24 min-h-[100vh] ">
      <div className="h-[765px] w-[510px]">
        <Image src={img1} alt="" />
      </div>
      <div className="w-[620px] p-6">
        <div className="flex mb-4   items-center">
          <p className="text-primary uppercase mr-4 font-bold text-xl">
            beautiful quite space
          </p>
          <div className="h-[2px] w-40 bg-primary"></div>
        </div>
        <h1 className="text-7xl font-Cormorant text-white capitalize ">
          perfect dining Experience
        </h1>
        <p className="text-white text-xl mt-6">
          We are located in an excellent location in the center of the city,
          quiet in the middle of the hustle and bustle. Enjoy your meal time in
          a comfortable environment. We can’t wait to serve you at our
          restaurant.
        </p>
        <p className="text-white hover:text-primary my-4 hover:link-hover text-[1.2rem] capitalize">
          <a href="">Find our location</a>
        </p>
        <div>
          <div className="mt-12">
            <Image src={img2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
