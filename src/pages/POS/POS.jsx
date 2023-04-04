import React from 'react';
import Cart from '../../components/Cart/Cart';
import DisplayProducts from '../../components/DisplayProducts/DisplayProducts';
import ProductSearchBar from '../../components/ProductSearchBar/ProductSearchBar';

const POS = () => {
    return (
        <div className='w-full mx-auto grid grid-cols-3'>
            <div className='col-span-2'>
               <ProductSearchBar/>
               <DisplayProducts/>
            </div>
            <Cart className='col-span-1'/>
        </div>
    );
};

export default POS;