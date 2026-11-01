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

  return showContent ? (<div className={className}>{children}</div>) : (<></>)
}