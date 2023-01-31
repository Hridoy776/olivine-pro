import {
  useCancelOrderMutation,
  useGetOrderQuery,
} from "@/redux/slices/api/apiSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const Order = (props: Props) => {
  const { data } = useGetOrderQuery();
  const [cancelOrder, response] = useCancelOrderMutation();
  console.log(response);
  const route = useRouter();

  const handleDetails = (id: string) => {
    route.push(`/shop/${id}`);
  };

  const handleDelete = (id: string) => {
    cancelOrder(id);
  };

  return (
    <table className="text-white order__table   mx-auto">
      <thead className="text-sm h-[80px]  uppercase text-white order_table ">
        <tr>
          <th>cancel</th>
          <th>Image</th>
          <th>product</th>
          <th>price</th>
          <th>quantity</th>
          <th>subtotal</th>
        </tr>
      </thead>
      <tbody className="text-center">
        {data?.map((order) => {
          return (
            <tr key={order._id}>
              <td>
                <button onClick={() => handleDelete(order._id)} className="">
                  x
                </button>
              </td>
              <td className="p-4">
                <Image
                  onClick={() => handleDetails(order._id)}
                  width={100}
                  height={100}
                  className="mx-auto"
                  src={order.img}
                  alt={order.name}
                />
              </td>

              <td>{order.name}</td>
              <td>{order.price}</td>
              <td>{order.quantity}</td>
              <td>{order.price}</td>
            </tr>
          );
        })}
      </tbody>
      <tbody></tbody>
    </table>
  );
};

export default Order;
