import React from 'react';
import { useNavigate } from 'react-router-dom';

const Brand = ({brand}) => {
    const navigate = useNavigate();
    const navigateToBrands =(brandId)=>{
        navigate(`/brands/${brandId}`);

    }
    return (
        <div className="item">
            <div onClick={()=>navigateToBrands(brand.id)} className="w-full h-[130px] bg-white border border-primarygray flex justify-center items-center cursor-pointer"><img src={brand.brand_image} alt="brand img" className='w-[100px]'/></div>
        </div>
    );
};

export default Brand;