import { createSlice } from "@reduxjs/toolkit";

let localWishlist = localStorage.getItem("wishlistItems") ? JSON.parse(localStorage.getItem("wishlistItems")) : []

const initialState = {
    localWishlist: localWishlist,
    wishlistTotalQuantity: 0,
};

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addWishlist: (state, action) => {
            const itemIndex = state.localWishlist.findIndex(item => item.id === action.payload.id);
            if (itemIndex === -1) {
                state.localWishlist.push({ ...action.payload, quantity: 1 });
                localStorage.setItem("wishlistItems", JSON.stringify(state.localWishlist));
            }
        },
        removeWishlist: (state, action) => {
            const itemIndex = state.localWishlist.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.localWishlist.splice(itemIndex, 1);
                localStorage.setItem("wishlistItems", JSON.stringify(state.localWishlist));
            }
        },
        clearWishlist: (state) => {
            state.localWishlist = []
            localStorage.removeItem("wishlistItems");
        },

    }
});

export const { addWishlist, removeWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;