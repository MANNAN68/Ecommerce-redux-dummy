import { createSlice } from "@reduxjs/toolkit";

let localCart = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []

const initialState = {
    cartItems: localCart,
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // if item is already in the cart, cannot add again
        // if item is not in the cart, add the item to the cart
        // if item is in the cart, but the quantity is 0, remove the item from the cart
        addCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (itemIndex === -1) {
                state.cartItems.push({ ...action.payload, quantity: 1 });
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            }
        },
        removeCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartItems.splice(itemIndex, 1);
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            }
        },
        clearCart: (state) => {
            state.cartItems = [];
            localStorage.removeItem("cartItems");
        },
        // Increase item quantity in the cart
        increaseQty: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].quantity += 1;
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            }
        },

        // Decrease item quantity in the cart
        decreaseQty: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {

                if (state.cartItems[itemIndex].quantity > 1) {
                    state.cartItems[itemIndex].quantity -= 1;
                } else {

                    state.cartItems.splice(itemIndex, 1);
                }

                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            }
        },

        calculateSubTotal: (state) => {

            const subTotal = state.cartItems.reduce((acc, item) => acc + (item.price * Number(item.quantity)), 0);
            state.cartTotalAmount = Number(subTotal);
        },
    }
})

export const { addCart, removeCart, clearCart, increaseQty, decreaseQty, calculateSubTotal } = cartSlice.actions
export default cartSlice.reducer