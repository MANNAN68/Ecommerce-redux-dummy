import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleProductQuery } from '../features/products/productApi';
import Error from '../components/ui/Error';
import GlobalLoader from '../components/ui/GlobalLoader';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../features/carts/cartSlice';

const ProductDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { data, isLoading, isError, error } = useGetSingleProductQuery(id);
    const [mainImage, setMainImage] = useState(null);
    const cartItems = useSelector(state => state.cart.cartItems);
    const isInCart = cartItems.some(item => item.id === data.id);
    useEffect(() => {
        if (data?.thumbnail) {
            setMainImage(data.thumbnail);
        }
    }, [data?.thumbnail]);

    let content = null;

    if (isLoading) {
        content = <GlobalLoader />;
    }
    if (!isLoading && isError) {
        content = <Error message={error.data} />;
    }

    if (!isLoading && !isError && data?.length === 0) {
        content = <Error message="No products found" />;
    }

    const handleAddToCart = (data) => {
        if (!isInCart) {
            dispatch(addCart(data));
        }
    }

    if (!isLoading && !isError && data?.id) {
        content = <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
                {/* Main Image */}
                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img
                        className="w-full h-full object-cover"
                        src={mainImage}
                        alt="Product Image"
                    />
                </div>

                {/* Gallery Thumbnails */}
                <div className="flex gap-2 mb-4">
                    {data?.images?.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={data?.title}
                            width={80}
                            height={80}
                            className={`cursor-pointer border rounded-md ${mainImage === image
                                ? 'border-blue-500'
                                : 'border-gray-300'
                                }`}
                            onClick={() => setMainImage(image)}
                        />
                    ))}
                </div>
            </div>
            <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    {data?.title}
                </h2>

                <div className="flex mb-4">
                    <div className="mr-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300">
                            Price:
                        </span>
                        <span className="text-gray-600 dark:text-gray-300">
                            {' '}
                            {data?.price}{' '}
                        </span>
                    </div>
                </div>
                <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                        Product Description:
                    </span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                        {data?.description}
                    </p>
                </div>

                <div className="flex -mx-2 mt-10">
                    <div className="w-1/2 px-2">
                        <button onClick={() => handleAddToCart(data)} className={`px-4 py-2 rounded-md ${isInCart ? "bg-gray-300 cursor-not-allowed opacity-50" : "bg-green-500 hover:bg-green-700 active:bg-green-800  text-white"}`}
                            disabled={isInCart} >{isInCart ? "Already in Cart" : "Add to Cart"}</button>
                    </div>
                    <div className="w-1/2 px-2">
                        <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                            Add to Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    }

    return (
        <>
            <div className="bg-gray-100 dark:bg-gray-800 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {content}
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
