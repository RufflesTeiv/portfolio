import React from "react";
import { useFilter } from "../context/FilterContext";

interface TaggedContentProps {
  className?: string,
  tags: string[];
  children: React.ReactNode;
}

export default function TaggedContent({className = "", tags,children} : TaggedContentProps) {
  const {activeTags} = useFilter();

  const showContent = activeTags.length === 0 || tags.some((t) => activeTags.includes(t));
  
  return (
    <div
      className={`
        grid
        transition-all duration-500 ease-in-out
        ${showContent ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}  
      `}
    >
      <div className={`overflow-hidden ${className}`}>
        {children}
      </div>
    </div>
  )
}