import React, { FormHTMLAttributes } from "react";

type Props = {};

const BealingDetails = (props: Props) => {
  const handleBeal = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event.currentTarget);
  };
  return (
    <div>
      <div className="w-[540px] mx-auto p-2">
        <h1 className="text-2xl p-4  capitalize my-[30px] ">bealing Details</h1>
        <form onSubmit={handleBeal}>
          <div className="grid grid-cols-2 gap-6 justify-center items-center p-4">
            <div className="form-control mb-4 border-b border-[#5c5c5c]">
              <label className="">
                <span className=" text-[20px] ">First name</span>
              </label>
              <input
                type="name"
                name="first_name"
                className="  focus:outline-none block w-full py-2 text-base uppercase bg-black "
              />
            </div>
            <div className="form-control mb-4 border-[#5c5c5c] border-b">
              <label className="">
                <span className=" text-[20px] ">Last name</span>
              </label>
              <input
                type="text"
                placeholder=""
                name="last_name"
                className="focus:outline-none block w-full py-2 text-base uppercase bg-black "
                required
              />
            </div>
          </div>
          <div className="form-control mb-4 mx-5 border-[#5c5c5c] border-b">
            <label className="">
              <span className=" text-[20px] ">company name(optional)</span>
            </label>
            <input
              type="text"
              placeholder=""
              name="fname"
              className="focus:outline-none block w-full py-2 text-base uppercase bg-black "
              required
            />
          </div>
          <div className="form-control mb-4 mx-5 border-b border-[#5c5c5c]">
            <label className="">
              <span className=" text-[20px] ">country/region</span>
            </label>
            <input
              type="text"
              placeholder="country"
              name="fname"
              className="focus:outline-none block w-full py-2 text-base uppercase bg-black "
              required
            />
          </div>
          <div className="form-control mb-4 border-[#5c5c5c] mx-5 border-b">
            <label className="">
              <span className=" text-[20px] ">streat address</span>
            </label>
            <input
              type="text"
              placeholder=""
              name="fname"
              className="focus:outline-none block w-full py-2 text-base uppercase bg-black "
              required
            />
          </div>
          <div className="form-control mb-4 mx-5 border-b border-[#5c5c5c]">
            <label className="">
              <span className=" text-[20px] ">state</span>
            </label>
            <input
              type="text"
              placeholder=""
              name="fname"
              className="focus:outline-none block w-full py-2 text-base uppercase bg-black "
              required
            />
          </div>
          <div className="form-control mb-4 mx-5 border-b border-[#5c5c5c]">
            <label className="">
              <span className=" text-[20px] ">postcode</span>
            </label>
            <input
              type="text"
              placeholder=""
              name="fname"
              className="focus:outline-none block w-full py-2 text-base uppercase bg-black "
              required
            />
          </div>
          <div className="form-control mb-4 mx-5 border-[#5c5c5c] border-b">
            <label className="">
              <span className=" text-[20px] ">phone</span>
            </label>
            <input
              type="text"
              placeholder=""
              name="fname"
              className="focus:outline-none block w-full py-2 text-base uppercase bg-black "
              required
            />
          </div>
          <div className="form-control mb-4 mx-5 border-[#5c5c5c]  border-b">
            <label className="">
              <span className=" text-[20px] ">email</span>
            </label>
            <input
              type="text"
              placeholder=""
              name="fname"
              className="focus:outline-none block w-full py-2 text-base uppercase bg-black  "
              required
            />
          </div>
          <div className="form-control mb-4 mx-5 btn-primary">
            <input type="submit" value="done" />
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default BealingDetails;
