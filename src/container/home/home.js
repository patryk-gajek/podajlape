import "./home.css";
import React, { Component } from "react";
import dog from "../../images/dog.png";
import dog2 from "../../images/dog2.png";
import PhotosSlider from "../../components/photosSlider/PhotosSlider";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <PhotosSlider></PhotosSlider>
        <div className="introduction-title">
          Izabella Kozioł behawiorystka. Zapraszam do współpracy.
        </div>
        <div className="home-content">
          <img className="dog" src={dog} alt="dog"></img>

          <div className="right-content">
            <div className="motto-content">
              Witam w moim psim świecie. Behawiorystka, trener i przyjaciel psów
              🐶
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

            <div className="motto-content">
              Bycie mądrym i odpowiedzialnym opiekunem zwierzęcia. To moja pasja
              i misja.
            </div>
          </div>
        </div>
        <div className="home-footer"></div>
      </div>
    );
  }
}
