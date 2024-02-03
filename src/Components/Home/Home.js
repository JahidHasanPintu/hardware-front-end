
import Brands from '../Brands/Brands';
// import Categories from '../Categories/Categories';
import Features from '../Features/Features';
import NewsLetter from '../NewsLetter/NewsLetter';
import PopularSale from '../PopularSale/PopularSale';
import TrendySales from '../TrendySales/TrendySales';
import NewArrival from '../NewArrival/NewArrival';
import PopularProducts from '../PopularProducts/PopularProducts';
import Categories from '../Categories/Categories';
import BannersAd from '../Banners/BannersAd';
import HeroBanner from '../Banners/HeroBanner';


const Home = () => {
    return (
        <div>
            <HeroBanner/>
            <Features />
            <TrendySales />
            <Categories />
            <PopularProducts/>
            <Brands />
            <NewArrival />
            <BannersAd/>
            <PopularSale />
            <NewsLetter />
            {/* <Categories/> */}
        </div>
    );
};

export default Home;