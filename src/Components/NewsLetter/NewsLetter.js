import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
    return (
        <div>
            <div class="discount-banner w-full h-[307px] bg-cover flex justify-center items-center ">
    <div>
        <div data-aos="fade-up" class="aos-init aos-animate">
            <h1 class="sm:text-3xl text-xl font-semibold text-qblack mb-2 text-center">Get <span class="mx-1 text-yellow-400">20%</span> Off Discount Coupon</h1>
            <p class="text-center sm:text-[18px] text-sm font-semibold">by Subscribe our Newsletter</p>
        </div>
        <div data-aos="fade-right" class="sm:w-[543px] w-[300px] h-[54px] flex mt-8 aos-init aos-animate">
            <div class="flex-1 bg-white pl-4 flex space-x-2 items-center h-full focus-within:text-yellow-400 text-qblack"><span><svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 14H2C1.4 14 1 13.6 1 13V2C1 1.4 1.4 1 2 1H15C15.6 1 16 1.4 16 2V13C16 13.6 15.6 14 15 14Z" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 4L8.5 8.5L14 4" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg></span><input type="email" name="email" class="w-full h-full focus:outline-none text-sm placeholder:text-xs placeholder:text-qblack text-qblack font-400 tracking-wider" placeholder="EMAIL ADDRESS"/></div><button type="button" class="sm:w-[158px] w-[80px]  h-full bg-yellow-400 text-sm font-semibold">Get the Coupon</button></div>
    </div>
</div>
        </div>
    );
};

export default NewsLetter;