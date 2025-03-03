import { apiSlice } from "../api/apiSlice";

const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/products'
        }),
        getSingleProduct: builder.query({
            query: ({ page = 1, limit = 8 }) => `/products?page=${page}&limit=${limit}`
        })
    })
});

export const { useGetProductsQuery, useGetSingleProductQuery, useLazyGetProductsQuery } = productApi;