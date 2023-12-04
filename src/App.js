import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Skirts from './components/pages/Skirts';
import Trousers from './components/pages/Trousers';
import TShirts from './components/pages/Tshirts';
import Jumpers from './components/pages/Jumpers';
import Socks from './components/pages/Socks';
import Cart from './components/cart/Cart';
import { ShopContextProv } from './context/ShopContext';

function App () {
    return (
        <ShopContextProv>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/skirts" element={<Skirts />} />
                <Route path="/trousers" element={<Trousers />} />
                <Route path="/tShirts" element={<TShirts />} />
                <Route path="/jumpers" element={<Jumpers />} />
                <Route path="/socks" element={<Socks />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
        </Router>
        </ShopContextProv>
    )
}

export default App;
