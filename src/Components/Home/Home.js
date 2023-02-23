import axios from 'axios';
import React, { useState } from 'react';


const Home = () => {
 
    const [products,setProducts]=useState();

    axios.get('fakedb.json')
    .then(function (response) {
    // handle success
    setProducts(response);

  })
  
    return (
        <div>
                
                <div className="carousel w-full absolute ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" alt='slider1' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮ </a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" alt='slider2' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" alt='slider3' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" alt='slider4' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                </div>
                <ul className="menu bg-base-100 w-40 ml-20 relative">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                    <li><a>Item 3</a></li>
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                    <li><a>Item 3</a></li>
                    <li><a>Item 3</a></li>
                </ul>
                {/* <h2 className='text-center mt-2 text-bold'>Popular Products</h2> */}
                <div className='grid grid-cols-6  mx-14 mt-2 w-11/12 justify-items-center relative'>
                
            {
                products?.data?.map(product => <div className="w-48 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50 bg-base-100 my-2"
                key={product.id}
                product={product}
                >
                <img src={product.image} alt="" className="object-cover object-center w-48 rounded-md h-44 dark:bg-gray-500" />
                
                <p className="dark:text-gray-100 text-start mx-2"> {product.name}</p>
                <h2 className="text-xl text-start font-semibold tracking-wide mx-2">${product.price}</h2>
            </div>                                      
                ).slice(0,12)
            }
            
        </div>
        </div>
    );
};

export default Home;