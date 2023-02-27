import Link from "next/link";
import React from "react";

type Props = {};

const Genarel = (props: Props) => {
  return (
    <div className="lg:grid grid-cols-12  bg-secondary gap-3 lg:p-24 p-4 min-h-[100vh] ">
      <div className="col-span-6 lg:px-0">
        <div className="flex w-full items-center">
          <p className="text-primary uppercase mr-4 font-bold lg:text-xl">
            GENERAL INQUIRIES
          </p>
          <div className="h-[2px] w-40 bg-primary"></div>
        </div>
        <h1 className="text-3xl lg:text-7xl my-6 font-Cormorant text-white">
          Contact Us
        </h1>
        <div className="text-white">
          <p className="text-xl my-5">
            For general inquiries please kindly complete the form, or email:
            info@olivine.com
          </p>
          <p className="mb-1">Reserve by email: booking@olivine.com</p>
          <div className="my-3">
            <p className="mb-1 text-lg font-bold">Opening hours:</p>
            <p className="mb-1">Mon – Thu: 10.00 am – 01:00 am</p>
            <p>Fri – Sun: 10:00 am – 02:00 am</p>
          </div>
          <div className="border-b-2 border-primary inline-block text-lg pb-1 uppercase mt-3">
            <Link href={"/reservation"}>make a reservation</Link>
          </div>
        </div>
      </div>
      <div className="col-span-6 max-w-xl text-white">
        <form action="">
          <div className="form-control mb-4 border-b border-[#5c5c5c]">
            <label className="">
              <span className=" text-[20px] ">your email</span>
            </label>
            <input
              type="text"
              name="country"
              className="focus:outline-none block w-full py-2 text-base bg-black"
              required
            />
          </div>
          <div className="form-control mb-4 border-b border-[#5c5c5c]">
            <label className="">
              <span className=" text-[20px] ">your email</span>
            </label>
            <input
              type="text"
              name="country"
              className="focus:outline-none block w-full py-2 text-base bg-black"
              required
            />
          </div>
          <div className="form-control mb-4 border-b border-[#5c5c5c]">
            <label className="">
              <span className=" text-[20px] ">subject</span>
            </label>
            <input
              type="text"
              name="country"
              className="focus:outline-none block w-full py-2 text-base bg-black"
              required
            />
          </div>
          <div className="form-control mb-4 border-b border-[#5c5c5c]">
            <label className="">
              <span className=" text-[20px] ">subject</span>
            </label>
            <textarea
              className="focus:outline-none block w-full py-2 text-base bg-black h-[150px]"
              name=""
              id=""
            ></textarea>
          </div>
          <button className="btn-primary px-8 pb-1 text-xl font-medium uppercase" type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};

export default Genarel;
