import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCart } from '../../features/carts/cartSlice';

const ProductCard = ({ product = {} }) => {
    const cartItems = useSelector(state => state.cart.cartItems)
    const isInCart = cartItems.some((item) => item.id === product.id);

    const dispatch = useDispatch();


    const handleAddToCart = (product) => {
        if (!isInCart) {
            dispatch(addCart(product));
        }
    }

    return (
        <div className="group relative">
            <Link to={`/product/${product.id}`}>
                <img
                    alt={product.title}
                    src={product.thumbnail}
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            {product.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
            </Link>
            <div className="mt-4 flex justify-between">
                <button type="button" onClick={() => { handleAddToCart(product) }} className={`bg-indigo-500 rounded-md py-2 px-4 text-white ${isInCart ? "bg-gray-500" : "btn-primary"}`}
                    disabled={isInCart} >{isInCart ? "Already in Cart" : "Add to Cart"}</button>
                <button type="button" className='text-sm font-medium text-indigo-600 hover:text-indigo-500'>Wishlist</button>
            </div>
        </div>
    )
}

export default ProductCard