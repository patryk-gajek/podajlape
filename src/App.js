import React from "react";
import "./App.css";
import Home from "./container/home/home";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Contact from "./container/contact/contact";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar></Navbar>
        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/omnie">O mnie</Route>
          <Route path="/galeria">Galeria</Route>
          <Route path="/contact"><Contact /></Route>
          <Route path="/oferta">Oferta</Route>
        </Switch>
        <Footer></Footer>
      </Router>
      
    </div>
  );
}

export default App;
