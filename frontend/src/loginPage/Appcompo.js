import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



function Aps() {
  return (
        
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <Link className="navbar-brand" to={"/"}>E-Tech</Link>
              <div className="" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto centered">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/signin"}>Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/signup"}>Sign up</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        

          
  );
}

export default Aps;
