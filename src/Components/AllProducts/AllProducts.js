import React, { useState } from 'react';
import productImg1 from '../../assets/products/product-img-1.jpg';
import productImg2 from '../../assets/products/product-img-2.jpg';
import productImg3 from '../../assets/products/product-img-3.jpg';
import productImg4 from '../../assets/products/product-img-4.jpg';
import productImg5 from '../../assets/products/product-img-5.jpg';
import productImg6 from '../../assets/products/product-img-6.jpg';
import productImg7 from '../../assets/products/product-img-7.jpg';
import add5 from '../../assets/images/ads-5.png';
import add6 from '../../assets/images/ads-6.png';
import { useProducts } from '../../hooks/useProducts';
import SingleProductCard from '../ProductCard/SingleProductCard/SingleProductCard';
import { useCategories } from '../../hooks/useCategories';
import { useBrands } from '../../hooks/useBrands';


const AllProducts = () => {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [catID, setCatID] = useState([]);
    const [subcatID, setSubCatID] = useState("");
    const [brandID, setBrandID] = useState([]);
    const [sort, setSort] = useState("");
    const [limit, setLimit] = useState(50);

    const [categories] = useCategories(1, 100);
    const [brands] = useBrands(1, 100);
    const [products, total] = useProducts(page, limit, search, brandID, catID, subcatID, sort);
    // console.log(total);
    const imageUrl = (product) => {
        const img = product.images[0].replace('\\', '/');
        return img;
    }

    const [sliderValue, setSliderValue] = useState(100);

    const handleSliderChange = (event) => {
        const newValue = parseInt(event.target.value);
        setSliderValue(newValue);
        // console.log(newValue);
    };
    const handleSortChange = (event) => {

        setSort(event.target.value);

    };

    const handleCategoryChange = (event) => {
        const categoryId = event.target.id;

        if (event.target.checked) {
            // Add the category ID to the selectedCategories array
            setCatID((prevSelectedCategories) => [
                ...prevSelectedCategories,
                categoryId,
            ]);
        } else {
            // Remove the category ID from the selectedCategories array
            setCatID((prevSelectedCategories) =>
                prevSelectedCategories.filter(
                    (catID) => catID !== categoryId
                )
            );
        }
    };
    const handleBrandChange = (event) => {
        const selectedBrandId = event.target.id;

        if (event.target.checked) {

            setBrandID((prevSelectedBrands) => [
                ...prevSelectedBrands,
                selectedBrandId,
            ]);
        } else {

            setBrandID((prevSelectedBrands) =>
                prevSelectedBrands.filter(
                    (brandID) => brandID !== selectedBrandId
                )
            );
        }
    };

    return (
        <div>
            <div className="w-11/12 mx-auto text-start  pt-[30px] pb-[60px]">
                <div className="products-page-wrapper w-full">
                    <div className="container-x mx-auto">
                        <div className="breadcrumb-wrapper font-400 text-[13px] text-qblack mb-[23px]"><span><a href="/"><span className="mx-1 capitalize">home</span></a><span className="sperator">/</span></span>
                        </div>
                        <div className="w-full lg:flex lg:space-x-[30px]">
                            <div className="lg:w-[270px]">
                                <div className="filter-widget w-full left-0 top-0 h-screen z-10 lg:h-auto overflow-y-scroll lg:overflow-y-auto bg-white px-[30px] pt-[40px] mb-[30px]  hidden lg:block">
                                    <div className="filter-subject-item pb-10 border-b border-qgray-border">
                                        <div className="subject-title mb-[30px]">
                                            <h1 className="text-black text-base font-500">Product categories</h1>
                                        </div>
                                        <div className="filter-items">
                                            <ul>
                                                {
                                                    categories?.map(category => {
                                                        if (category.id !== 0) {
                                                            return <li key={category.id} className="item flex justify-between items-center mb-5">
                                                                <div className="flex space-x-[14px] cursor-pointer items-center">
                                                                    <div>
                                                                        <div><input id={category.id} type="checkbox" name={category.cat_name}
                                                                            onChange={handleCategoryChange}

                                                                        /></div>
                                                                    </div>
                                                                    <div><label htmlFor={category.id} className="text-xs font-black font-400 capitalize">{category.cat_name}</label></div>
                                                                </div>
                                                                <div><span className="cursor-pointer"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="4" width="10" height="2" fill="#C4C4C4"></rect><rect x="6" width="10" height="2" transform="rotate(90 6 0)" fill="#C4C4C4"></rect></svg></span></div>
                                                            </li>;
                                                        }
                                                        return null; // Exclude brand with id 0
                                                    })
                                                }


                                            </ul>
                                        </div>
                                    </div>
                                    {/* <div className="filter-subject-item pb-10 border-b border-qgray-border mt-10">
                                        <div className="subject-title mb-[30px]">
                                            <h1 className="text-black text-base font-500">Price Range</h1>
                                        </div>
                                        <input type="range" min="0" max="100" defaultValue="50"
                                            onChange={handleSliderChange} className="range range-xs" />

                                        <p className="text-xs text-qblack font-400">Price: $0 - $1000</p>
                                    </div> */}
                                    <div className="filter-subject-item pb-10 border-b border-qgray-border mt-10">
                                        <div className="subject-title mb-[30px]">
                                            <h1 className="text-black text-base font-500">Brands</h1>
                                        </div>
                                        <div className="filter-items">
                                            <ul>
                                                {
                                                    brands.map(brand =>
                                                        <li key={brand.id} className="item flex justify-between items-center mb-5">
                                                            <div className="flex space-x-[14px] cursor-pointer items-center">
                                                                <div>
                                                                    <div><input id={brand.id} type="checkbox"
                                                                        onChange={handleBrandChange}
                                                                        name={brand.brand_name} /></div>
                                                                </div>
                                                                <div><label htmlFor={brand.id} className="text-xs font-black font-400 capitalize">{brand.brand_name}</label></div>
                                                            </div>
                                                            <div><span className="cursor-pointer"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="4" width="10" height="2" fill="#C4C4C4"></rect><rect x="6" width="10" height="2" transform="rotate(90 6 0)" fill="#C4C4C4"></rect></svg></span></div>
                                                        </li>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    <button type="button" className="w-10 h-10 fixed top-5 right-5 z-50 rounded  lg:hidden flex justify-center items-center border border-qred text-qred"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button></div>
                                <div className="w-full hidden lg:block h-[295px]"><img src={add5} alt="" className="w-full h-full object-contain" /></div>
                            </div>
                            <div className="flex-1">
                                <div className="products-sorting w-full bg-white md:h-[70px] flex md:flex-row flex-col md:space-y-0 space-y-5 md:justify-between md:items-center p-[30px] mb-[40px]">
                                    <div>
                                        <p className="font-400 text-[13px]">
                                            <span className="text-qgray">Showing</span> 1-
                                            {limit > total ? total : limit} of {total} results
                                        </p>
                                    </div>
                                    <div className="flex space-x-3 items-center border-b border-qgray">
                                        <span className="font-400 text-[13px] text-qgray">Sort by:</span>
                                        <select onChange={handleSortChange} className="font-400 text-[13px] text-qgray outline-none bg-transparent">
                                            <option value="">Default</option>
                                            <option value="latest">Latest</option>
                                            <option value="oldest">Oldest</option>
                                            <option value="popular">Popular</option>
                                        </select>
                                    </div>
                                    <button type="button" className="w-10 lg:hidden h-10 rounded flex justify-center items-center border border-qyellow text-qyellow"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg></button>
                                </div>
                                <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1  xl:gap-[30px] gap-5 mb-[40px]">
                                    {
                                        products?.map(product =>
                                            <SingleProductCard key={product.id}
                                                product={product} />
                                        ).slice(0, 20)
                                    }


                                </div>
                                <div className="w-full h-[164px] overflow-hidden mb-[40px]"><img src={add6} alt="" className="w-full h-full object-contain" /></div>
                                <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1  xl:gap-[30px] gap-5 mb-[40px]">
                                    {
                                        products?.map(product =>
                                            <SingleProductCard key={product.id}
                                                product={product} />
                                        ).slice(11, 50)
                                    }


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;