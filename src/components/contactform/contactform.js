import React, { Component } from "react";
import "./contactform.css";
import ReCAPTCHA from "react-google-recaptcha";

const recaptchaRef = React.createRef();
export default class Contactform extends Component {
  onSubmit = () => {
    const recaptchaValue = recaptchaRef.current.getValue();
    this.props.onSubmit(recaptchaValue);
  };

  render() {
    return (
      <div className="contactform">
        <div className="contactform-left">
          <input type="name" placeholder="Imię i Nazwisko"></input>
          <input type="tel" name="tel" placeholder="Telefon"></input>
          <input type="email" name="email" placeholder="Email"></input>
          <form onSubmit={this.onSubmit}>
            <ReCAPTCHA ref={recaptchaRef} sitekey="Your client site key" />
          </form>
        </div>
        <div className="contactform-right">
          <textarea rows="9" cols="50" placeholder="Treść wiadomości"></textarea>
          <input
            type="submit"
            value="Wyślij"
          ></input>
        </div>
      </div>
    );
  }
}
