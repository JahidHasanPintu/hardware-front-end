import React from 'react';
import { useDispatch } from 'react-redux';
import { DECREMENT_QUANTITY, INCREMENT_QUANTITY, REMOVE } from '../../../redux/actions/action';

const CartDataProdCard = (props) => {
    const product = props.product;
    const dispatch = useDispatch();
    const handleRemove = (item) => {
        dispatch(REMOVE(item));
    };
    const handleIncrement = (item) => {
        dispatch(INCREMENT_QUANTITY(item));
    };
    const handleDecrement = (item) => {
        dispatch(DECREMENT_QUANTITY(item));
    };


    return (
        <li className="w-full h-full flex">
            <div className="flex space-x-[6px] justify-center items-center px-4 my-[20px]">

                <div className="w-[65px] h-full"><img src={product?.images?.[0]} alt="" className="w-full h-full object-contain" /></div>
                <div className="flex-1 h-full flex flex-col justify-center w-[140px]">
                    <p className="title mb-2 text-start text-[13px]  font-600 text-qblack leading-4 line-clamp-2 hover:text-blue-600">{product.name}</p>
                    <div className='flex justify-between items-center'>

                        <div className="w-[90px] h-full px-[15px] flex items-center border border-qgray-border">
                            <div className="flex justify-between items-center w-full"><button
                                onClick={() => handleDecrement(product)}
                                type="button" className="text-base text-qgray">-</button><span className="text-qblack">{product.orderQuantity}</span><button onClick={() => handleIncrement(product)} type="button" className="text-base text-qgray">+</button></div>
                        </div>
                    </div>

                </div>


                <div>
                    <p className="price"><span className="offer-price text-qred font-600 text-[15px] mr-2">${product.price}</span> <span
                        onClick={() => handleRemove(product)}
                        className="mt-[20px] inline-flex cursor-pointer "><svg width="8" height="8" viewBox="0 0 8 8" fill="none" className="inline fill-current text-[#AAAAAA] hover:text-qred" xmlns="http://www.w3.org/2000/svg"><path d="M7.76 0.24C7.44 -0.08 6.96 -0.08 6.64 0.24L4 2.88L1.36 0.24C1.04 -0.08 0.56 -0.08 0.24 0.24C-0.08 0.56 -0.08 1.04 0.24 1.36L2.88 4L0.24 6.64C-0.08 6.96 -0.08 7.44 0.24 7.76C0.56 8.08 1.04 8.08 1.36 7.76L4 5.12L6.64 7.76C6.96 8.08 7.44 8.08 7.76 7.76C8.08 7.44 8.08 6.96 7.76 6.64L5.12 4L7.76 1.36C8.08 1.04 8.08 0.56 7.76 0.24Z"></path></svg></span></p>
                </div>


            </div>

        </li>
    );
};

export default CartDataProdCard;