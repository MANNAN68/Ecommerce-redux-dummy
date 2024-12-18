import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../components/cart/CartItem';
import { calculateCartQty, calculateSubTotal, clearCart } from '../features/carts/cartSlice';
import { Input } from 'keep-react';
import SelectComponent from '../components/dropdown/SelectComponent';

const Cart = () => {
    const dispatch = useDispatch();
    const cartedItems = useSelector(state => state.cart.cartItems);
    const subTotal = useSelector(state => state.cart.cartTotalAmount);
    const cartQty = useSelector(state => state.cart.cartTotalQuantity);

    useEffect(() => {
        dispatch(calculateSubTotal());
    }, [cartedItems, dispatch]);
    useEffect(() => {
        dispatch(calculateCartQty());
    }, [cartedItems, dispatch]);

    const totalPurchaseAmount = subTotal.toFixed(2) - 0.01;

    return (
        <>
            <div className="container mx-auto mt-10 dark:bg-gray-900">
                <div className="flex shadow-md my-10">
                    <div className="w-3/4 bg-white px-10 py-10 dark:bg-gray-900">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-semibold text-2xl dark:text-white">Shopping Cart</h1>

                        </div>
                        <div className="flex mt-10 mb-5 px-3 py-3">
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5 dark:text-white">Product Details</h3>
                            <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center dark:text-white">Quantity</h3>
                            <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center dark:text-white">Price</h3>
                            {/* <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center dark:text-white">Total</h3> */}
                        </div>


                        {
                            cartedItems?.map((cart) => {
                                return <CartItem key={cart.id} cart={cart} />
                            })
                        }


                        <button onClick={() => { dispatch(clearCart()) }} className="mx-2 my-2 px-2 py-2 bg-rose-600 text-white rounded-full shadow-sm hover:bg-red-800">{cartedItems?.length === 0 ? 'No Items Left' : 'Clear Cart'}</button>


                        <a href="#" className="flex font-semibold text-indigo-600 text-sm mt-10">

                            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                            Continue Shopping
                        </a>
                    </div>

                    <div id="summary" className="w-1/4 px-8 py-10">
                        <h1 className="font-semibold text-2xl border-b pb-8 dark:text-white">Order Summary</h1>
                        <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-sm uppercase dark:text-white">Items {cartQty}</span>
                            <span className="font-semibold text-sm dark:text-white">{subTotal}</span>
                        </div>
                        <div>
                            <label className="font-medium inline-block mb-3 text-sm uppercase dark:text-white">Shipping</label>

                            <SelectComponent />
                        </div>
                        <div className="py-10">
                            <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase dark:text-white">Promo Code</label>
                            <Input placeholder="Enter name" type="text" />
                        </div>
                        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase dark:text-white">
                                <span>Total cost</span>
                                <span>${Number(subTotal)}</span>
                            </div>
                            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Cart