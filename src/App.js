
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Signup from './Components/Signup';
import Signin from './Components/Signin';



function App() {
  return (
     <>
      <Navbar/>
      <Routes>       
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        
        
      </Routes>  
     </>       
  
  );
}

export default App;
