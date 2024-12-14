import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetSingleProductQuery } from '../features/products/productApi';

const ProductDetails = () => {

    const { id } = useParams();
    const { data, isLoading } = useGetSingleProductQuery(id);


    console.log("single product", data);
    return (
        <>
            <div className="bg-gray-100 dark:bg-gray-800 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="md:flex-1 px-4">
                            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                <img
                                    className="w-full h-full object-cover"
                                    src={data?.thumbnail}
                                    alt="Product Image"
                                />

                            </div>
                            <div className='flex gap-2 mb-4'>
                                {data?.images?.map((image, index) => (
                                    <img src={image} alt={data?.title} key={index} width={80} height={80} />
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
                                    <span className="text-gray-600 dark:text-gray-300"> {data?.price} </span>
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
                                    <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                                        Add to Cart
                                    </button>
                                </div>
                                <div className="w-1/2 px-2">
                                    <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                                        Add to Wishlist
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductDetails



