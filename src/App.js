import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import Head from './Components/Head/Head';
import PrivacyPolicy from './Components/Pages/PrivacyPolicy/PrivacyPolicy';
import Contact from './Components/Pages/Contact/Contact';
import Faq from './Components/Pages/Faq/Faq';
import About from './Components/Pages/About/About';
import Checkout from './Components/Pages/Checkout/Checkout';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import ProdDetails from './Components/ProdDetails/ProdDetails';
import AllProducts from './Components/AllProducts/AllProducts';
import TrackOrder from './Components/Pages/TrackOrder/TrackOrder';
import Login from './Components/Pages/Login/Login';
import Signup from './Components/Pages/Signup/Signup';
import Terms from './Components/Pages/Terms/Terms';
import CompareProduct from './Components/CompareProduct/CompareProduct';
import WishList from './Components/WishList/WishList';
import Blogs from './Components/Blogs/Blogs';
import NotFound from './Components/NotFound/NotFound';
import BlogDetails from './Components/Blogs/BlogDetails';
import Account from './Components/Account/Account';

function App() {
  return (
    <div className="App bg-slate-50">
      <Head />
      <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route path="/terms-condition" element={<Terms />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/faq" element={<Faq />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/tracking-order" element={<TrackOrder />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/product-details" element={<ProductDetails />}></Route>
        <Route path="/all-product" element={<AllProducts />}></Route>
        <Route path="/prod-details" element={<ProdDetails />}></Route>
        <Route path="/compaire" element={<CompareProduct />}></Route>
        <Route path="/wishlist" element={<WishList />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/blog-details" element={<BlogDetails/>}></Route>
        <Route path="/prod-details/:ID" element={<ProdDetails />}></Route>
        <Route path="/*" element={<NotFound />}></Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
