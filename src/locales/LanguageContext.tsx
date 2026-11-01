import { createContext, useContext, useEffect, useState } from "react";
import { Language, TranslationKey, translations } from "./translations"

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKey; // Strongly typed translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const extractUrlLanguageParameter = () => {
  const queryString = window.location.search || window.location.hash.split('?')[1];
  const urlParams = new URLSearchParams(queryString || '');
  const urlLang = urlParams.get('lang');
  if (urlLang !== null && urlLang in translations)
    return urlLang as Language;
  return null;
};

const saveLanguageToLocalStorage = (lang : Language) => {
  localStorage.setItem('portfolio-lang', lang);
}

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  // Default to 'en'
  const [language, setLanguageState] = useState<Language>(() => {
    // Try to get language from URL
    let urlLanguage = extractUrlLanguageParameter()
    if (urlLanguage !== null) {
      saveLanguageToLocalStorage(urlLanguage)
    }

    // Fallback to saved or default
    const saved = localStorage.getItem('portfolio-lang');
    return (saved !== null && saved in translations) ? saved as Language : 'en';
  });

  const setLanguage = (lang:Language) => {
    saveLanguageToLocalStorage(lang);
    setLanguageState(lang);
  }

  const t = translations[language];

  return(
    <LanguageContext.Provider value={{language, setLanguage, t}}>
      {children}
    </LanguageContext.Provider>
  )
}

// Export
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};