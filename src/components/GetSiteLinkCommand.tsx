import { useEffect } from "react"
import { useLanguage } from "../locales/LanguageContext"
import { useFilter } from "../context/FilterContext";

export default function GetSiteLinkCommand() {
  const { language } = useLanguage();
  const { activeTags } = useFilter();
  const setSiteLinkCommand = (lock : boolean = true) => {
    (window as any).getSiteLink = () => {
      // Base
      const baseUrl = window.location.origin + window.location.pathname;
      const currentHash = window.location.hash.split('?')[0] || '#/'
      // Params
      const params = new URLSearchParams();
      params.set('lang',language);
      if (activeTags.length > 0) {
        params.set('tags', activeTags.join(','));
      }
      if (lock) {
        params.set('locked', 'true');
      }
      // Generate link
      const fullLink = `${baseUrl}${currentHash}?${params.toString()}`;
      console.log(fullLink);
      navigator.clipboard.writeText(fullLink).catch(() => {});
      return fullLink;
    };

    return () => {
      delete (window as any).getSiteLink;
    }
  }

  useEffect(setSiteLinkCommand, [language,activeTags])

  return (<></>)
}
