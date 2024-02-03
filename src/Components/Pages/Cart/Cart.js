import React from 'react';
import Breadcumbs from '../../../Shared/Breadcumbs/Breadcumbs';
import { useDispatch, useSelector } from 'react-redux';
import CartData from './CartData';
import { CLEAR_CART } from '../../../redux/actions/action';
import { Link } from 'react-router-dom';

const Cart = () => {

    const getData = useSelector((state) => state.cartReducer);
    const products = getData.cart;
    const dispatch = useDispatch();
    const handleClearAll = () => {
        dispatch(CLEAR_CART());
    };

    return (
        <div>
            <Breadcumbs name={'cart'} path={'/cart'} />
            <div className="w-full mt-[23px] mb-5">
                <div className="container-x text-start w-10/12 mx-auto">
                    <div className="w-full mb-[30px]">
                        <div className="relative w-full overflow-x-auto border border-[#EDEDED]">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <tbody>
                                    <tr className="text-[13px] font-medium text-black bg-[#F6F6F6] whitespace-nowrap px-2 border-b default-border-bottom uppercase">
                                        <td className="py-4 pl-10 block whitespace-nowrap  w-[380px]">product</td>
                                        <td className="py-4 whitespace-nowrap text-center">price</td>
                                        <td className="py-4 whitespace-nowrap  text-center">quantity</td>
                                        <td className="py-4 whitespace-nowrap  text-center">total</td>
                                        <td className="py-4 whitespace-nowrap text-right w-[114px] block">Action</td>
                                    </tr>

                                    {
                                        products?.map(product =>
                                            <CartData key={product.id} product={product} />
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="w-full flex sm:justify-end justify-end">
                        <div>

                            {/* <div className="w-full px-10 py-[30px]">
                                

                                <div className="flex justify-between mb-3">
                                    <p className="text-[13px] font-medium text-qblack uppercase">SUBTOTAL</p>
                                    <p className="text-[15px] font-medium text-qblack uppercase">$500</p>
                                </div>
                                <div className="flex justify-between mb-3">
                                    <p className="text-[13px] font-medium text-qblack uppercase">TAX</p>
                                    <p className="text-[15px] font-medium text-qblack uppercase">$500</p>
                                </div>
                                <div className="flex justify-between mb-3">
                                    <p className="text-[13px] font-medium text-qblack uppercase">SHIPPING</p>
                                    <p className="text-[15px] font-medium text-qblack uppercase">$500</p>
                                </div>
                                <div className="w-full h-[1px] bg-[#EDEDED]"></div>
                                <div className="flex justify-between mb-3">
                                    <p className="text-[13px] font-medium text-qblack uppercase">Grand Total</p>
                                    <p className="text-[15px] font-medium text-qblack uppercase">$500</p>
                                </div>
                               
                                <div>
                                    <p className=''>Have a cupon code?</p>
                                   {
                                    cuponLoad && (
                                        <h2 className='ml-3 text-qred'>Checking coupon !! </h2>
                                    )
                                } 
                                    <div className="w-full h-[44px] mt-2">
                                        <div className="w-full h-full flex items-center  border border-gray-border bg-white search-com">
                                            <div className="flex-1 bg-red-500 h-full">
                                                <form action="#" className="h-full"><input type="text"
                                                    // value={couponCode}
                                                    // onChange={handleCouponCodeChange}
                                                    className="search-input" placeholder="Code" /></form>
                                            </div>
                                            <button
                                                // onClick={handleCouponSubmit} 
                                                className=" w-[93px] h-full text-sm font-600 bg-black text-white hover:text-white hover:bg-gray-600 hover:shadow-cart" type="button">Apply</button></div>
                                    </div>
                                    <div className="w-full mt-4 h-[50px]">
                                    <Link to={"/checkout"} >
                                        <button type="button" className="product-button">
                                            <div className="w-full text-sm font-semibold">Checkout</div></button>
                                    </Link>
                                </div>
                                </div>

                            </div>  */}

                            <div className="sm:flex sm:space-x-[30px] items-center"><button type="button" onClick={handleClearAll} ><div className="w-full text-sm font-semibold text-qred mb-5 sm:mb-0">Clean Cart</div></button>
                                <div className="w-[180px] h-[50px]">
                                    {getData.cart.length > 0 ? (
                                        <Link to={"/checkout"}>
                                            <div className="w-full h-[50px]">
                                                <div className="product-button"><span className="text-sm">Checkout Now</span></div>
                                            </div>
                                        </Link>
                                    ) : (
                                        <div className="w-full h-[50px]">
                                            <div className="product-button"><span className="text-sm">No items in cart</span></div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;