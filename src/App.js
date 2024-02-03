import { Route, Routes } from 'react-router-dom';
import './App.css';
import './i18n';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Head from './Components/Head/Head';
import PrivacyPolicy from './Components/Pages/PrivacyPolicy/PrivacyPolicy';
import Contact from './Components/Pages/Contact/Contact';
import Faq from './Components/Pages/Faq/Faq';
import About from './Components/Pages/About/About';
import Checkout from './Components/Pages/Checkout/Checkout';
import ProductDetails from './Components/ProductDetails/ProductDetails';
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import ProductsByCat from './Components/AllProducts/ProductsByCat';
import ProductsByBrands from './Components/AllProducts/ProductsByBrands';
import Confirmation from './Components/Pages/Checkout/Confirmation';
import Cart from './Components/Pages/Cart/Cart';
import Middlebar from './Components/Head/Middlebar';
import Topbar from './Components/Head/Topbar';
import FlashSale from './Components/AllProducts/FlashSale';
function App() {
  return (
    <div className="App bg-slate-50">
      
      <Topbar/>
      <Middlebar/>
      <Head />
      <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route path="/terms-condition" element={<Terms />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/faq" element={<Faq />}></Route>
        <Route path="/offer" element={<FlashSale/>}></Route>
        
        <Route path="/account/*" element={<RequireAuth>
         <Account/>
        </RequireAuth>}></Route>
        <Route path="/checkout" element={<RequireAuth>
          <Checkout />
        </RequireAuth>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/confirm" element={<Confirmation />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/tracking-order" element={<TrackOrder />}></Route>
        
        <Route path="/product-details" element={<ProductDetails />}></Route>
        <Route path="/product-details/:prodID" element={<ProductDetails />}></Route>
        <Route path="/all-product" element={<AllProducts />}></Route>
        <Route path="/categories" element={<ProductsByCat />}></Route>
        <Route path="/categories/:catID" element={<ProductsByCat />}></Route>
        <Route path="/brands" element={<ProductsByBrands />}></Route>
        <Route path="/brands/:brandID" element={<ProductsByBrands />}></Route>


        <Route path="/compaire" element={<CompareProduct />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/wishlist" element={<WishList />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/blog-details" element={<BlogDetails/>}></Route>
        <Route path="/*" element={<NotFound />}></Route>

      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
