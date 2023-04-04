import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductContainer = () => {
    const demoArray = Array.apply(null, Array(12));
    return (
        <div className='grid grid-cols-3 gap-5'>
            {
                demoArray.map((product, index) => <ProductCard/>)
            }
        </div>
    );
};

export default ProductContainer;