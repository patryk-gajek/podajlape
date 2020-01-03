import "./home.css";
import React, { Component } from "react";
import dog from "../../images/dog.png";
import dog2 from "../../images/dog2.png";
import doghome5 from "../../images/doghome5.jpeg";
import PhotosSlider from "../../components/photosSlider/PhotosSlider";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <PhotosSlider></PhotosSlider>

        <div className="home-content">
          <div className="home-photo">
            <img src={dog2} alt="dog"></img>
          </div>
          <div className="introduction-title">
            Izabella Kozioł behawiorystka. <br></br> Zapraszam do współpracy.
            <div className="home-title-text">
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit..." "Nie ma nikogo, kto lubiłby ból
              dla samego bólu, szukał go tylko po to, by go poczuć, po prostu
              dlatego, że to ból..."
            </div>
            <Link to="/offer"><button>Oferta</button></Link>
            <div className="home-content-socialmedia">
              <a
                className="icon-home"
                href="https://www.facebook.com/izka.koziol"
                target="_blank"
              >
                <FaFacebookSquare size="70" color="#3b5998"/>
                <span className="home-icon-text"> Facebook</span>
              </a>
              <a
                className="icon-home"
                href="https://www.instagram.com/po.dajlape/"
                target="_blank"
              >
                <FaInstagram size="70" color="rgba(195, 53, 132 )" />
                <span className="home-icon-text"> Instagram</span>
              </a>
              <Link className="icon-home" to="/contact">
            <MdContactMail size="70" color="rgba(97, 122, 100, 0.8)" />{" "}
            <span className="home-icon-text"> Kontakt</span>
          </Link>
            </div>
          </div>
        </div>

        <div className="motto-content-up">
          Witam w moim psim świecie. Behawiorystka, trener i przyjaciel psów 🐶
        </div>
        <div className="home-down-content">
          <div className="home-down-content-photo">
            <img src={dog2} alt="dog2"></img>
          </div>
          <div className="home-down-content-photo2">
            <img src={doghome5} alt="doghome5"></img>
          </div>
          <ul className="introduction-info-content">
            <li>Co zrobimy dla naszego pupila ?</li>
            <li>Nauczymy psa nowych zachowań</li>
            <li>Przerywamy zachowania niepożądane</li>
            <li>Zapobiegamy zachowaniom niepożądanym</li>
            <li>Formułujemy oczekiwania</li>
            <li>Komunikujem się z psem w sposób dla niego jasny</li>
            <li>Czytamy mowę ciała psa</li>
          </ul>
        </div>
        <div className="motto-content">
          Bycie mądrym i odpowiedzialnym opiekunem zwierzęcia. To moja pasja i
          misja.
        </div>
        <div className="home-footer"></div>
      </div>
    );
  }
}
