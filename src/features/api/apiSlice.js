import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL,
        prepareHeaders: (headers, { getState, endpoint }) => {
            const token = getState()?.auth?.accessToken;

            if (token) {
                headers.set("authorization", `Bearer ${token}`)
            }
            return headers;
        }
    }),
    tagTypes: [],
    endpoints: (builder) => ({}),
});