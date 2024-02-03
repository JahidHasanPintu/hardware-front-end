import React from 'react';
import { useNavigate } from 'react-router-dom';

const Category = (props) => {
    const category = props.category;
    const navigate = useNavigate();
    const navigateToCategories =(catID)=>{
        navigate(`/categories/${catID}`);

    }
    return (
        <div className="item">
            <div 
            onClick={()=>navigateToCategories(category.id)}
            className="w-full h-[130px] bg-white border border-primarygray flex justify-center items-center p-4 cursor-pointer">
                <img className="w-12 mr-2" src={category.cat_image} alt={category.cat_name} />
                <div className="flex flex-col justify-center">
                    <span className="text-lg font-bold">{category.cat_name}</span>
                </div>
            </div>
        </div>

    );
};

export default Category;