import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<Home/>}></Route>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;