import "./navbar.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    let url = window.location.href;
    let pom = url.split("/");
    let productId = pom[pom.length - 1];
    let activeTab = 1;
    if (productId == "omnie") {
      activeTab = 2;
    } else if (productId == "galeria") {
      activeTab = 3;
    } else if (productId == "kontakt") {
      activeTab = 4;
    } else if (productId == "uslugi") {
      activeTab = 5;
    } else {
      activeTab = 1;
    }
    this.state = {
      activeTab: activeTab
    };
    this.setActiveTab = this.setActiveTab.bind(this);
  }

  setActiveTab(event) {
    this.setState(
      {
        activeTab: event.target.dataset.id
      },
      () => {
        console.log(this.state.activeTab);
        if (this.state.activeTab == 1) {
          console.log("home");
        } else {
          console.log("another");
        }
      }
    );
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(event) {
    let navbar = document.getElementsByClassName("navbar")[0];
    let navHeight = navbar.clientHeight;
    let currentPosition = document.documentElement.scrollTop;
    if (currentPosition > navHeight) {
      navbar.classList.add("stick-nav");
    } else {
      navbar.classList.remove("stick-nav");
    }
  }

  render() {
    return (
      <div className="navbar">
        <div className="navbar-logo">
          <div className="item-logo"></div>
          po.dajlape
        </div>
        <ul>
          <Link to="/">
            <li date-id="1" onClick={this.setActiveTab}>
              Home
            </li>
          </Link>
          <Link to="/omnie">
            <li date-id="2" onClick={this.setActiveTab}>
              O mnie
            </li>
          </Link>
          <Link to="/galeria">
            <li date-id="3" onClick={this.setActiveTab}>
              Galeria
            </li>
          </Link>
          <Link to="/kontakt">
            <li date-id="4" onClick={this.setActiveTab}>
              Kontakt
            </li>
          </Link>
          <Link to="/uslugi">
            <li date-id="5" onClick={this.setActiveTab}>
              Usługi
            </li>
          </Link>
        </ul>
      </div>
    );
  }
}
export default Navbar;
