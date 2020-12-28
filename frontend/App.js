import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/RestoComponent/Homepage";
import AboutPage from './components/AboutPage';
import Addcart from './components/addtocart';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import './App.css';

import Signin from "./loginPage/login.component";
import Signup from "./loginPage/signup.component";


function App() {
  return (      
      <Router>
      
        <Switch>
            <Route exact path="/"  component={Home} />
            <Route path="/cart" component={Addcart} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/About"  component={AboutPage} />
        </Switch>
        
      </Router>
    
  );
}

export default App;