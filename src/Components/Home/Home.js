
import Brands from '../Brands/Brands';
// import Categories from '../Categories/Categories';
import Features from '../Features/Features';
import NewsLetter from '../NewsLetter/NewsLetter';
import PopularSale from '../PopularSale/PopularSale';
import TrendySales from '../TrendySales/TrendySales';
import NewArrival from '../NewArrival/NewArrival';
import PopularProducts from '../PopularProducts/PopularProducts';


const Home = () => {
    return (
        <div>
            <div className="carousel w-full ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://www.satatools.us/sites/sata_us/files/styles/biggest_landscape_3x1/public/2022-09/GP_NA_03_06.01.22.jpg" className="w-full" alt='slider1' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮ </a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://shopkhanico.com/wp-content/uploads/2020/02/sata-banner.png" className="w-full" alt='slider3' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>

            <Features />
            <TrendySales />
            <Brands />
            <PopularProducts/>
            <Brands />
            <NewArrival />
            <PopularSale />
            <NewsLetter />
            {/* <Categories/> */}
        </div>
    );
};

export default Home;