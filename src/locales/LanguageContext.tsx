import { createContext, useContext, useState } from "react";
import { Language, TranslationKey, translations } from "./translations"

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKey; // Strongly typed translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  // Default to 'en'
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio-lang');
    return (saved !== null && ['en','pt','fr','es'].includes(saved)) ? saved as Language : 'en';
  });

  const setLanguage = (lang:Language) => {
    localStorage.setItem('portfolio-lang', lang);
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