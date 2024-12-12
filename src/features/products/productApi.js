import { apiSlice } from "../api/apiSlice";

const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/products'
        })
    })
});

export const { useGetProductsQuery } = productApi;