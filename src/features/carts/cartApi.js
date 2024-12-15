import { apiSlice } from "../api/apiSlice";

const cartApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCartItems: builder.query({
            query: () => '/carts',
        })
    })
})

export const { useGetCartItemsQuery } = cartApi;