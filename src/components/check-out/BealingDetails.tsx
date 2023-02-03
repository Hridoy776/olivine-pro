import React, {
  DetailedHTMLProps,
  FormHTMLAttributes,
  InputHTMLAttributes,
  useState,
} from "react";

type Props = {};

const BealingDetails = (props: Props) => {
  const [data, setData] = useState({});
  const updateData = (Event: React.FormEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [Event.currentTarget.name]: Event.currentTarget.value,
    });
  };
  const handleBeal = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(data);
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
                onChange={updateData}
                name="first_name"
                className="  focus:outline-none block w-full py-2 text-base bg-black "
              />
            </div>
            <div className="form-control mb-4 border-[#5c5c5c] border-b">
              <label className="">
                <span className=" text-[20px] ">Last name</span>
              </label>
              <input
                type="text"
                onChange={updateData}
                name="last_name"
                className="focus:outline-none block w-full py-2 text-base bg-black "
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
              onChange={updateData}
              name="company"
              className="focus:outline-none block w-full py-2 text-base bg-black "
              required
            />
          </div>
          <div className="form-control mb-4 mx-5 border-b border-[#5c5c5c]">
            <label className="">
              <span className=" text-[20px] ">country/region</span>
            </label>
            <input
              type="text"
              onChange={updateData}
              name="country"
              className="focus:outline-none block w-full py-2 text-base bg-black "
              required
            />
          </div>
          <div className="form-control mb-4 border-[#5c5c5c] mx-5 border-b">
            <label className="">
              <span className=" text-[20px] ">streat address</span>
            </label>
            <input
              type="text"
              onChange={updateData}
              name="address"
              className="focus:outline-none block w-full py-2 text-base bg-black "
              required
            />
          </div>
          <div className="form-control mb-4 mx-5 border-b border-[#5c5c5c]">
            <label className="">
              <span className=" text-[20px] ">state</span>
            </label>
            <input
              type="text"
              onChange={updateData}
              name="state"
              className="focus:outline-none block w-full py-2 text-base bg-black "
              required
            />
          </div>
          <div className="form-control mb-4 mx-5 border-b border-[#5c5c5c]">
            <label className="">
              <span className=" text-[20px] ">postcode</span>
            </label>
            <input
              type="number"
              onChange={updateData}
              name="post_code"
              className="focus:outline-none block w-full py-2 text-base bg-black "
              required
            />
          </div>
          <div className="form-control mb-4 mx-5 border-[#5c5c5c] border-b">
            <label className="">
              <span className=" text-[20px] ">phone</span>
            </label>
            <input
              type="number"
              onChange={updateData}
              name="phone"
              className="focus:outline-none block w-full py-2 text-base bg-black "
              required
            />
          </div>
          <div className="form-control mb-4 mx-5 border-[#5c5c5c]  border-b">
            <label className="">
              <span className=" text-[20px] ">email</span>
            </label>
            <input
              type="email"
              onChange={updateData}
              name="email"
              className="focus:outline-none block w-full py-2 text-base bg-black  "
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
