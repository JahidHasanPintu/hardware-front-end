import React from 'react';
import { useNavigate } from 'react-router-dom';
import carticon from '../../../assets/images/cartIcon.png';
import { useDispatch } from 'react-redux';
import { ADD } from '../../../redux/actions/action';
import { toast } from 'react-toastify';
import StarRating from '../../StarRating/StarRating';

const SmallProductCard = (props) => {
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
        <div className="lg:w-56 md:w-56 sm:w-48 w-48 shadow-md dark:bg-gray-900 dark:text-gray-50 bg-base-100 my-3"

        >
            <div className='flex justify-center items-center'>
                <img src={product.images[0]} alt="" className="object-cover object-center w-40 h-auto dark:bg-gray-500 p-1" />
            </div>

            <p className="dark:text-gray-100 text-start mx-2 cursor-pointer hover:text-blue-600" onClick={() => navigateToProductDetails(product)} > {product.name.slice(0, 40)}..</p>
            <h2 className="text-m text-start text-red-500 font-semibold tracking-wide mx-2">৳{product.price}</h2>
            <div className='flex justify-between items-center '>
                <div>
                    <h6 className="text-xs text-start text-gray-500  tracking-wide mx-2">
                        {product?.oldPrice > 0 && (
                            <span className='line-through'>৳{product?.oldPrice} </span>
                        )}
                    </h6>
                    <div className="reviews flex space-x-[1px] mb-3 p-2">
                        {product?.average_rating !== null && product?.average_rating !== undefined ? (
                            <StarRating average_rating={product.average_rating} />
                        ) : (
                            " "
                        )}

                    </div>
                </div>
                <div onClick={() => handleAddToCart(product)}>
                    <img className='pr-4 cursor-pointer hover:bg-gray-100' src={carticon} alt='cartIcon' style={{ width: '50px' }} />
                </div>
            </div>

        </div>
    );
};

export default SmallProductCard;