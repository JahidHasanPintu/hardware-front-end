import React from 'react';
import { useBrands } from '../../hooks/useBrands';
import Brand from './Brand';
import { useTranslation } from 'react-i18next';

const Brands = () => {
    const { t } = useTranslation();
    const [brands] = useBrands();
    console.log(brands);

    return (
        <div>
            <div data-aos="fade-up" className="w-11/12 mx-auto brand-section-wrapper mb-[60px] aos-init aos-animate">
                <div className="container-x mx-auto">
                    <div className=" section-title flex justify-between items-center mb-5">
                        <div>
                            <h1 className="font-bold sm:text-3xl text-xl font-600 text-qblacktext mt-5">{t('ShopByBrand')}</h1>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2">
                        {
                            brands?.map(brand => {
                                if (brand.id !== 0) {
                                    return <Brand key={brand.id} brand={brand} />;
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

export default Brands;