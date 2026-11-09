import { FileQuestion, LucideIcon } from "lucide-react";
import { useFilter } from "../context/FilterContext";
import { useLanguage } from "../locales/LanguageContext";

export default function FilterButtons() {
  const { isLocked } = useFilter();
  const { t } = useLanguage();

  const filterButtons : FilterButtonProps[] = [
    {Icon: FileQuestion, text: "Teste", tag: "teste", textColorClass: "text-text-beige", bgHoverColorClass: "hover:bg-[#fff]"},
    {Icon: FileQuestion, text: "Teste 2", tag: "teste2", textColorClass: "text-pink-highlight", bgHoverColorClass: "hover:bg-[#fff]"}
  ]

  return isLocked ? (<></>) : (
    <div className="flex gap-5">
      {
        filterButtons.map(props => 
          <FilterButton {...props} key={props.tag}/>
        )
      }
    </div>
  )
}

interface FilterButtonProps {
  Icon : LucideIcon,
  text : string,
  tag : string,
  bgHoverColorClass : string,
  textColorClass: string
}

export function FilterButton({Icon, text, tag, bgHoverColorClass, textColorClass} : FilterButtonProps) {
  const {activeTags, toggleTag} = useFilter();

  const isActive = activeTags.includes(tag)
  const style = () => {
    if (!isActive) return {}
    return {
      backgroundColor: bgHoverColorClass.replace("hover:bg-[","").replace("]","")
    }
  }

  return(
    <button
      className={`
        bg-button-gray p-3 rounded-full inline-flex items-center justify-center border-2
        transition-all duration-300 ease-in-out
        ${bgHoverColorClass}
        ${textColorClass}
        ${isActive ? "border-current" : "border-transparent"}
      `}
      style={style()}
      onClick={() => toggleTag(tag)}
    >
      <Icon className="w-5 h-5 shrink-0"/>
      <div className={`
        grid
        transition-all duration-300 ease-in-out
        ${isActive ? "grid-cols-[1fr] opacity-100 ml-2" : "grid-cols-[0fr] opacity-0 ml-0"}
      `}>
        {/* Truque de overflow-hidden pra funfar */}
        <div className="overflow-hidden">
          <p className="whitespace-nowrap">{text}</p>
        </div>
      </div>
    </button>
  )
}