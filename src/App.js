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

function App() {
  return (
    <div className="App bg-slate-50">
      <Head/>
      <Routes>
        
        <Route path="/" element={<Home/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/faq" element={<Faq/>}></Route>
        <Route path="/about" element={<About/>}></Route>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
