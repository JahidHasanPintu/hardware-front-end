import React, { useEffect, useState } from 'react';
import carticon from '../../assets/images/cartIcon.png';
import warentyIco from '../../assets/icons/warranty.png';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ADD, ADD_TO_WISHLIST, DECREMENT_QUANTITY, INCREMENT_QUANTITY } from '../../redux/actions/action';
import { useProductByID } from '../../hooks/useProductById';
import Loading from '../Loading/Loading';
import StarRating from '../StarRating/StarRating';
import RelatedProducts from '../RelatedProducts/RelatedProducts';
import axios from 'axios';
import { useUserByEmail } from '../../hooks/useUserByEmail';
import { getApiUrl } from '../../api/apiURL';
import { toast } from 'react-toastify';
import { useReviews } from '../../hooks/useReviews';
import SidebarProduct from './SidebarProduct';
import { useTranslation } from 'react-i18next';


const ProductDetails = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [userData] = useUserByEmail();
    const [colorStock,setColorStock] = useState();
    const [sizeStock,setSizeStock] = useState();
    const [selectedColor,setSelectedColor] = useState('');
    const [selectedSize,setSelectedSize] = useState('');

    const handleAddToCart = (product) => {

        // console.log("color: ",selectedColor);
        if (product.quantity > 0) {
            if(selectedColor && !selectedSize){
                if(colorStock>0 && colorStock>=quantity){
                    dispatch(ADD(product, quantity,selectedColor,selectedSize));
                }else{
                    toast.error("Opps! This color is Stock Out")
                }
            }else if(!selectedColor && selectedSize){
                if(sizeStock>0 && sizeStock>=quantity){
                    dispatch(ADD(product, quantity,selectedColor,selectedSize));
                }else{
                    toast.error("Opps! This size is Stock Out")
                }
            }else if(selectedColor && selectedSize){
                if(colorStock>0 && sizeStock>0 && sizeStock>=quantity && colorStock>=quantity){
                    dispatch(ADD(product, quantity,selectedColor,selectedSize));
                }else{
                    toast.error(" Color or Size is Stock Out")
                }

            }else{
                dispatch(ADD(product, quantity,selectedColor,selectedSize));
            }
            
        } else {
            toast.error("Opps! Stock Out")
        }

    }
    const [isFavourite, setIsFavourite] = useState(false);

    const [quantity, setQuantity] = useState(1);
    const handleAddToFavourite = (product) => {
        dispatch(ADD_TO_WISHLIST(product));
        setIsFavourite(true);
    }

    const handleIncrement = (item) => {
        if (quantity < product?.quantity) {
            setQuantity(quantity + 1);
        }
    };
    const handleDecrement = (item) => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }

    };

    const location = useLocation();
    const Exproduct = location.state.product;
    const [featureIMG, setFeatureIMG] = useState(Exproduct.images[0]);
    const [shareSupported, setShareSupported] = useState(false);

    useEffect(() => {
        // Check if Web Share API is supported
        if (navigator.share) {
            setShareSupported(true);
        }
    }, []);

    const [product, loading] = useProductByID(Exproduct.id);
    const [reviews, revLoading] = useReviews(Exproduct.id);

    // Function to format the timestamp
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const options = {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        };
        return date.toLocaleDateString(undefined, options);
    };

    // Function to format the time
    const formatTime = (timestamp) => {
        const date = new Date(timestamp);
        const options = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        };
        return date.toLocaleTimeString(undefined, options);
    };




    const handleShare = async () => {
        try {
            // Check if Web Share API is supported
            if (navigator.share) {
                await navigator.share({
                    title: 'Check out this product',
                    text: 'Hey, check out this awesome product!',
                    url: window.location.href, // Share the current page URL
                });
            } else {
                // Fallback behavior if Web Share API is not supported
                console.log('Web Share API is not supported.');
            }
        } catch (error) {
            console.error('Error sharing:', error);
        }
    };

    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleRatingChange = (value) => {
        setRating(value);
    };

    const handleReviewChange = (event) => {
        setReview(event.target.value);
    };

    const handleSubmit = async () => {
        // Handle the submission of the review and rating here
        const data = {
            rating: rating,
            reviewText: review,
            productId: Exproduct.id,
            userID: userData.id,
        }

        if (userData.id) {
            try {
                const response = await axios.post(`${getApiUrl()}/reviews/create`, data);
                // console.log(response.data);
                toast.success(response.data.message);

            } catch (error) {
                console.error(error);
            }
        } else {
            toast.error("Login to give review !");
        }


        setIsModalOpen(false);
    };
    const handleOpenModal = () => {
        if (!userData.id) {
            toast.error("Login to give review !");
        } else {
            setIsModalOpen(true);
        }


    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

  

    const handleColorChange = (event) =>{
        product?.variations.map((variation) => {
            if(variation.color === event.target.value){
                if (variation.images && !variation.images.includes("null")) {
                    setFeatureIMG(variation.images);
                }
                
                if(variation.quantity){
                    console.log(variation.quantity);
                    setColorStock(variation.quantity);
                }
                
            }
        });
        setSelectedColor(event.target.value);
       

    }
    const handleSizeChange = (event) =>{
        product?.sizes.map((size) => {
            if(size.size === event.target.value){
                if(size.quantity){
                    console.log(size.quantity);
                    setSizeStock(size.quantity);
                }
                
            }
        });
        setSelectedSize(event.target.value);
        // console.log(event.target.value)
    }



    if (loading) {
        return <Loading />
    } else {
        // console.log(product)
    }

    return (
        <div>
            <div className="single-product-wrapper w-full px-5 mx-auto text-start">
                <div className='flex'>
                    <div className='mt-[30px] md:w-10/12 lg:w-10/12'>
                        <div className="product-view-main-wrapper bg-white ">
                            <div className="breadcrumb-wrapper p-5 w-full ">
                                <div className="container-x mx-auto">
                                    <div className="breadcrumb-wrapper font-400 text-[13px] text-blue-500 mb-[23px]"><span><Link to={'/'}><span className="mx-1 capitalize">home</span></Link><span className="sperator">/</span></span><span><span className="mx-1 capitalize cursor-pointer">single product</span><span className="sperator">/</span></span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full bg-white pb-[60px]">
                                <div className="container-x mx-auto">
                                    <div className="product-view w-full lg:flex justify-between ">
                                        <div data-aos="fade-right" className="lg:w-1/2 xl:mr-[70px] lg:mr-[50px] aos-init aos-animate">
                                            <div className="w-full">
                                                <div className="w-full h-[400px] border border-qgray-border flex justify-center items-center overflow-hidden relative mb-3"><img data-aos="fade-right" src={featureIMG} alt="" className="object-contain p-2 aos-init aos-animate" />
                                                </div>
                                                <div className="flex gap-2 flex-wrap">
                                                    {
                                                        product?.images?.map((image) =>
                                                            <div
                                                                onClick={() => setFeatureIMG(image)}
                                                                className="w-[110px] h-[110px] p-[15px] border border-qgray-border cursor-pointer"><img src={image} alt="" className="w-full h-full object-contain opacity-50 " /></div>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="product-details w-full mt-10 lg:mt-0"><span data-aos="fade-up" className="text-qgray text-xs font-normal uppercase tracking-wider mb-2 inline-block aos-init aos-animate">{t('brand')}: {product?.brand_name}</span>
                                                <p data-aos="fade-up" className="text-xl font-medium text-qblack mb-1 aos-init aos-animate">{product?.name}</p>
                                                <div data-aos="fade-up" className="flex space-x-[10px] items-center mb-2 aos-init">
                                                    {product?.average_rating !== null && product?.average_rating !== undefined ? (
                                                        <StarRating average_rating={product.average_rating} />
                                                    ) : (
                                                        " "
                                                    )}


                                                    <span className="text-[13px] font-normal text-qblack">{product?.total_reviews
                                                        !== null
                                                        ? `${product?.total_reviews
                                                        }`
                                                        : '0'} {t('reviews')}</span>

                                                </div>
                                                {product?.warranty
                                                    !== null
                                                    ? <div className='flex space-x-[8px] items-center mb-2'> <span>
                                                        <img src={warentyIco} alt='warenty' className='w-[20px]' />
                                                    </span><span>
                                                            {product?.warranty} {t('warranty')} 
                                                        </span></div>
                                                    : null}


                                                <div data-aos="fade-up" className="flex space-x-2 items-center mb-7 aos-init">
                                                    {product?.oldPrice > 0 && (
                                                        <span className="text-sm font-500 text-qgray line-through mt-2">৳{product?.oldPrice}

                                                        </span>
                                                    )}
                                                    <span className="text-2xl font-500 text-qred">৳{product?.price}</span></div>
                                                {
                                                    product?.variations ?

                                                        <div data-aos="fade-up" className="colors mb-[30px] aos-init"><span className="text-sm font-normal uppercase text-qgray mb-[14px] inline-block">{t('color')} </span>
                                                            {/* <div className="flex space-x-4 items-center">
                                                    {product?.variations?.map((variation, index) => {
                                                        const colorClassName = `bg-${variation.color.toLowerCase().replace(/\s/g, '-')}-500`;
                                                        return (
                                                            <div key={index}>
                                                                <button
                                                                    type="button"
                                                                    className={`w-[20px] h-[20px] rounded-full focus:ring-2 ring-offset-2 flex justify-center items-center ${colorClassName}`}
                                                                >
                                                                   
                                                                </button>
                                                            </div>
                                                        );
                                                    })}
                                                </div> */}
                                                            <div>
                                                                <div className="form-control w-full max-w-xs">
                                                                    <select 
                                                                    onChange={handleColorChange}
                                                                    className="select select-bordered">
                                                                        <option disabled selected>{t('selectColor')}</option>
                                                                        {product?.variations.map((variation) => (
                                                                            <option  key={variation.variation_id} value={variation.color}>
                                                                                {variation.color}
                                                                            </option>
                                                                        ))}
                                                                    </select>
                                                                    <label className="label">


                                                                    </label>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        : null
                                                }

                                                {
                                                    product?.sizes?

                                                    <div data-aos="fade-up" className="product-size mb-[30px] aos-init"><span className="text-sm font-normal uppercase text-qgray mb-[14px] inline-block">{t('size')} </span>
                                                    <div>
                                                        <div className="form-control w-full max-w-xs">
                                                            <select onChange={handleSizeChange} className="select select-bordered">
                                                                <option disabled selected>{t('selectSize')}</option>
                                                                {product?.sizes.map((variation) => (
                                                                    <option key={variation.id} value={variation.size}>
                                                                        {variation.size}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                            <label className="label">


                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                    : null
                                                }
                                                


                                                <div data-aos="fade-up" className="quantity-card-wrapper w-full flex items-center h-[50px] space-x-[10px] mb-[30px] aos-init">
                                                    <div className="w-[120px] h-full px-[26px] flex items-center border border-qgray-border">
                                                        <div className="flex justify-between items-center w-full">
                                                            <button
                                                                type="button"
                                                                className="text-base text-qgray"
                                                                onClick={() => handleDecrement(product)}
                                                            >-</button>
                                                            <span className="text-qblack">{quantity}</span>
                                                            <button
                                                                type="button"
                                                                className="text-base text-qgray"
                                                                onClick={() => handleIncrement(product)}
                                                            >+</button></div>
                                                    </div>
                                                    <div className="w-[80px] h-full flex justify-center items-center border border-qgray-border">
                                                        <button
                                                            type="button"

                                                            className="focus:outline-none text-qred" // Remove default focus outline
                                                        >
                                                            {t('stock')}: {product?.quantity}
                                                        </button>
                                                    </div>
                                                    <div className="w-[40px] h-full flex justify-center items-center border border-qgray-border">
                                                        <button
                                                            type="button"
                                                            onClick={() => handleAddToFavourite(product)}
                                                            className="focus:outline-none" // Remove default focus outline
                                                        >
                                                            <span>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    height="1em"
                                                                    viewBox="0 0 512 512"
                                                                    className={`w-6 h-6 text-gray-500 ${isFavourite ? 'text-red-500' : 'text-gray-500'
                                                                        }`}
                                                                >
                                                                    <path
                                                                        d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                                                                        fill="currentColor"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </button>
                                                    </div>

                                                    <div className="w-[40px] h-full flex justify-center items-center border border-qgray-border hover:bg-yellow-400">
                                                        {shareSupported ? (
                                                            <button type="button" onClick={handleShare}>
                                                                <span>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z" /></svg>
                                                                </span>
                                                            </button>
                                                        ) : (
                                                            " "
                                                        )}
                                                    </div>
                                                    <div
                                                        className="h-full flex justify-center items-center border border-qgray-border hover:bg-yellow-400"
                                                        onClick={() => handleAddToCart(product)}
                                                    >
                                                        <button type="button" className="text-sm font-semibold w-6/12 h-full">
                                                            <img src={carticon} style={{ width: '50px' }} />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div data-aos="fade-up" className="mb-[20px] aos-init">
                                                    <p className="text-[13px] text-qgray leading-7"><span className="text-qblack">{t('category')} :</span> {product?.cat_name}</p>
                                                    {/* <p className="text-[13px] text-qgray leading-7"><span className="text-qblack">Tags :</span> Beer, Foamer</p> */}
                                                    <p className="text-[13px] text-qgray leading-7"><span className="text-qblack">{t('sku')}:</span> {product?.sku}</p>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-des-wrapper w-full relative pb-[60px]">
                            <div className="tab-buttons w-full mb-10 mt-5 sm:mt-0">
                                <div className="container-x mx-auto">
                                    <ul className="flex space-x-12 ">
                                        <li><span className="py-[15px] sm:text-[15px] text-sm sm:block border-b font-medium cursor-pointer border-qyellow text-qblack ">{t('description')}</span></li>

                                    </ul>
                                </div>
                                <div className="w-full h-[1px] bg-[#E8E8E8] absolute left-0 sm:top-[50px] top-[36px] -z-10"></div>
                            </div>
                            <div className="tab-contents w-full ">
                                <div className="container-x mx-auto">
                                    <div data-aos="fade-up" className="w-full tab-content-item aos-init">
                                        <h6 className="text-[18px] font-medium text-qblack mb-2">Product Details of {product?.name}</h6>
                                        <div dangerouslySetInnerHTML={{ __html: product?.description }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-review-wrapper w-full relative pb-[60px]">
                            <div className="tab-buttons w-full mb-10 mt-5 sm:mt-0">
                                <div className="container-x mx-auto">
                                    <ul className="flex justify-between ">
                                        <li><span className="py-[10px] sm:text-[15px] text-sm sm:block border-b font-medium cursor-pointer border-qyellow text-qblack ">{t('customerreview')}</span></li>
                                        <li>
                                            <label onClick={handleOpenModal} htmlFor="product_revew_modal" className="p-[15px] sm:text-[15px] text-sm sm:block border-b font-medium cursor-pointer border-qyellow primary-bg-color">{t('writereview')}</label>
                                        </li>

                                    </ul>
                                </div>
                                <div className="w-full h-[1px] bg-[#E8E8E8] absolute left-0 sm:top-[50px] top-[36px] -z-10"></div>
                            </div>

                            {/* Write review modal */}
                            <input type="checkbox" id="product_revew_modal" className="modal-toggle" />

                            {isModalOpen && (
                                <div className="modal">
                                    <div className="modal-box">
                                        {/* Close button */}
                                        <label onClick={handleCloseModal} htmlFor="product_review_modal" className="modal-close absolute top-2 right-2 cursor-pointer p-2">
                                            X
                                        </label>

                                        <h3 className="text-lg font-bold mb-2">{t('reviewModalTitle')}</h3>
                                        {/* Rating stars */}
                                        <div className="flex items-center mb-4">
                                            {[1, 2, 3, 4, 5].map((index) => (
                                                <span
                                                    key={index}
                                                    onClick={() => handleRatingChange(index)}
                                                    className={`star-icon ${index <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
                                                >
                                                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </span>
                                            ))}
                                        </div>
                                        {/* Review textarea */}
                                        <textarea
                                            className="w-full h-32 p-2 border rounded"
                                            placeholder="Write your review here..."
                                            value={review}
                                            onChange={handleReviewChange}
                                        ></textarea>

                                        {/* Submit button */}
                                        <button
                                            className="px-4 py-2 mt-4 primary-bg-color rounded hover:bg-yellow-600"
                                            onClick={handleSubmit}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                    <label className="modal-backdrop" htmlFor="product_review_modal">
                                        Close
                                    </label>
                                </div>

                            )}

                            <div className="tab-contents w-full">
                                <div className="container-x mx-auto">
                                    <div data-aos="fade-up" className="w-full tab-content-item aos-init bg-base-100 shadow-sm ">
                                        {revLoading && <Loading />}
                                        {!revLoading && reviews?.length === 0 && <p className='p-5'>{t('noreview')}</p>}
                                        {!revLoading && reviews?.length > 0 && (
                                            <div>
                                                {reviews?.map((review) => (
                                                    <div key={review.id} className='border-b border-gray-100 flex items-center'>
                                                        <div className="avatar pl-4">
                                                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
                                                                <img src={review.photo_url} />
                                                            </div>
                                                        </div>

                                                        <div className="card w-full ">
                                                            <div className="card-body">
                                                                <StarRating average_rating={review.rating} />
                                                                <h4 className="card-title">{review.fullname}</h4>
                                                                <h6 className="">{formatDate(review.created_at)} {formatTime(review.created_at)}</h6>
                                                                <p>{review.review_text}</p>

                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-green mt-[30px] ml-2 hidden md:block lg:block'>
                        <h2 className='bg-white p-2 text-xl font-medium text-qblack mb-1 aos-init aos-animate'> {t('youmaylike')}</h2>
                        <SidebarProduct catID={Exproduct.cat_id} brandID={Exproduct.brand_id} />
                    </div>
                </div>
                <RelatedProducts catID={Exproduct.cat_id} brandID={Exproduct.brand_id} />
            </div>
        </div>
    );
};

export default ProductDetails;