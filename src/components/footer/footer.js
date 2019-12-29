import React, { Component } from "react";
import "./footer.css";
import { FaFacebookSquare, FaInstagram} from "react-icons/fa";


export default class App extends Component{
  render()
 {
  return (
    <div className="footer"> 
    <FaFacebookSquare size="100px" color="#6a9dbc" />
    <FaInstagram size="100px" color="#6a9dbc" />
    <FaInstagram size="100px" color="#6a9dbc" />
    &copy; Copyright 2020 </div>
  );
}
}