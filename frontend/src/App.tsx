//import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import Product from './Products/Products';
import Home from './Home/Home';
import Orders from './Orders/Orders';
//import data from './Products/data';
import OrderDetail from './Orders/OrderDetails';
import Payment from './Payment/Payment';
import React, {useEffect, useState } from "react";
import axios from "axios";

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  }

  
  return (
    <Router>
    <div className="grid-container">
      <header className="header">
          <div className="brand">
          <button onClick={openMenu}>&#9776;</button>
          <a href="index.htm">Space Sander</a>
        
          </div>
          <div className="header-links">
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/payment">Payment</Link>
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>x</button>
          <ul>
            <li>
              <a href="index.html">Pants</a>
            </li>

            <li>
              <a href="index.html">Shirts</a>
            </li>
          </ul>
        </aside>
        <main className="main">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/catalog">
              <Product />
            </Route>
            <Route path="/orders">
              <Orders />
            </Route>
            <Route path="/order/:id">
              <OrderDetail />
            </Route>
            <Route exact path="/Payment">
              <Payment />
            </Route>

          </Switch>
        </main>
        <footer className="footer">&copy; 2021 Space Sander</footer>

    </div>
    </Router>
);
}

export default App;