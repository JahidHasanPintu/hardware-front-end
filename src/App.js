import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import Head from './Components/Head/Head';

function App() {
  return (
    <div className="App bg-slate-50">
      <Head/>
      <Routes>
        
        <Route path="/" element={<Home/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
