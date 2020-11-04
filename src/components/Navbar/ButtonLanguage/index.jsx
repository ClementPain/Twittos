import React, { useContext } from 'react';
import frFlag from '../../../assets/images/flags/fr.png';
import enFlag from '../../../assets/images/flags/en.png';

import './index.scss';

import CurrentLanguageContext from '../../../assets/translation';

const ButtonLanguage = ({ languages }) => {
  const flags = { fr: frFlag, en: enFlag };

  const currentLanguage = useContext(CurrentLanguageContext);

  const handleLanguages = (languageChosen) => {
    currentLanguage.changeLanguage(languageChosen);
    localStorage.setItem('language', languageChosen);    
  };

  return (
  <ul className="navbar-nav">
    { languages.map(langCode => (
      (langCode === currentLanguage.language) ? null : (
        <li className="nav-item mr-4" key={ langCode }>
            <img
            className="nav-link flags-img"
            src={flags[langCode]}
            onClick={() => handleLanguages(langCode)}
            alt={langCode}
            />
        </li>
      )))}
  </ul>
  );
};

export default ButtonLanguage;
