import React, { Component } from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";

export default class App extends Component {
  render() {
    return (
      <div className="footer">
        <div className="icons-footer">
          <a
            className="icon"
            href="https://www.facebook.com/izka.koziol"
            target="_blank"
          >
            <FaFacebookSquare size="100px" />
            Facebook
          </a>
          <a
            className="icon"
            href="https://www.instagram.com/po.dajlape/"
            target="_blank"
          >
            <FaInstagram size="100px" />
            Instagram
          </a>
          <Link className="icon" to="/kontakt">
            <MdContactMail size="100px" /> Kontakt
          </Link>
        </div>
        <div className="copyright-footer">&copy; Copyright 2020</div>
      </div>
    );
  }
}
