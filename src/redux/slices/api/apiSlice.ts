import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// @enternal import //
import type { Food } from "../../../types/food";

// Define a service using a base URL and expected endpoints
export const foodApi = createApi({
  reducerPath: "foodApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://olivine-resturent.onrender.com/",
  }),
  tagTypes: ["Order"],
  endpoints: (builder) => ({
    getFoods: builder.query<Food[], string>({
      query: () => "foods",
    }),
    getFoodById: builder.query<Food, object>({
      query: (id): string => `foods/${id}`,
    }),
    addToCart: builder.mutation<Food, string>({
      query: (payload) => ({
        url: `order/${payload}`,
        method: "POST",
      }),
    }),
    getOrder: builder.query<Food[], void>({
      query: () => "order",
      providesTags: ["Order"],
    }),
    getOrderById: builder.query<Food, string>({
      query: (id): string => `order/${id}`,
    }),
    cancelOrder: builder.mutation<Food, string>({
      query: (id) => ({
        url: `order/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Order"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetFoodsQuery,
  useAddToCartMutation,
  useGetOrderQuery,
  useCancelOrderMutation,
  useGetOrderByIdQuery
} = foodApi;
