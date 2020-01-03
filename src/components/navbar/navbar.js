import "./navbar.css";
import React, { Component } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import logopodajlape1 from "../../images/logopodajlape1.png";
import Language from '../Language/Language';
import { LanguageContext } from '../languages/config';

 function Navbar() {

  let { languageCode, labels } = React.useContext(LanguageContext);

  let match = useRouteMatch({
    path: '/',
    exact: true
  });
let navbarItems = [
  { link: '/aboutme', label: labels.aboutme[languageCode] },
  { link: '/gallery', label: labels.gallery[languageCode] },
  { link: '/offer', label: labels.offer[languageCode] },
  { link: '/contact', label: labels.contact[languageCode] },
];

return (
<nav className={match ? "navbar" : "navbar navbar-full"}>

    <ul>
          <li>
            <Link to="/">
              <img src={logopodajlape1} alt="logopodajlape"></img>
            </Link>
          </li>
 
          {navbarItems.map(item => {
    return (
      <NavbarItem label={item.label} to={item.link} activeOnlyWhenExact={false}/>
    )
          })}
          <li><Language /></li>
        </ul>
      </nav>
    )
  }

  function NavbarItem({ label, to, activeOnlyWhenExact }) {
  
    let match = useRouteMatch({
      path: to,
      exact: activeOnlyWhenExact
    }); 
    return (
      <li className={match ? "active" : ""}>
        <Link to={to}>{label}</Link>
      </li>
    );
  
  }
  
  export default Navbar;