import { useRouter } from "next/router";
import React, {useState } from "react";

// @ internal import //
import Cartbanner from "@/components/common/Cartbanner";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/navbar";
import { useGetOrderByIdQuery } from "@/redux/slices/api/apiSlice";
import Image from "next/image";

type Props = {};

const ProductDetails = (props: Props) => {
  const [counter, setCounter] = useState<number>(0);
  const route = useRouter();
  const id: any = route.query.foodId;

  const { data } = useGetOrderByIdQuery(id);
  //   if (error) return <div>Failed to load</div>;
  //   //Handle the loading state
  if (!data) return <div>Loading...</div>;

  const handleCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget);
  };
  const increament = () => {
    setCounter(counter + 1);
  };
  const decreament = () => {
    setCounter(counter - 1);
  };
  const handleOrder = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <>
      <Navbar />
      <section className="">
        <Cartbanner />
      </section>
      <section className="bg-black pt-12">
        <div className="lg:w-[90%] mx-auto">
          <div className="lg:flex  mx-auto  items-start">
            <div className="lg:w-[40%] m-6">
              <Image
                src={data?.img}
                height={300}
                width={300}
                alt={data?.name}
              />
            </div>
            <div className="m-6 lg:w-[50%] text-white ">
              <p className="text-4xl capitalize mb-[13px]">{data?.name}</p>
              <p className="text-2xl text-primary font-bold">
                ${data?.price}.55
              </p>
              <p className="mt-6 text-lg">{data?.details}</p>
              <form onSubmit={handleOrder} className="my-5">
                <input
                  onClick={decreament}
                  type="button"
                  className="border-2 p-2"
                  value="-"
                />
                <input
                  className="w-[150px] appearance-none text-center text-white p-2 rounded-none font-bold outline-none border-y-2 bg-black"
                  type="number"
                  step="1"
                  min="1"
                  max={data?.quantity}
                  placeholder="1"
                  inputMode="numeric"
                  value={counter}
                  onChange={(e) => handleCount(e)}
                  name="quantity"
                />

                <input
                  onClick={increament}
                  type="button"
                  className="border-2 p-2"
                  value="+"
                />
                <button
                  className="text-secondary bg-white py-[10px] duration-500 hover:text-white hover:bg-primary mx-0 lg:mx-2 my-5 lg:my-0 px-16 capitalize"
                  type="submit"
                >
                  add to cart
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetails;
