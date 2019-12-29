import "./home.css";
import React, { Component } from 'react';
import dog from "../../images/dog.png";
import dog2 from "../../images/dog2.png";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="introduction-title">
          Izabella Kozioł behawiorystka. Zapraszam do współpracy.
        </div>
      <div className="home-content">
        <div className="left-content">
          <div className="introduction-photo-content"><img className="dog"src={dog} alt="dog"></img></div>
          <ul className="introduction-info-content">
            <li>Co zrobić dla naszego pupila ?</li>
            <li>UCZYMY PSA NOWYCH ZACHOWAŃ</li>
            <li>PRZERYWAMY ZACHOWANIA NIEPOŻĄDANE</li>
            <li>ZAPOBIEGAMY ZACHOWANIOM NIEPOŻĄDANYM</li>
            <li>FORMUŁUJEMY OCZEKIWANIA</li>
            <li>KOMUNIKUJEMY SIĘ Z PSEM W SPOSÓB DLA NIEGO JASNY</li>
            <li>CZYTAMY MOWĘ CIAŁA PSA</li>
          </ul>
        </div>

        <div className="right-content">
          <div className="motto-up-content">
            Witam w moim psim świecie. Behawiorystka, trener i przyjaciel psów
            🐶 Zapraszam do współpracy.
          </div>
          <div className="photo-between-content"><img className="dog2"src={dog2} alt="dog2"></img></div>
          <div className="motto-down-content">
            Bycie mądrym i odpowiedzialnym opiekunem zwierzęcia.To moja pasja i
            misja.
          </div>
        </div>
      </div>
      <div className="home-footer"></div>
    </div>
    )
  }
}
