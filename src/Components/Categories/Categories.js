import React, { useState } from 'react';
import { useCategories } from '../../hooks/useCategories';
import Category from './Category';

const Categories = () => {

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("");
    const [limit, setLimit] = useState(12);
    const [categories, totalPages] = useCategories(page, limit, search, status);

    return (
        <div>
            <div data-aos="fade-up" className="w-11/12 mx-auto brand-section-wrapper mb-[60px] aos-init aos-animate">
                <div className="container-x mx-auto">
                    <div className=" section-title flex justify-between items-center mb-5">
                        <div>
                            <h1 className="font-bold sm:text-3xl text-xl font-600 text-qblacktext mt-5">Shop by Category</h1>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2">
                        {
                            categories.map(category =>
                            <Category key={category.cat_id} category={category} />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;