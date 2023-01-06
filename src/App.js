
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import Rates from './Components/Rates';
import Navbar from './Components/Navbar';
import Download from './Components/Download';


function App() {
  return (
     <>
      <Navbar/>
      <Routes>       
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/rates' element={<Rates/>}/>
        <Route path='/download' element={<Download/>}/>
      </Routes>  
     </>       
  
  );
}

export default App;
