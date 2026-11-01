import { FileQuestion, LucideIcon } from "lucide-react";
import { useFilter } from "../context/FilterContext";
import { useLanguage } from "../locales/LanguageContext";

export default function FilterButtons() {
  const { isLocked } = useFilter();
  const { t } = useLanguage();

  const filterButtons : FilterButtonProps[] = [
    {Icon: FileQuestion, text: "Teste", tag: "teste"},
    {Icon: FileQuestion, text: "Teste 2", tag: "teste2"}
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
  tag : string
}

export function FilterButton({Icon, text, tag} : FilterButtonProps) {
  const {activeTags, toggleTag} = useFilter();

  const isActive = activeTags.includes(tag)

  return(
    <button
      className={`bg-gray-400 p-3 rounded-full flex items-center justify-center gap-2 ${isActive ? "border-white border-2" : ""}`}
      onClick={() => toggleTag(tag)}
    >
      <Icon className="text-white w-5 h-5"/>
      <p className={`text-white ${isActive ? "" : "hidden"}`}>
        {text}
      </p>
    </button>
  )
}