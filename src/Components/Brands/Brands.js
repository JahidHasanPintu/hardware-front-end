import React from 'react';
import brand1 from '../../assets/logos/brand-1.png';
import brand2 from '../../assets/logos/brand-2.png';
import brand3 from '../../assets/logos/brand-3.png';
import brand4 from '../../assets/logos/brand-4.png';
import brand5 from '../../assets/logos/brand-5.png';
import brand6 from '../../assets/logos/brand-6.png';
import brand7 from '../../assets/logos/brand-7.png';
import brand8 from '../../assets/logos/brand-8.png';
import brand9 from '../../assets/logos/brand-9.png';
import brand10 from '../../assets/logos/brand-10.png';
import brand11 from '../../assets/logos/brand-11.png';
import brand12 from '../../assets/logos/brand-12.png';

const Brands = () => {
    return (
        <div>
            <div data-aos="fade-up" className="w-11/12 mx-auto brand-section-wrapper mb-[60px] aos-init aos-animate">
    <div className="container-x mx-auto">
        <div className=" section-title flex justify-between items-center mb-5">
            <div>
                <h1 className="font-bold sm:text-3xl text-xl font-600 text-qblacktext mt-5">Shop by Brand</h1>
            </div>
        </div>
        <div className="grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2">
            <div className="item">
                <div className="w-full h-[130px] bg-white border border-primarygray flex justify-center items-center"><img src={brand1} alt="logo"/></div>
            </div>
            <div className="item">
                <div className="w-full h-[130px] bg-white border border-primarygray flex justify-center items-center"><img src={brand2} alt="logo"/></div>
            </div>
            <div className="item">
                <div className="w-full h-[130px] bg-white border border-primarygray flex justify-center items-center"><img src={brand3} alt="logo"/></div>
            </div>
            <div className="item">
                <div className="w-full h-[130px] bg-white border border-primarygray flex justify-center items-center"><img src={brand4} alt="logo"/></div>
            </div>
            <div className="item">
                <div className="w-full h-[130px] bg-white border border-primarygray flex justify-center items-center"><img src={brand5} alt="logo"/></div>
            </div>
            <div className="item">
                <div className="w-full h-[130px] bg-white border border-primarygray flex justify-center items-center"><img src={brand6} alt="logo"/></div>
            </div>
            <div className="item">
                <div className="w-full h-[130px] bg-white border border-primarygray flex justify-center items-center"><img src={brand7} alt="logo"/></div>
            </div>
            <div className="item">
                <div className="w-full h-[130px] bg-white border border-primarygray flex justify-center items-center"><img src={brand8} alt="logo"/></div>
            </div>
            <div className="item">
                <div className="w-full h-[130px] bg-white border border-primarygray flex justify-center items-center"><img src={brand9} alt="logo"/></div>
            </div>
            <div className="item">
                <div className="w-full h-[130px] bg-white border border-primarygray flex justify-center items-center"><img src={brand10} alt="logo"/></div>
            </div>
            <div className="item">
                <div className="w-full h-[130px] bg-white border border-primarygray flex justify-center items-center"><img src={brand11} alt="logo"/></div>
            </div>
            <div className="item">
                <div className="w-full h-[130px] bg-white border border-primarygray flex justify-center items-center"><img src={brand12} alt="logo"/></div>
            </div>
        </div>
    </div>
</div>
        </div>
    );
};

export default Brands;