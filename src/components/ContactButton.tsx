import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

export interface ContactButtonProps {
  url: string,
  Icon?: LucideIcon,
  svgUrl?: string
}

const Symbol = ({url,Icon,svgUrl} : ContactButtonProps) => {
 if (Icon !== undefined) {
  let SolidIcon = Icon as LucideIcon
  return (<SolidIcon className="text-white w-6 h-6"/>)
 }
 else if (svgUrl !== undefined) {
  return(
    <img
      src={svgUrl}
      alt={`A button with a logo, that sends the user to the link ${url}`}
      className="w-6 h-6 fill-white"
    />
  )
 }
 else return (
  <p>Error</p>
 )
}

export default function ContactButton({url,Icon, svgUrl} : ContactButtonProps) {
  return (
    <Link
      className="bg-gray-600 w-9 h-9 rounded-full flex items-center justify-center"
      target="_blank"
      rel="noopener noreferrer"
      to={url}
    >
      {Symbol({url,Icon,svgUrl})}
    </Link>
  )
}