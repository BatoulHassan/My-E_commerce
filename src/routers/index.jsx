import React from "react";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from "../components/cart";
import Home from "../home";

const Routers = () => {

    return(
       <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart /> } />
          </Routes>
       </Router>
    )
}

export default Routers;