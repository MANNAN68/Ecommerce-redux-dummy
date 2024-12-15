
import { useGetProductsQuery } from '../features/products/productApi'
import Error from '../components/ui/Error';
import { Link } from 'react-router-dom';
import GlobalLoader from '../components/ui/GlobalLoader';
import { useDispatch } from 'react-redux';
import { addCart } from '../features/carts/cartSlice';



const Product = () => {
    const dispatch = useDispatch();
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
            <div className="group relative" key={product.id}>
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
                    <button type="button" onClick={() => { addToCart(product) }} className="text-sm font-medium text-white bg-indigo-500 px-4 py-2 rounded">Add to cart</button>
                    <button type="button" className='text-sm font-medium text-indigo-600 hover:text-indigo-500'>Wishlist</button>
                </div>
            </div>
        ));
    }

    const addToCart = (product) => {
        dispatch(addCart(product));
        console.log("first", product);

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






