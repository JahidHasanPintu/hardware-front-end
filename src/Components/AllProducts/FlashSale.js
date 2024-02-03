import React, { useEffect, useState } from 'react';
import flashBanner from '../../assets/images/flash-sale-ads.png';
import SingleProductCard from '../ProductCard/SingleProductCard/SingleProductCard';
import { useProducts } from '../../hooks/useProducts';
import axios from 'axios';
import { getApiUrl } from '../../api/apiURL';

const FlashSale = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [catID, setCatID] = useState([]);
    const [subcatID, setSubCatID] = useState("");
    const [brandID, setBrandID] = useState([]);
    const [sort, setSort] = useState("");
    const [limit, setLimit] = useState(50);
    const [offer, setOffer] = useState(1);
    const [products, total] = useProducts(page, limit, search, brandID, catID, subcatID, sort,offer);
    const baseURL = getApiUrl();

    const [offersDate, setOffersDate] = useState([]);

    useEffect(() => {
      async function fetchOffers() {
        try {
          const response = await axios.get(`${baseURL}/cupons/offer`);
          setOffersDate(response.data.data.expire_date);
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchOffers();
    }, []);
  

    // Set the target date for the countdown (adjust as needed)
    
    useEffect(() => {
        const targetDate = new Date(offersDate).getTime();
        const updateCountdown = () => {
            const now = new Date().getTime();
            const timeRemaining = targetDate - now;

            const remainingDays = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const remainingHours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const remainingMinutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const remainingSeconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            setDays(remainingDays);
            setHours(remainingHours);
            setMinutes(remainingMinutes);
            setSeconds(remainingSeconds);
        };

        const countdownInterval = setInterval(updateCountdown, 1000);

        return () => {
            clearInterval(countdownInterval);
        };
    }, [offersDate]);


    return (
        <div className="w-11/12 mx-auto text-start  pt-[30px] pb-[60px]">
            <div data-aos="fade-right" className="flash-ad w-full h-[400px] flex sm:justify-end justify-center items-center mb-10 aos-init aos-animate"
                style={{ backgroundImage: `url(${flashBanner})`, backgroundPosition: '0% 0%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
            >
                <div className="sm:mr-[75px]">
                    <div className="countdown-wrapper w-full flex sm:space-x-6 space-x-3 sm:justify-between justify-evenly">
                        <div className="countdown-item">
                            <div className="countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                                <span className="font-bold sm:text-[30px] text-base text-[#EB5757]">{days}</span>
                            </div>
                            <p className="sm:text-[18px] text-xs font-500 text-center leading-8 text-white">Days</p>
                        </div>
                        <div className="countdown-item">
                            <div className="countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                                <span className="font-bold sm:text-[30px] text-base text-[#2F80ED]">{hours}</span>
                            </div>
                            <p className="sm:text-[18px] text-xs font-500 text-center leading-8 text-white">Hours</p>
                        </div>
                        <div className="countdown-item">
                            <div className="countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                                <span className="font-bold sm:text-[30px] text-base text-[#219653]">{minutes}</span>
                            </div>
                            <p className="sm:text-[18px] text-xs font-500 text-center leading-8 text-white">Minutes</p>
                        </div>
                        <div className="countdown-item">
                            <div className="countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                                <span className="font-bold sm:text-[30px] text-base text-[#EF5DA8]">{seconds}</span>
                            </div>
                            <p className="sm:text-[18px] text-xs font-500 text-center leading-8 text-white">Seconds</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="products grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5 mb-[40px]">
                {
                    products?.map(product =>
                        <SingleProductCard key={product.id}
                            product={product} />
                    ).slice(0, 20)
                }


            </div>

        </div>
    );
};

export default FlashSale;