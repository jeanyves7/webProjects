import React from "react";
import ButtonAppBar from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/RestoComponent/Homepage";
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Aps from "./loginPage/Appcompo"


function App() {
  return (
    <div className="App">       
      <Router>
      <ButtonAppBar />
          <Switch>
              <Route path="/" exact component={Home} />
              <Route exact path="/login" component={Aps} />
              <Route path="/About"  component={AboutPage} />
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
