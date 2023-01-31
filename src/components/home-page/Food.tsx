import React, { useState } from "react";
import {
  useAddToCartMutation,
  useGetFoodsQuery,
} from "@/redux/slices/api/apiSlice";

type Props = {};

const Food = (props: Props) => {
  const [onHover, setOnHover] = useState(-1);
  const { data, isFetching, isLoading, isSuccess } = useGetFoodsQuery("");
  const [addToCart, response] = useAddToCartMutation();
  console.log(response);
  const hideButton = (index: number) => {
    return `mb-4 ${onHover === index ? " " : "hidden"}   `;
  };

  return (
    <div className=" w-fit  my-5 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
      {data?.map((food, index) => (
        <div key={index}>
          <div
            onMouseEnter={() => setOnHover(index)}
            onMouseLeave={() => setOnHover(-1)}
            className="flex justify-center items-end"
            style={{
              backgroundImage: `url(${food.img})`,
              width: "300px",
              height: "300px",
            }}
          >
            {
              <p className={hideButton(index)}>
                <button
                  onClick={() => addToCart(food._id)}
                  className="btn btn-primary   hover:btn-outline rounded-none"
                >
                  add to cart
                </button>
              </p>
            }
          </div>
          <p className="text-2xl mt-2 text-white capitalize text-center">
            {food.name}
          </p>
          <p className="text-center text-2xl text-primary font-bold">
            ${food.price}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Food;
