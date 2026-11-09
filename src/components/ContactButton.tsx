import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

export interface ContactButtonProps {
  url: string,
  IconLucide?: LucideIcon,
  IconComponent?: React.FC<React.SVGProps<SVGSVGElement>>
}

const Symbol = ({url,IconLucide,IconComponent} : ContactButtonProps) => {
 if (IconLucide !== undefined || IconComponent !== undefined) {
  let SolidIcon = IconLucide !== undefined ? IconLucide as LucideIcon : IconComponent as React.FC<React.SVGProps<SVGSVGElement>>
  return (<SolidIcon className="text-text-beige w-6 h-6"/>)
 }
 else return (
  <p>Error</p>
 )
}

export default function ContactButton({url,IconLucide,IconComponent} : ContactButtonProps) {
  return (
    <Link
      className="
        bg-button-gray w-11 h-11 rounded-full flex items-center justify-center
        transition-all duration-300 ease-in-out
        hover:bg-pink-highlight hover:scale-110 hover:-rotate-12
      "
      target="_blank"
      rel="noopener noreferrer"
      to={url}
    >
      {Symbol({url,IconLucide,IconComponent})}
    </Link>
  )
}