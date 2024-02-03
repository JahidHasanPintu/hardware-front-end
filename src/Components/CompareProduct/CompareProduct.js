import React from 'react';
import Breadcumbs from '../../Shared/Breadcumbs/Breadcumbs';
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_FROM_COMPARE } from '../../redux/actions/action';

const CompareProduct = () => {
    const dispatch = useDispatch();
    const compareProducts = useSelector((state) => state.compare);
    const handleRemove = (item) => {
        dispatch(REMOVE_FROM_COMPARE(item));
    };
    
    return (
        <div>

            <Breadcumbs name={'Product Comparison'} path={'/compaire'} />
            <div className="container-x text-start w-10/12 mx-auto">
                <div className="w-full border border-qgray-border">
                    <table className="table-wrapper">
                        <tbody>
                            <tr className="table-row-wrapper">
                                <td className="w-[233px] pt-[30px] px-[26px] align-top bg-[#FAFAFA]">
                                    <div className="">
                                        <h1 className="text-[18px] font-medium text-qblack mb-4">Product Comparison</h1>
                                        <p className="text-[13px] text-qgraytwo">Select products to see the differences and similarities between them</p>
                                    </div>
                                </td>
                                {
                                    compareProducts?.map(product =>
                                        <td className="product w-[235px] bg-white p-6 border-b border-r border-qgray-border">
                                            <p className="text-end text-[15px] font-medium text-black leading-[24px] cursor-pointer"
                                            onClick={() => handleRemove(product)}
                                            > X </p>
                                            <div className="product-img flex justify-center mb-3 ">
                                                <div className="w-[161px] h-[161px]"><img src={product.images[0]} alt="" className="w-full h-full object-contain" /></div>
                                            </div>
                                            <p className="text-center text-[15px] font-medium text-qblack leading-[24px] mb-2">{product.name}</p>
                                            <p className="text-center text-[15px] font-medium text-qred leading-[24px]">${product.price}</p>
                                            
                                        </td>
                                    )
                                }
                            </tr>
                            <tr className="table-row-wrapper">
                                <td className="w-[233px]  px-[26px] align-top bg-[#FAFAFA]">
                                    <div className="">
                                        <h1 className="text-[15px] font-medium text-qblack ">Rating</h1>
                                    </div>
                                </td>
                                {
                                    compareProducts?.map(product =>
                                        <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                            <div className="flex space-x-2 items-center"><span className="text-[15px] font-medium text-qblack">4.8</span>
                                                <div className="flex items-center"><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFA800"></path></svg><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFA800"></path></svg><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFA800"></path></svg><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFA800"></path></svg><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFA800"></path></svg></div>
                                                <span className="text-[13px] font-normal text-qgraytwo">(10)</span></div>
                                        </td>
                                    )
                                }


                            </tr>
                            <tr className="table-row-wrapper">
                                <td className="w-[233px] px-[26px] align-top bg-[#FAFAFA]">
                                    <div className="">
                                        <h1 className="text-[15px] font-medium text-qblack ">Category</h1>
                                    </div>
                                </td>
                                {
                                    compareProducts?.map(product =>
                                        <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top">
                                    <span className="text-[13px] font-normal text-qgraytwo">{product.cat_name}</span>
                                </td>
                                        )
                                }
                                
                            </tr>
                            <tr className="table-row-wrapper">
                                <td className="w-[233px] px-[26px] align-top bg-[#FAFAFA]">
                                    <div className="">
                                        <h1 className="text-[15px] font-medium text-qblack ">Brand</h1>
                                    </div>
                                </td>
                                {
                                    compareProducts?.map(product =>
                                        <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top"><span className="text-[13px] font-normal text-qgraytwo">{product.brand_name}</span></td>
                                        )
                                }
                                
                            </tr>
                            <tr className="table-row-wrapper">
                                <td className="w-[233px] px-[26px] align-top bg-[#FAFAFA]">
                                    <div className="">
                                        <h1 className="text-[15px] font-medium text-qblack ">Availability</h1>
                                    </div>
                                </td>
                                {
                                    compareProducts?.map(product =>
                                        <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top"><span className="text-[13px] font-semibold text-green-500">In Stock</span></td>
                                        )
                                }
                               
                            </tr>

                            <tr className="table-row-wrapper">
                                <td className="w-[233px] px-[26px] align-top bg-[#FAFAFA]">
                                    <div className="">
                                        <h1 className="text-[15px] font-medium text-qblack ">Description</h1>
                                    </div>
                                </td>
                                {
                                    compareProducts?.map(product =>
                                        <td className="product w-[235px] bg-white px-6 border-r border-qgray-border pb-[20px] align-top"><span className="text-[13px] font-normal text-qgraytwo">{product.description}</span></td>
                                        )
                                }
                               
                            </tr>



                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CompareProduct;