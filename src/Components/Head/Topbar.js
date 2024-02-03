import React from 'react';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Topbar = () => {
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    const { t } = useTranslation();
    return (
        <div className="w-full bg-white h-10 border-b border-qgray-border quomodo-shop-top-bar">
                    <div className="container-x w-11/12 mx-auto  h-full">
                        <div className="flex justify-between items-center h-full">
                            <div className="topbar-nav ">
                                <div className='flex items-center font-800'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-headset font-800" viewBox="0 0 16 16"> <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" /> </svg>

                                    <div class="hidden md:block">
                                        <span class="text-sm font-600 ml-1">01748254613</span>
                                    </div>
                                    <div class="block md:hidden">

                                        <a href="tel:+8801748254613">
                                            <span class="text-sm font-600 ml-1">01748254613</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="topbar-dropdowns ">
                                <div className="topbar-nav ">
                                    <ul className="flex space-x-6 items-center">
                                        <li><Link to={"/tracking-order"} ><span className="text-xs leading-6 text-gray font-bold">{t('trackOrder')}</span></Link></li>
                                        <li><Link to={"/faq"}><span className="text-xs leading-6 text-gray font-bold">{t('help')}</span></Link></li>
                                        <li>
                                            <div class="flex flex-row justify-center  select-none">
                                                <div class="flex flex-row items-center right-1 ">
                                                    <button onClick={() => changeLanguage('en')} class="p-2 flex flex-row items-center border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none"
                                                    >
                                                        <span class="text-md">English</span>
                                                        <span class="ml-1"> <img src="https://img.icons8.com/?size=512&id=t3NE3BsOAQwq&format=png" class="w-5 h-5" /></span>
                                                    </button>

                                                    <button onClick={() => changeLanguage('bn')} class="p-2 flex flex-row items-center border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none "
                                                    >
                                                        <span class="text-md">বাংলা</span>
                                                        <span class="ml-1"> <img src="https://img.icons8.com/?size=512&id=Aqza8XCJtcQw&format=png" class="w-5 h-5" /></span>
                                                    </button>
                                                </div>

                                            </div>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
    );
};

export default Topbar;