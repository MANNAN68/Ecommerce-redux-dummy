
import { useGetProductsQuery } from '../features/products/productApi'
import Error from '../components/ui/Error';
import GlobalLoader from '../components/ui/GlobalLoader';

import ProductCard from '../components/products/ProductCard';




const Product = () => {

    const { data, isLoading, isError, error } = useGetProductsQuery();
    const products = data?.products || [];


    let content = null;

    if (isLoading) {
        content = <GlobalLoader />;
    }
    if (!isLoading && isError) {
        content = <Error message={error.products} />;
    }

    if (!isLoading && !isError && products?.length === 0) {
        content = <Error message="No products found" />;
    }


    if (!isLoading && !isError && products?.length > 0) {
        content = products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ));
    }



    return (
        <>

            <div className="bg-white">
                <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {content}
                </div>
            </div>
        </>

    )
}

export default Product






