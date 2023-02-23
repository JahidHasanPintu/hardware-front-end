import axios from 'axios';
import React, { useState } from 'react';

const Shop = () => {

    const [products,setProducts]=useState();

    axios.get('fakedb.json')
    .then(function (response) {
    // handle success
    setProducts(response);

  })

  
    return (
        <div className='grid grid-cols-6  mx-20 mt-2 '>
            {
                products?.data?.map(product => <div className="w-48 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50 bg-base-100 my-2"
                key={product.id}
                product={product}
                >
                <img src={product.image} alt="" className="object-cover object-center w-48 rounded-md h-44 dark:bg-gray-500" />
                
                <p className="dark:text-gray-100 text-start mx-2"> {product.name}</p>
                <h2 className="text-xl text-start font-semibold tracking-wide mx-2">${product.price}</h2>
            </div>                                      
                )
            }
            
        </div>
    );
};

export default Shop;