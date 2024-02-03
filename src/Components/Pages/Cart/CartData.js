import React from 'react';
import { useDispatch } from 'react-redux';
import { DECREMENT_QUANTITY, INCREMENT_QUANTITY, REMOVE } from '../../../redux/actions/action';

const CartData = (props) => {
    const { name, price, images } = props.product;
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
        <tr className="bg-white border-b hover:bg-gray-50">
            <td className="pl-10  py-4 ">
                <div className="flex space-x-6 items-center">
                    <div className="w-[80px] h-[80px] overflow-hidden flex justify-center items-center border border-[#EDEDED]"><img src={images[0]} alt="product" className="w-full h-full object-contain" /></div>
                    <div className="flex-1 flex flex-col">
                        <p className="font-medium text-[15px] text-qblack">{name}</p>
                    </div>
                </div>
            </td>

            <td className="text-center py-4 px-2">
                <div className="flex space-x-1 items-center justify-center"><span className="text-[15px] font-normal">${price}</span></div>
            </td>
            <td className=" py-4">
                <div className="flex justify-center items-center">
                    <div className="w-[120px] h-[40px] px-[26px] flex items-center border border-qgray-border">
                        <div className="flex justify-between items-center w-full"><button onClick={() => handleDecrement(product)} type="button" className="text-base text-qgray">-</button><span className="text-qblack">{product.orderQuantity}</span><button type="button" onClick={() => handleIncrement(product)} className="text-base text-qgray">+</button></div>
                    </div>
                </div>
            </td>
            <td className="text-right py-4">
                <div className="flex space-x-1 items-center justify-center"><span className="text-[15px] font-normal">${price * product.orderQuantity}</span></div>
            </td>
            <td className="text-right py-4">
                <div
                    onClick={() => handleRemove(product)}
                    className="flex space-x-1 items-center justify-center cursor-pointer"><span><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.7 0.3C9.3 -0.1 8.7 -0.1 8.3 0.3L5 3.6L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L3.6 5L0.3 8.3C-0.1 8.7 -0.1 9.3 0.3 9.7C0.7 10.1 1.3 10.1 1.7 9.7L5 6.4L8.3 9.7C8.7 10.1 9.3 10.1 9.7 9.7C10.1 9.3 10.1 8.7 9.7 8.3L6.4 5L9.7 1.7C10.1 1.3 10.1 0.7 9.7 0.3Z" fill="#AAAAAA"></path></svg></span></div>
            </td>
        </tr>
    );
};

export default CartData;