import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import Product from './Products/Products';
import Home from './Home/Home';
import data from './Products/data';

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  }

  <div className="content">
    <ul className="products">
      {
        data.products.map(product =>
          <li>
            <div className="product">
              <img className="product-image" src={product.imageUrl} alt="product" />
              <div className="product-name">
                <a href="product.html">{product.name}</a>
              </div>
              <div className="product-brand">{product.brand}</div>
              <div className="product-price">{product.price}</div>
              <div className="product.rating">{product.rating}Stars({product.numberOfReviews} Reviews)</div>
            </div>
          </li>)
      }
    </ul>
  </div>
  return (
    <Router>
    <div className="grid-container">
      <head>
        <link rel="stylesheet" href="style.css" />
        <title>Space Sander</title>
      </head>
      <body>
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <a href="index.htm">Space Sander</a>
          </div>
          <div className="header-links">
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
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
          </Switch>
        </main>
        <footer className="footer">&copy; 2021 Space Sander</footer>
      </body>
    </div>
    </Router>
);
}

export default App;