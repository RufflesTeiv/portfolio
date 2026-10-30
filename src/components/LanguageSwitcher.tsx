import { useLanguage } from "../locales/LanguageContext";
import { Language } from "../locales/translations";

function LanguageSwitcher() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <select
      value={language}
      onChange={e => setLanguage(e.target.value as Language)}
    >
      <option value="en">🇺🇸 EN</option>
      <option value="pt">🇧🇷 PT</option>
      <option value="es">🇪🇸 ES</option>
      <option value="fr">🇫🇷 FR</option>
    </select>
  )
}

export default LanguageSwitcher;