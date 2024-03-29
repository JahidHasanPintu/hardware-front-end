import React, { useState } from 'react';
import Breadcumbs from '../../../Shared/Breadcumbs/Breadcumbs';
import { getApiUrl } from '../../../api/apiURL';
import axios from 'axios';
import Loading from '../../Loading/Loading';


const TrackOrder = () => {
    const baseURL = getApiUrl();
    const [orderNumber, setOrderNumber] = useState();
    const [orderDetails, setOrderDetails] = useState();
    const [loading, setLoading] = useState(false);
    const handleChangeOrderNumber = (e) => {
        const orderNumber = e.target.value;
        setOrderNumber(orderNumber);
    }
    const handleTrackOrder = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${baseURL}/orders/invoice`, {
                params: {
                    orderNumber
                },
            });

            const { success, data } = response.data;

            if (success) {
                setOrderDetails(data);

            } else {
                console.error("Error fetching data");
            }
        } catch (error) {
            console.error("Error fetching data", error);
        }
        setLoading(false);
    }
    return (
        <div className=''>
            <Breadcumbs name={'Tracking Order'} path={'/tracking-order'} />
            <div className="content-wrapper w-11/12 mx-auto text-start mb-[40px]">
                <div className="container-x mx-auto">
                    <h1 className="text-[22px] text-qblack font-semibold leading-9">Track Your Order</h1>
                    <p className="text-[15px] text-qgraytwo leading-8 mb-5">Enter your order taracking number :</p>
                    <div className="w-full bg-white lg:px-[30px] px-5 py-[23px] lg:flex items-center">
                        <div className="lg:w-[642px] w-full">
                            <div className="mb-3">
                                <div className="input-com w-full h-full"><label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Order Tracking Number*</label>
                                    <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                                        <input
                                            value={orderNumber}
                                            onChange={handleChangeOrderNumber}
                                            placeholder="Order Number"
                                            className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]" defaultValue="" /></div>
                                </div>
                            </div>
                            {
                                loading? <Loading/> : null
                            }
                            {orderDetails ?
                                <>
                                    <div className="mb-3">
                                        <div className="input-com w-full h-full"><label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Delivery Status</label>
                                            <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                                                <div className="text-sm px-6 text-dark-gray w-full font-normal bg-white w-full h-[50px] flex items-center">
                                                    {orderDetails?.order_status}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-[30px]">
                                        <div className="input-com w-full h-full"><label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">Details</label>
                                            <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                                                <div className="text-sm px-6 text-dark-gray w-full font-normal bg-white w-full h-[50px] flex items-center">
                                                    {orderDetails?.comments}
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </>
                                : null}


                            <div className="w-[142px] h-[50px] primary-button-color flex justify-center items-center cursor-pointer" onClick={handleTrackOrder}><span>Track Now</span></div>

                        </div>
                        <div
                            className="flex-1 flex justify-center mt-5 lg:mt-0">
                            <svg width="241" height="184" viewBox="0 0 241 184" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M220.092 151.63C220.472 151.75 220.782 151.91 221.092 151.93C231.672 152.5 231.992 152.19 231.992 141.54C231.992 133.24 231.992 124.93 231.992 116C229.882 116 228.112 116 226.342 116C209.012 116 191.682 116.01 174.352 115.99C166.772 115.98 164.022 113.29 164.002 105.87C163.972 95.2097 163.962 84.5397 164.002 73.8797C164.032 66.7497 166.832 64.0297 174.072 63.9897C179.032 63.9597 183.992 63.9797 189.792 63.9797C185.872 59.0597 182.702 55.4897 176.082 55.8297C164.312 56.4397 152.482 55.9997 140.022 55.9997C140.022 66.2397 140.022 76.1697 140.022 86.0997C140.022 95.8897 140.022 105.69 140.022 115.74C137.312 115.74 135.032 115.74 132.222 115.74C132.222 96.1097 132.222 76.3797 132.222 56.1097C125.302 56.1097 118.902 56.1097 112.262 56.1097C112.262 53.2897 112.262 51.0197 112.262 47.9797C113.762 47.9797 115.342 47.9797 116.932 47.9797C137.432 47.9797 157.922 48.0697 178.422 47.9197C183.452 47.8797 187.322 49.5297 190.842 53.0897C206.072 68.4997 221.522 83.6897 236.652 99.1797C238.492 101.06 239.802 104.3 239.872 106.94C240.192 120.1 240.052 133.27 240.002 146.43C239.972 155.28 235.262 160.17 226.402 159.89C221.852 159.74 219.512 160.52 218.002 165.54C214.722 176.44 204.462 183.88 193.132 183.9C129.312 184.03 65.4816 183.96 1.66156 183.94C1.34156 183.94 1.03156 183.8 0.351562 183.64C0.351562 181.35 0.351562 178.96 0.351562 176.12C19.9016 176.12 39.4816 176.12 59.1916 176.12C56.5416 170.75 54.0916 165.79 51.2116 159.98C49.3216 159.98 46.5416 160.09 43.7716 159.96C37.2516 159.64 32.2116 155.02 32.0816 148.6C31.8516 136.63 32.0116 124.65 32.0116 112.33C34.6516 112.33 37.0316 112.33 40.0016 112.33C40.0016 122.95 40.0016 133.57 40.0016 144.18C40.0016 151.25 44.4016 154.39 50.9916 151.82C51.9116 151.46 52.5816 149.91 52.9416 148.78C56.9916 136.03 67.2316 128.07 79.8016 128.01C92.6316 127.94 102.782 135.83 107.142 148.87C107.582 150.2 109.702 151.83 111.072 151.85C127.732 152.05 144.402 152.04 161.062 151.87C162.352 151.86 164.362 150.43 164.782 149.23C169.602 135.51 179.332 127.89 192.322 128.01C205.382 128.13 215.002 136.1 219.382 150.39C219.532 150.85 219.872 151.25 220.092 151.63ZM172.232 107.73C192.332 107.73 212.012 107.73 232.692 107.73C231.542 105.97 230.962 104.67 230.032 103.73C220.202 93.8197 210.342 83.9297 200.412 74.1197C199.432 73.1597 197.962 72.1297 196.702 72.0997C188.612 71.9197 180.522 72.0097 172.222 72.0097C172.232 84.1297 172.232 95.6997 172.232 107.73ZM79.8816 175.97C90.8516 176.05 99.9216 167.09 99.9816 156.12C100.042 145.12 91.1216 136.08 80.1316 136.01C69.1316 135.94 60.0716 144.88 60.0216 155.85C59.9816 166.86 68.8916 175.89 79.8816 175.97ZM192.172 175.97C203.152 175.87 212.052 166.8 211.982 155.81C211.912 144.84 202.832 135.92 191.832 136.01C180.842 136.1 171.942 145.16 172.032 156.16C172.112 167.14 181.202 176.08 192.172 175.97ZM163.222 160.01C146.012 160.01 128.212 159.98 110.422 160.09C109.392 160.1 107.842 160.94 107.422 161.81C105.222 166.35 103.312 171.03 101.302 175.64C124.322 175.64 147.772 175.64 170.962 175.64C168.482 170.61 166.082 165.77 163.222 160.01Z" fill="#9A9A9A"></path><path d="M51.91 104C23.42 104 0.0100032 80.6201 3.21354e-06 52.1501C-0.00999679 23.3001 23.32 -0.0598847 52.09 0.000115324C80.68 0.0601153 103.92 23.2701 103.99 51.8301C104.06 80.6401 80.74 103.99 51.91 104ZM52.12 8.01012C28.03 7.92012 8.12 27.6101 8.02 51.6201C7.92 76.0701 27.55 95.9201 51.88 95.9601C76.04 96.0101 95.83 76.4401 95.97 52.3501C96.12 27.9501 76.5 8.10012 52.12 8.01012Z" fill="#9A9A9A"></path><path d="M0.203125 147.65C0.203125 145.07 0.203125 142.79 0.203125 140.25C6.79313 140.25 13.1731 140.25 19.7931 140.25C19.7931 142.75 19.7931 145.02 19.7931 147.65C13.4231 147.65 7.03312 147.65 0.203125 147.65Z" fill="#9A9A9A"></path><path d="M152.188 131.761C152.188 129.171 152.188 126.901 152.188 124.311C157.327 124.311 162.387 124.311 167.727 124.311C167.727 126.761 167.727 129.141 167.727 131.761C162.617 131.761 157.688 131.761 152.188 131.761Z" fill="#9A9A9A"></path><path d="M19.7681 124.27C19.7681 126.72 19.7681 128.99 19.7681 131.63C16.1181 131.63 12.3981 131.63 8.32812 131.63C8.32812 129.33 8.32812 126.95 8.32812 124.27C12.0781 124.27 15.7981 124.27 19.7681 124.27Z" fill="#9A9A9A"></path><path d="M12.2266 115.73C12.2266 113.26 12.2266 110.98 12.2266 108.35C14.5866 108.35 16.9766 108.35 19.6966 108.35C19.6966 110.67 19.6966 113.06 19.6966 115.73C17.2266 115.73 14.8466 115.73 12.2266 115.73Z" fill="#9A9A9A"></path><path d="M76.1875 159.761C76.1875 157.181 76.1875 154.911 76.1875 152.311C78.6475 152.311 81.0375 152.311 83.7175 152.311C83.7175 154.731 83.7175 157.121 83.7175 159.761C81.2875 159.761 79.0175 159.761 76.1875 159.761Z" fill="#9A9A9A"></path><path d="M195.653 159.81C193.083 159.81 190.813 159.81 188.273 159.81C188.273 157.23 188.273 154.84 188.273 152.22C190.743 152.22 193.013 152.22 195.653 152.22C195.653 154.58 195.653 156.97 195.653 159.81Z" fill="#9A9A9A"></path><path d="M52.0268 16C70.9068 16.02 84.5168 34.43 78.4868 52.22C73.8968 65.77 64.8368 76.47 54.9268 86.4C53.9068 87.42 50.0668 87.39 49.0368 86.36C39.2568 76.54 30.3168 65.97 25.6568 52.63C19.3768 34.64 32.9068 15.99 52.0268 16ZM52.7368 79.06C58.7568 69.84 64.6268 61.79 69.3768 53.12C71.3668 49.48 72.0768 44.36 71.4168 40.22C69.5668 28.56 57.8568 21.63 46.7268 24.8C35.1168 28.1 29.2168 39.76 33.6068 51.14C37.5668 61.37 44.5068 69.6 52.7368 79.06Z" fill="#9A9A9A">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrackOrder;