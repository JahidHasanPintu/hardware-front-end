import React from 'react';
import { useProducts } from '../../hooks/useProducts';
import SingleProductCard from '../ProductCard/SingleProductCard/SingleProductCard';
import { useTranslation } from 'react-i18next';

const RelatedProducts = ({ catID, brandID }) => {
    const [products, loading] = useProducts('', '', '', brandID, catID);
    const { t } = useTranslation();
    return (
        <div className="related-product w-full ">
            <div className="container-x mx-auto">
                <div className="w-full py-[30px]">
                    <h1 className="sm:text-3xl text-xl font-600 text-qblacktext leading-none mb-[30px]">{t('RelatedProduct')}</h1>
                    <div data-aos="fade-up" className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5 aos-init">
                        {
                            products?.map((product) => (
                                <SingleProductCard key={product.id} product={product} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RelatedProducts;