import React from 'react';

const SmallProductCard = (props) => {
    const product = props.product;
    return (
        <div className="lg:w-56 md:w-56 shadow-md dark:bg-gray-900 dark:text-gray-50 bg-base-100 my-3"

        >
            <img src={product.images[0]} alt="" className="object-cover object-center w-48 h-44 dark:bg-gray-500" />

            <p className="dark:text-gray-100 text-start mx-2"> {product.name.slice(0, 40)}..</p>
            <h2 className="text-m text-start text-red-500 font-semibold tracking-wide mx-2">${product.price}</h2>
            <h6 className="text-xs text-start text-gray-500  tracking-wide mx-2"> <span className='line-through'> $220  </span>  -32%</h6>
            <div className="reviews flex space-x-[1px] mb-3 p-2"><span><svg width="13" height="12" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFA800"></path></svg></span><span><svg width="13" height="12" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFA800"></path></svg></span><span><svg width="13" height="12" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFA800"></path></svg></span>
                <span><svg width="13" height="12" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFA800"></path></svg></span>
                <span><svg width="13" height="12" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFA800"></path></svg></span>

            </div>

        </div>
    );
};

export default SmallProductCard;