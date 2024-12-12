import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from 'keep-react'
import { useGetProductsQuery } from '../features/products/productApi'
import { Image } from 'phosphor-react';
import Error from '../components/ui/Error';

const Product = () => {

    const { data, isLoading, isError, error } = useGetProductsQuery();

    const products = data?.products || [];
    let content = null;

    if (isLoading) {
        content = <p>Loading...</p>;
    }
    if (!isLoading && isError) {
        content = <Error message={error.products} />;
    }

    if (!isLoading && !isError && products?.length === 0) {
        content = <Error message="No products found" />;
    }


    if (!isLoading && !isError && products?.length > 0) {
        content = products.map((product) => (
            <div className="group relative" key={product.id}>
                <img
                    alt={product.title}
                    src={product.thumbnail}
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <a href="{product.href}">
                                <span aria-hidden="true" className="absolute inset-0" />
                                {product.title}
                            </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
            </div>
        ));
    }



    return (
        <div className="bg-white">
            <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {content}
            </div>
        </div>
    )
}

export default Product






