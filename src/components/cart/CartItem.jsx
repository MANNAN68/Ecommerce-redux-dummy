import React from 'react'
import { useDispatch } from 'react-redux';
import { decreaseQty, increaseQty, removeCart } from '../../features/carts/cartSlice';

const CartItem = ({ cart }) => {
    const dispatch = useDispatch();
    const increaseCartQty = () => {
        dispatch(increaseQty(cart));
    }
    const decreaseCartQty = () => {
        dispatch(decreaseQty(cart));
    }

    const deleteCartHandler = () => {
        dispatch(removeCart(cart));
    }

    return (
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5 dark:hover:bg-gray-800">
            <div className="flex w-2/5">
                <div className="w-20">
                    <img className="h-24" src={cart?.product?.image} alt="" />
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm dark:text-white">{cart?.title}</span>
                    <span className="text-red-500 text-xs dark:text-green-400">{cart?.category}</span>
                    <a onClick={() => deleteCartHandler(cart)} href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs dark:text-rose-600">Remove</a>
                </div>
            </div>
            <div className="flex justify-center w-1/5 ">
                <svg onClick={() => decreaseCartQty(cart)} className="fill-current text-gray-600 w-3 dark:text-white" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>

                <input className="mx-2 border text-center w-8" type="number" defaultValue={cart?.quantity} />

                <svg onClick={() => increaseCartQty(cart)} className="fill-current text-gray-600 w-3 dark:text-white" viewBox="0 0 448 512">
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
            </div>
            <span className="text-center w-1/5 font-semibold text-sm dark:text-white">${cart?.price}</span>
            {/* <span className="text-center w-1/5 font-semibold text-sm dark:text-white sm:hidden">$400.00</span> */}
        </div>
    )
}

export default CartItem