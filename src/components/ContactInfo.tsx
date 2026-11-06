import { BookOpenText, Mail } from "lucide-react"
import ContactButton from "./ContactButton"
import { useLanguage } from "../locales/LanguageContext"
import { ReactComponent as GithubIcon } from "../svgs/github.svg";
import { ReactComponent as ItchIcon } from "../svgs/itch.svg";
import { ReactComponent as LinkedInIcon } from "../svgs/linkedin.svg";
import { ReactComponent as WhatsAppIcon } from "../svgs/whatsapp.svg";

function ContactInfo() {
  const { t } = useLanguage();

  return (
    <div className="flex gap-3">
      <ContactButton url="mailto:teivfik@gmail.com" IconLucide={Mail} />
      <ContactButton url={`https://wa.me/5541999199614?text=${t.whatsAppMessage}`} IconComponent={GithubIcon}/>
      <ContactButton url="https://www.linkedin.com/in/rafa-teivfik/" IconComponent={ItchIcon}/>
      <ContactButton url="https://cadentiaruffles.itch.io/" IconComponent={LinkedInIcon}/>
      <ContactButton url="https://github.com/RufflesTeiv" IconComponent={WhatsAppIcon}/>
      <ContactButton url="https://rufflesteiv.notion.site/Ruffles-Gamedev-Wiki-00bb7859aaf6430fb854f426e0a64a47?pvs=4" IconLucide={BookOpenText}/>
    </div>
  )
}

export default ContactInfo