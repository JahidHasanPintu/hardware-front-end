import React, { useState } from 'react';
import { useCategories } from '../../hooks/useCategories';
import Category from './Category';
import Loading from '../Loading/Loading';
import { useTranslation } from 'react-i18next';

const Categories = () => {
    const { t } = useTranslation();
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("");
    const [limit, setLimit] = useState(12);
    const [categories, totalPages,loading,] = useCategories(page, limit, search, status);

    if (loading) {
        return <Loading/>
    }
    console.log("loading:", loading);

    return (
        <div>
            <div data-aos="fade-up" className="w-11/12 mx-auto brand-section-wrapper mb-[60px] aos-init aos-animate">
                <div className="container-x mx-auto">
                    <div className=" section-title flex justify-between items-center mb-5">
                        <div>
                            <h1 className="font-bold sm:text-3xl text-xl font-600 text-qblacktext mt-5">{t('ShopByCategory')}</h1>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2">
                        {
                            categories?.map(category => {
                                if (category.id !== 0) {
                                    return <Category key={category.id} category={category} />;
                                }
                                return null; // Exclude brand with id 0
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;