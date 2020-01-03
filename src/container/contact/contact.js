import React, { Component } from "react";
import "./contact.css";
import doghome3 from "../../images/doghome3.jpg";
import logopodajlape1 from "../../images/logopodajlape1.png";
import Contactform from "../../components/contactform/contactform";
import { FaFacebookSquare, FaInstagram, FaPhone } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

export default class contact extends Component {
  render() {
    return (
      <div className="contact">
        <img className="contact-dog" src={doghome3} alt="doghome3"></img>
        <div className="contact-question"> Masz jakieś pytania ?</div>
        <div className="contact-container">
          <div className="contact-left">
            <img
              className="contact-logopodajlape1"
              src={logopodajlape1}
              alt="logopodajlape1"
            ></img>
            <div className="contact-left-name">Izabella Kozioł</div>
            <div className="icons-contact">
              <a>
                <FiMail size="50px" color="rgba(97, 122, 100 )" />
                <span className="icon-contact-text"> izakoziol95@02.pl</span>
              </a>
              <a>
                <FaPhone size="50px" color="red" />
                <span className="icon-contact-text"> (+48) 518 872 039</span>
              </a>
              <a
                className="icon-contact"
                href="https://www.facebook.com/izka.koziol"
                target="_blank"
              >
                <FaFacebookSquare size="50px" color="#3b5998" />
                <span className="icon-contact-text"> Facebook</span>
              </a>
              <a
                className="icon-contact"
                href="https://www.instagram.com/po.dajlape/"
                target="_blank"
              >
                <FaInstagram size="50px" color="rgba(195, 53, 132 )" />
                <span className="icon-contact-text"> Instagram</span>
              </a>
            </div>
          </div>
          <div className="contact-right">
            <Contactform></Contactform>
          </div>
        </div>
      </div>
    );
  }
}
