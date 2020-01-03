import { languageOptions } from '../languages/config';
import { LanguageContext } from '../languages/config';
import React from 'react'

import './Language.css';

export default function LanguageSelector() {

  const languageContext = React.useContext(LanguageContext);

  const handleLanguageChange = (event) => {
    languageContext.setLanguage(event.target.dataset.id);//pass language code
  };

  return (
    <div className="language-container">
      {languageOptions.map(item => (
        <div onClick={handleLanguageChange} 
          key={item.id} 
          data-id={item.id} 
          className={'language-item ' + (languageContext.languageCode === item.id ? 'current-language' : '')}>
          {item.text}
        </div>
      ))}
    </div>
  );
};
