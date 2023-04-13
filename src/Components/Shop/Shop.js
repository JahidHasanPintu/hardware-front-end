import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Shop = () => {

    const navigate = useNavigate();
    const [products, setProducts] = useState();

    axios.get('fakedb.json')
        .then(function (response) {
            // handle success
            setProducts(response);


        })

    const handleDetails = (id) => {
        console.log(id);
        navigate(`/prod-details/${id}`);
    }


    return (
        <div className='grid grid-cols-6  mx-20 mt-2 '>
            {
                products?.data?.map(product => <div onClick={() => handleDetails(product.id)} className="w-48  shadow-md dark:bg-gray-900 dark:text-gray-50 bg-base-100 my-2"
                    key={product.id}
                    product={product}
                >
                    <img src={product.image} alt="" className="object-cover object-center w-48  h-44 dark:bg-gray-500" />

                    <p className="dark:text-gray-100 text-start mx-2"> {product.name}</p>


                    <h2 className="text-xl text-start font-semibold tracking-wide mx-2">${product.price}</h2>
                </div>
                )
            }

        </div>
    );
};

export default Shop;