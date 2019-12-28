import "./home.css";
import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="introduction-title">
          Izabella Kozioł behawiorystka. Zapraszam do współpracy .
          W przeciwieństwie do rozpowszechnionych opinii, Lorem Ipsum nie jest tylko przypadkowym tekstem. Ma ono korzenie w klasycznej łacińskiej literaturze z 45 roku przed Chrystusem, czyli ponad 2000 lat temu! Richard McClintock, wykładowca łaciny na uniwersytecie Hampden-Sydney w Virginii, przyjrzał się uważniej jednemu z najbardziej niejasnych słów w Lorem Ipsum – consectetur – i po wielu poszukiwaniach odnalazł niezaprzeczalne źródło: Lorem Ipsum pochodzi z fragmentów (1.10.32 i 1.10.33) „de Finibus Bonorum et Malorum”, czyli „O granicy dobra i zła”, napisanej właśnie w 45 p.n.e. przez Cycerona. Jest to bardzo popularna w czasach renesansu rozprawa na temat etyki. Pierwszy wiersz Lorem Ipsum, „Lorem ipsum dolor sit amet...” pochodzi właśnie z sekcji 1.10.32.

Standardowy blok Lorem Ipsum, używany od XV wieku, dasdasdasahdhasdhasjdhsajdhasjdhajsdhjahdjashdjashdjahsdjashdjashdjashdjahdjahdsjhasdhaJest dostępnych wiele różnych wersji Lorem Ipsum, ale większość zmieniła się pod wpływem dodanego humoru czy przypadkowych słów, które nawet w najmniejszym stopniu nie przypominają istniejących. Jeśli masz zamiar użyć fragmentu Lorem Ipsum, lepiej mieć pewność, że nie ma niczego „dziwnego” w środku tekstu. Wszystkie Internetowe generatory Lorem Ipsum mają tendencje do kopiowania już istniejących bloków, co czyni nasz pierwszym prawdziwym generatorem w Internecie. Używamy zawierającego ponad 200 łacińskich słów słownika, w kontekście wielu znanych sentencji, by wygenerować tekst wyglądający odpowiednio. To wszystko czyni „nasz” Lorem Ipsum wolnym od powtórzeń, humorystycznych wstawek czy niecharakterystycznych słówsjdhasdhfaushfuashdfuashfuashfuashfuasfuashfuahsfuhasfjest odtworzony niżej dla zainteresowanych. Fragmenty 1.10.32 i 1.10.33 z „de Finibus Bonorum et Malorum” Cycerona, są odtworzone w dokładnej, oryginalnej formie, wraz z angielskimi tłumaczeniami H. Rackhama z 1914 roku.
        </div>
      <div className="home-content">
        <div className="left-content">
          <div className="introduction-photo-content"></div>
          <ul className="introduction-info-content">
            <li>Co zrobić dla naszego pupila ?</li>
            <li>UCZYMY PSA NOWYCH ZACHOWAŃ</li>
            <li>PRZERYWAMY ZACHOWANIA NIEPOŻĄDANE</li>
            <li>ZAPOBIEGAMY ZACHOWANIOM NIEPOŻĄDANYM</li>
            <li>FORMUŁUJEMY OCZEKIWANIA</li>
            <li>KOMUNIKUJMY SIĘ Z PSEM W SPOSÓB DLA NIEGO JASNY</li>
            <li>CZYTAMY MOWĘ CIAŁA PSA</li>
          </ul>
        </div>

        <div className="right-content">
          <div className="motto-up-content">
            Witam w moim psim świecie. Behawiorystka, trener i przyjaciel psów
            🐶 Zapraszam do współpracy.
          </div>
          <div className="photo-between-content"></div>
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
