import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductContainer = ({filteredProducts, query}) => {
    //const demoArray = Array.apply(null, Array(12));
    return (
        <div className='grid grid-cols-3 m-8 gap-5'>
           
                {
                filteredProducts.length === 0 && query !== '' ? (
                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                      Nothing found.
                    </div>) : filteredProducts.map((product) => <ProductCard product={product} key={product.id}/>)
}
        </div>
    );
};

export default ProductContainer;