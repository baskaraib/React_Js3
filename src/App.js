import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About';
import NotFound from './pages/NotFound';
import Product from './component/Product';


function App() {
  return(
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='*' element={<NotFound/>} />
      {/* tanda bintang digunakn mendefiniskan element yang belum ada */}
    </Routes>
  );
}

export default App;
