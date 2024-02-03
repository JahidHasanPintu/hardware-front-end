import React from 'react';
import banner1 from '../../assets/images/banner-1.png';
import banner2 from '../../assets/images/banner-2.png';
import offerBanner from '../../assets/images/specialoffer.webp';
import banner3 from '../../assets/images/banner-3.png';
import { useNavigate } from 'react-router-dom';

const HeroBanner = () => {
    const navigate = useNavigate();
    const navigateToCategories = (catID) => {
        navigate(`/offer`);


    }
    return (
        <div className='w-11/12 mx-auto mt-5 mb-5'>
            <div className="banner-card xl:flex xl:space-x-[30px] xl:h-[600px]  mb-[30px]">
                <div  className="xl:w-[740px] w-full h-full">
                    
                        <picture>
                            <source media="(min-width:1025px)" srcset={banner1}/><img src="/assets/images/banner-1.2.png" alt="" className="w-full max-w-full cursor-pointer h-auto object-cover"/></picture>
                            
                        </div>
                        <div className="flex-1 flex xl:flex-col flex-row xl:space-y-[30px] h-full">
                            <div onClick={() => navigateToCategories(1)} className="w-full xl:h-1/2 cursor-pointer"><img src={offerBanner} alt="" className="w-full h-full"/></div>
                            <div className="w-full xl:h-1/2 cursor-pointer"><img src={banner3} alt="" className="w-full h-full"/></div>
                        </div>
                </div>
            </div>
            );
};

            export default HeroBanner;