
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import 'bulma/css/bulma.min.css';
import Cart from './pages/cart';
import ChickOut from './pages/ChickOut';
import Tak from './pages/Tak';


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/chick-out" element={<ChickOut />} />
        <Route path="/tak" element={<Tak />} />
      </Routes>
    </Router>
  )
}

export default App
