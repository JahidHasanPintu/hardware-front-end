import React from 'react';
import { useProducts } from '../../hooks/useProducts';
import SingleProdCol from '../ProductCard/SingleProdCol/SingleProdCol';
import { useNavigate } from 'react-router-dom';

const SidebarProduct = ({ catID, brandID }) => {
    const [products, loading] = useProducts('', '', '', brandID, catID);
    const navigate = useNavigate();

    const navigateToProductDetails = (product) => {
        navigate(`/product-details/${product.id}`, { state: { product } });

    }
    return (
        <div className="">
            {
                products?.map(product =>
                    <div  className="product-card-row-two w-full aos-init aos-animate mb-1"

                    >
                        <div className="w-full h-[105px] bg-white border border-primarygray px-5 ">
                            <div className="w-full h-full flex space-x-5 justify-center items-center" >
                                <div className="w-[75px] h-full"><img src={product.images[0]} alt="" className="w-full h-full object-contain" /></div>
                                <div className="flex-1 h-full flex flex-col justify-center ">

                                    <p onClick={() => navigateToProductDetails(product)} className="text-start title mb-2 sm:text-[15px] text-[13px] font-semibold text-qblack leading-[24px] line-clamp-1 hover:text-blue-600 cursor-pointer"  >{product.name}</p>

                                    <div className='flex justify-between items-center '>
                                        <div>
                                            <p className="text-start price">
                                            {product?.oldPrice > 0 && (
                                                        <span className="main-price text-slate-500 line-through font-semibold text-[18px]">৳{product?.oldPrice}</span>
                                                    )}
                                                <span className="offer-price text-red-500 font-semibold text-[18px] ml-2">৳{product.price}</span></p>
                                        </div>
                                       
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                ).slice(0, 10)
            }
        </div>
    );
};

export default SidebarProduct;