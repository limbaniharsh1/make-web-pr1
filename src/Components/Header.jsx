import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Cart, Person, Search } from "react-bootstrap-icons";

function Header() {
  return (
    <div className="row header">
      <div className="logo">
        <img src="img/logo.png" alt="" srcset="" />
      </div>
      <nav>
        <div className="row">
          <Link to='/' className="link">Home</Link>
          <Link to='/product' className="link">Product</Link>
          <Link to='/collection' className="link">Collection</Link>
          <Link to='/sale' className="link">Sales</Link>
        </div>
      </nav>
      <div className="icons">
        <ul className="row">
          <li>
            <Link to='/signup'>
              <Person />
            </Link>
            
          </li>
          <li>
            <a href="#">
              <Search />
            </a>
          </li>
          <li>
            <a href="#">
              <Cart />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
