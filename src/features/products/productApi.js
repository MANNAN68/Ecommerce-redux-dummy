import { apiSlice } from "../api/apiSlice";

const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/products'
        }),
        getSingleProduct: builder.query({
            query: (productId) => `/products/${productId}`
        })
    })
});

export const { useGetProductsQuery, useGetSingleProductQuery } = productApi;