import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('EN');
  
  const toggleLang = () => {
    const langs = ['EN', 'HI', 'KN', 'TA', 'TU'];
    setLang(langs[(langs.indexOf(lang) + 1) % langs.length]);
  };

  const setSpecificLang = (l) => setLang(l);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, setSpecificLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
