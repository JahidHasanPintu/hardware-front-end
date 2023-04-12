import React from 'react';
import productImg1 from '../../../assets/products/product-img-1.jpg';

const Checkout = () => {
    return (
        <div className=''>
            <div class=" text-start w-11/12 mx-auto px-4 md:px-8 2xl:px-16">
                <div class="py-14 xl:py-20 px-0 2xl:max-w-screen-2xl xl:max-w-screen-xl mx-auto flex flex-col md:flex-row w-full space-x-14">
                    <div class="md:w-full lg:w-3/5 flex h-full flex-col -mt-1.5">
                        <h2 class="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">Shipping Address</h2>
                        <form class="w-full mx-auto flex flex-col justify-center " novalidate="">
                            <div class="flex flex-col space-y-4  lg:space-y-5">
                                <div class="flex flex-col lg:flex-row space-y-4 space-x-2 lg:space-y-0">
                                    <div class="w-full lg:w-1/2 "><label for="firstName" class="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">First Name *</label><input id="firstName" name="firstName" type="text" placeholder="" class="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md" autocomplete="off" spellcheck="false" /></div>
                                    <div class="w-full lg:w-1/2 lg:ms-3 md:ms-3 mt-2 md:mt-0"><label for="lastName" class="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">Last Name *</label><input id="lastName" name="lastName" type="text" placeholder="" class="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md" autocomplete="off" spellcheck="false" /></div>
                                </div>
                                <div class="block"><label for="address" class="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">Address *</label><input id="address" name="address" type="text" placeholder="" class="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md" autocomplete="off" spellcheck="false" /></div>
                                <div class="flex flex-col lg:flex-row space-x-2 space-y-4 lg:space-y-0">
                                    <div class="w-full lg:w-1/2 "><label for="phone" class="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">Phone/Mobile *</label><input id="phone" name="phone" type="tel" placeholder="" class="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md" autocomplete="off" spellcheck="false" /></div>
                                    <div class="w-full lg:w-1/2 lg:ms-3 mt-2 md:mt-0"><label for="email" class="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">Email *</label><input id="email" name="email" type="email" placeholder="" class="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md" autocomplete="off" spellcheck="false" /></div>
                                </div>
                                <div class="flex flex-col lg:flex-row space-x-2 space-y-4 lg:space-y-0">
                                    <div class="w-full lg:w-1/2 "><label for="city" class="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">City/Town</label><input id="city" name="city" type="text" placeholder="" class="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md" autocomplete="off" spellcheck="false" /></div>
                                    <div class="w-full lg:w-1/2 lg:ms-3 mt-2 md:mt-0"><label for="zipCode" class="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">Postcode</label><input id="zipCode" name="zipCode" type="text" placeholder="" class="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md" autocomplete="off" spellcheck="false" /></div>
                                </div>
                                <div class="relative flex items-center  "><label class="group flex items-center text-heading text-sm cursor-pointer"><input type="checkbox" class="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"/><span class="ms-4 -mt-0.5 ml-2">Save this information for next time</span></label></div>
                                <div class="relative pt-3 xl:pt-6"><label for="note" class="block text-gray-600 font-semibold text-sm leading-none mb-3">Order Notes (Optional)</label><textarea id="note" name="note" class="px-4 py-3 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 bg-white border border-gray-300 focus:shadow focus:outline-none focus:border-heading placeholder-body" autocomplete="off" spellcheck="false" rows="4" placeholder="Notes about your order, e.g. special notes for delivery"></textarea></div>
                                
                            </div>
                        </form>
                    </div>
                    <div class="md:w-full lg:w-2/5 md:ms-7 lg:ms-10 xl:ms-14 flex  flex-col h-full -mt-1.5 ">
                        <div class="pt-12 md:pt-0 2xl:ps-4">
                            <h2 class="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">Your Order</h2>
                            <div class="flex justify-between p-4 rounded-md mt-6 md:mt-7 xl:mt-9 bg-black-150 text-sm font-semibold text-heading"><span>Product</span><span class="ms-auto flex-shrink-0">Subtotal</span></div>
                            <div class="flex justify-between py-4 items-center lg:px-3 border-b border-gray-300">
                                <div class="flex border rounded-md border-gray-300 w-16 h-16 flex-shrink-0"><img src={productImg1} width="64" height="64" class="object-cover" alt=''/></div>
                                <h6 class="text-sm ps-3 font-regular text-heading">Polarised Wayfarer Sunglasses - Orange, S</h6>
                                <div class="flex ms-auto text-heading text-sm ps-2 flex-shrink-0">$40.00</div>
                            </div>
                            <div class="flex justify-between items-center py-4 lg:py-5 border-b border-gray-300 text-sm lg:px-3 w-full font-semibold text-heading last:border-b-0 last:text-base last:pb-0">Subtotal<span class="ms-auto flex-shrink-0">$40.00</span></div>
                            <div class="flex justify-between items-center py-4 lg:py-5 border-b border-gray-300 text-sm lg:px-3 w-full font-semibold text-heading last:border-b-0 last:text-base last:pb-0">Shipping<span class="ms-auto flex-shrink-0">Free</span></div>
                            <div class="flex justify-between items-center py-4 lg:py-5 border-b border-gray-300 text-sm lg:px-3 w-full font-semibold text-heading last:border-b-0 last:text-base last:pb-0">Total<span class="ms-auto flex-shrink-0">$40.00</span></div>
                            <div class="flex justify-between items-center py-4 lg:py-5 border-b border-gray-300 text-sm lg:px-3 w-full font-semibold text-heading last:border-b-0 last:text-base last:pb-0">Apply Cupon Code<span class="ms-auto flex-shrink-0"></span>  </div>
                           

                            
                        </div>
                        <div>
                        <p className='ml-3'>Have a cupon code? Apply in this field and fill out!</p>
                        <div className="w-full h-[44px] mt-2">
                                <div className="w-full h-full flex items-center  border border-gray-border bg-white search-com">
                                    <div className="flex-1 bg-red-500 h-full">
                                        <form action="#" className="h-full"><input type="text" className="search-input" placeholder="Code"/></form>
                                    </div>
                                   <button className=" w-[93px] h-full text-sm font-600 bg-black text-white" type="button">Apply</button></div>
                            </div>
                        </div>
                        <div class="flex justify-between items-center py-4 lg:py-5 text-sm lg:px-3 w-full font-semibold text-heading last:border-b-0 last:text-base last:pb-0">Payment Method<span class="ms-auto flex-shrink-0"></span>  </div>

                        <div class="relative flex items-center ml-3 mb-2 "><label class="group flex items-center text-heading text-sm cursor-pointer"><input type="radio" class="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"/><span class="ms-4 ml-2">Cash On Delivery</span></label></div>

                        <div class="flex w-full mt-2"><button data-variant="flat" class="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none  bg-black text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart w-full">Place Order</button></div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Checkout;