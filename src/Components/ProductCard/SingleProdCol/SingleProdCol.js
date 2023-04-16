import React from 'react';

const SingleProdCol = (props) => {
    const product = props.product;
    return (
        <div data-aos="fade-up" className="product-card-row-two w-full aos-init aos-animate"

        >
            <div className="w-full h-[105px] bg-white border border-primarygray px-5 ">
                <div className="w-full h-full flex space-x-5 justify-center items-center">
                    <div className="w-[75px] h-full"><img src={product.images[0]} alt="" className="w-full h-full object-contain" /></div>
                    <div className="flex-1 h-full flex flex-col justify-center ">
                        <a href="/product-details">
                            <p className="text-start title mb-2 sm:text-[15px] text-[13px] font-semibold text-qblack leading-[24px] line-clamp-1 hover:text-blue-600">{product.name.slice(0,62)}...</p>
                        </a>
                        <p className="text-start price"><span className="main-price text-slate-500 line-through font-semibold text-[18px]">$27.27</span><span className="offer-price text-red-500 font-semibold text-[18px] ml-2">${product.price}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProdCol;