import Image from "next/image";
import React from "react";

// @ internal import //
import pic1 from "../../assets/images/zachariah-hagy-MCKrW7fB7Pw-unsplash.jpg";

type Props = {};

const ContactBanner = (props: Props) => {
  return (
    <div className="min-h-screen">
      <h1 className="text-center text-5xl text-white mb-20">Locations</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-fit mx-auto">
        <div className="w-[390px]">
          <Image src={pic1} alt="" />
          <div className="text-center">
            <p className="text-primary text-xl mt-2">America</p>
            <h1 className="text-white text-4xl my-3">New York</h1>
            <div className="text-xl text-white">
              <p>212 Madison Ave, New York, NY 10016</p>
              <p>booking@patiotime.com</p>
              <p>+39 055 123 4567</p>
              <a className="text-primary" href="">get directions</a>
            </div>
          </div>
        </div>
        <div className="w-[390px]">
          <Image src={pic1} alt="" />
          <div className="text-center">
            <p className="text-primary text-xl mt-2">America</p>
            <h1 className="text-white text-4xl my-3">New York</h1>
            <div className="text-xl text-white">
              <p>212 Madison Ave, New York, NY 10016</p>
              <p>booking@patiotime.com</p>
              <p>+39 055 123 4567</p>
              <a className="text-primary" href="">get directions</a>
            </div>
          </div>
        </div>
        <div className="w-[390px]">
          <Image src={pic1} alt="" />
          <div className="text-center">
            <p className="text-primary text-xl mt-2">America</p>
            <h1 className="text-white text-4xl my-3">New York</h1>
            <div className="text-xl text-white">
              <p>212 Madison Ave, New York, NY 10016</p>
              <p>booking@patiotime.com</p>
              <p>+39 055 123 4567</p>
              <a className="text-primary" href="">get directions</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
