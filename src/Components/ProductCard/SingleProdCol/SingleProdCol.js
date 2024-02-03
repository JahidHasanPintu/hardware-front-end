import React from 'react';
import { useNavigate } from 'react-router-dom';
import carticon from '../../../assets/images/cartIcon.png';
import { useDispatch } from 'react-redux';
import { ADD } from '../../../redux/actions/action';
import { toast } from 'react-toastify';

const SingleProdCol = (props) => {
    const product = props.product;
    const navigate = useNavigate();

    const navigateToProductDetails = (product) => {
        navigate(`/product-details/${product.id}`, { state: { product } });

    }

    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        if (product.quantity > 0) {
            dispatch(ADD(product));
        } else {
            toast.error("Opps! Stock Out")
        }
    }


    return (
        <div data-aos="fade-up" className="product-card-row-two w-full aos-init aos-animate"

        >
            <div className="w-full h-[105px] bg-white border border-primarygray px-5 ">
                <div className="w-full h-full flex space-x-5 justify-center items-center" >
                    <div className="w-[75px] h-full"><img src={product.images[0]} alt="" className="w-full h-full object-contain" /></div>
                    <div className="flex-1 h-full flex flex-col justify-center ">

                        <p onClick={() => navigateToProductDetails(product)} className="text-start title mb-2 sm:text-[15px] text-[13px] font-semibold text-qblack leading-[24px] line-clamp-1 hover:text-blue-600 cursor-pointer"  >{product.name.slice(0, 62)}...</p>

                        <div className='flex justify-between items-center '>
                            <div>
                                <p className="text-start price"><span className="main-price text-slate-500 line-through font-semibold text-[18px]">{product?.oldPrice > 0 && (
                                    <span className="main-price text-slate-500 line-through font-semibold text-[18px]">৳{product?.oldPrice}</span>
                                )}</span><span className="offer-price text-red-500 font-semibold text-[18px] ml-2">৳ {product.price}</span></p>
                            </div>
                            <div onClick={() => handleAddToCart(product)}>
                                <img className='pr-4 cursor-pointer hover:bg-gray-100' src={carticon} alt='cartIcon' style={{ width: '50px' }} />
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProdCol;