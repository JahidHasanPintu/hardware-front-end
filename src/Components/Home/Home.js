import axios from 'axios';
import React, { useState } from 'react';
import Brands from '../Brands/Brands';
import Categories from '../Categories/Categories';
import Features from '../Features/Features';
import NewsLetter from '../NewsLetter/NewsLetter';
import PopularSale from '../PopularSale/PopularSale';
import TrendySales from '../TrendySales/TrendySales';


const Home = () => {
 
    const [products,setProducts]=useState();

    axios.get('fakedb.json')
    .then(function (response) {
    // handle success
    setProducts(response);

  })


  
    return (
        <div>
                
                <div className="carousel w-full ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://www.satatools.us/sites/sata_us/files/styles/biggest_landscape_3x1/public/2022-09/GP_NA_03_06.01.22.jpg" className="w-full" alt='slider1' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮ </a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                {/* <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://www.mypower2u.com/image/mypower2u/image/cache/data/all_product_images/product-703/NdazqZSp1602087659-1467x640.jpg" className="w-full" alt='slider2' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>  */}
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://shopkhanico.com/wp-content/uploads/2020/02/sata-banner.png" className="w-full" alt='slider3' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                {/* <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" alt='slider4' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div> */}
                </div>
                {/* <ul className="menu bg-base-100 w-40 ml-20 relative">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                    <li><a>Item 3</a></li>
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                    <li><a>Item 3</a></li>
                    <li><a>Item 3</a></li>
                </ul> */}

                <Features/>

                <TrendySales/>


                
                <div className=" section-title flex justify-between items-center ml-16 mb-5">
                    <div>
                        <h1 className="font-bold sm:text-3xl text-xl font-600 text-qblacktext mt-5">Popular Products</h1>
                    </div>
                </div>
                    <div className='grid grid-cols-6  mx-14 mt-2 w-11/12 justify-items-center relative'>
                    
                {
                    products?.data?.map(product => <div className="w-48  shadow-md dark:bg-gray-900 dark:text-gray-50 bg-base-100 my-2"
                    key={product.id}
                    product={product}
                    >
                    <img src={product.image} alt="" className="object-cover object-center w-48 h-44 dark:bg-gray-500" />
                    
                    <p className="dark:text-gray-100 text-start mx-2"> {product.name}</p>
                    <h2 className="text-xl text-start font-semibold tracking-wide mx-2">${product.price}</h2>
                </div>                                      
                    ).slice(0,12)
                }
                
                </div>
                <Brands/>
                <PopularSale/>
                <NewsLetter/>
             {/* <Categories/> */}
        </div>
    );
};

export default Home;