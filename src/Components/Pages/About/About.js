import React from 'react';
import Breadcumbs from '../../../Shared/Breadcumbs/Breadcumbs';
import aboutImage from '../../../assets/images/about-banner.png';
import commentImage from '../../../assets/images/comment-user-1.png';

const About = () => {
    return (
        <div>
            <Breadcumbs name={"About Us"} path={"/about"} />
            <div class="aboutus-wrapper w-11/12 mx-auto text-start">
                <div class="container-x mx-auto">
                    <div class="w-full min-h-[665px] lg:flex lg:space-x-12 items-center pb-10 lg:pb-0">
                        <div class="md:w-[570px] w-full md:h-[560px] h-auto rounded overflow-hidden my-5 lg:my-0"><img src={aboutImage} alt="about" class="w-full h" /></div>
                        <div class="content flex-1">
                            <h1 class="text-[18px] font-medium text-qblack mb-2.5">What is e-commerce business?</h1>
                            <p class="text-[15px] text-qgraytwo leading-7 mb-2.5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the on leap into electronic typesetting.</p>
                            <ul class="text-[15px] text-qgraytwo leading-7 list-disc ml-5 mb-5">
                                <li>slim body with metal cover</li>
                                <li>latest Intel Core i5-1135G7 processor (4 cores / 8 threads)</li>
                                <li>8GB DDR4 RAM and fast 512GB PCIe SSD</li>
                                <li>NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit keyboard</li>
                            </ul>
                            <a href="/contact">
                                <div class="w-[121px] h-10"><span class="yellow-btn">Contact Us</span></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="customer-feedback w-full bg-white py-[60px]">
                <div class="title flex justify-center mb-5">
                    <h1 class="text-[30px] font-semibold text-qblack">Customers Feedback</h1>
                </div>
                <div class="feedback-slider-wrapper w-vw relative overflow-hidden">
                    <div class="slick-slider slick-initialized" dir="ltr"><button type="button" data-role="none" class="slick-arrow slick-prev" style={{ display: 'block' }}> Previous</button>
                        <div class="slick-list" style={{ padding: '0px 60px' }}>
                            <div class="slick-track" style={{ width: '9020px', opacity: 1, transform: 'translate3d(-2050px, 0px, 0px)' }}>
                                <div data-index="-4" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true" style={{ width: '410px' }}>
                                    <div>
                                        <div class="item h-[385px] bg-primarygray sm:px-10 sm:py-9 p-2" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
                                            <div class="flex flex-col justify-between h-full">
                                                <div class="rating flex space-x-1 items-center">
                                                    <div class="flex items-center"><svg width="20" height="20" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFA800"></path></svg><svg width="20" height="20" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFA800"></path></svg><svg width="20" height="20" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFA800"></path></svg><svg width="20" height="20" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFA800"></path></svg><svg width="20" height="20" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFA800"></path></svg></div><span class="text-[13px] text-qblack">(5.0)</span></div>
                                                <div class="text-[15px] text-qgraytwo leading-[30px] text-justify line-clamp-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an into the find unknown printer took a galley of type and scrambled it to make a type inot the specimen book. It has survived not only five centuries but also the on leap into find it a electronic typesetting, remaining end to make it.</div>
                                                <div class="flex items-center space-x-2.5 mt-3">
                                                    <div class="w-[50px] h-[50px] rounded-full overflow-hidden"><img src={commentImage} alt="user"/></div>
                                                    <div>
                                                        <p class="text-[18px] text-qblack font-medium">Ridoy Rock</p>
                                                        <p class="text-qgraytwo text-[13px]">London,UK</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div><button type="button" data-role="none" class="slick-arrow slick-next" style={{ display: 'block' }}> Next</button></div>
                    <div class="slider-btns flex justify-center mt-[40px]">
                        <div class="flex space-x-5 item-center"><button type="button" class="w-[48px] h-[48px] rounded-full overflow-hidden flex justify-center items-center border border-qyellow text-qyellow focus:bg-qyellow focus:text-white"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path></svg></button><button type="button" class="w-[48px] h-[48px] rounded-full overflow-hidden flex justify-center items-center border border-qyellow text-qyellow focus:bg-qyellow focus:text-white"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path></svg></button></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;