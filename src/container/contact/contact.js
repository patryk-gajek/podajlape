import React, { Component } from "react";
import "./contact.css";
import doghome3 from "../../images/doghome3.jpg";
import logopodajlape1 from "../../images/logopodajlape1.png";
import Contactform from "../../components/contactform/contactform";

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
            <ul className="contact-info">
              <li>Izabella Kozioł</li>
              <li>Telefon:</li>
              <li>Instagram:</li>
              <li>E-mail:</li>
            </ul>
          </div>
          <div className="contact-right">
            <Contactform></Contactform>
          </div>
        </div>
      </div>
    );
  }
}
