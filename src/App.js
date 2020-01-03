import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LanguageContext } from './components/languages/config';
import { dictionaryList } from './components/languages/config';

import "./App.css";

import Home from "./container/home/home";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Contact from "./container/contact/contact";
import Gallery from "./container/Gallery/gallery";
import Offer from "./container/Offer/offer";

function App() {

  const languageContext = React.useContext(LanguageContext);
  const [languageCode, setLanguageCode] = React.useState(languageContext.languageCode);
  const [labels] = React.useState(languageContext.labels);

  const provider = {
    languageCode,
    labels,
    setLanguage: (codeId) => {
      setLanguageCode(codeId); // it will update the language in state
    }
  };
  return (
    <div className="App">
      <LanguageContext.Provider value={provider}>

      <Router>
        <Navbar></Navbar>
        
        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route path="/aboutme">O mnie</Route>
          <Route path="/gallery"><Gallery /></Route>
          <Route path="/contact"><Contact /></Route>
          <Route path="/offer"><Offer /></Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
