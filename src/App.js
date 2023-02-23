import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div className="App bg-slate-50">
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<Home/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
