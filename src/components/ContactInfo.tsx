import { BookOpenText, Mail } from "lucide-react"
import ContactButton from "./ContactButton"
import { useLanguage } from "../locales/LanguageContext"

function ContactInfo() {
  const { t } = useLanguage();

  return (
    <div className="flex gap-3">
      <ContactButton url="mailto:teivfik@gmail.com" Icon={Mail} />
      <ContactButton url={`https://wa.me/5541999199614?text=${t.whatsAppMessage}`} svgUrl={`${process.env.PUBLIC_URL}/svgs/whatsapp.svg`}/>
      <ContactButton url="https://www.linkedin.com/in/rafa-teivfik/" svgUrl={`${process.env.PUBLIC_URL}/svgs/linkedin.svg`}/>
      <ContactButton url="https://cadentiaruffles.itch.io/" svgUrl={`${process.env.PUBLIC_URL}/svgs/itch.svg`}/>
      <ContactButton url="https://github.com/RufflesTeiv" svgUrl={`${process.env.PUBLIC_URL}/svgs/github.svg`}/>
      <ContactButton url="https://rufflesteiv.notion.site/Ruffles-Gamedev-Wiki-00bb7859aaf6430fb854f426e0a64a47?pvs=4" Icon={BookOpenText}/>
    </div>
  )
}

export default ContactInfo