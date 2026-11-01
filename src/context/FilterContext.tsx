import { createContext, useContext, useState } from "react";

type FilterContextType = {
  activeTags: string[];
  isLocked: boolean;
  toggleTag: (tag:string) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({children}: { children: React.ReactNode }) => {
  // URL reading
  const [activeTags, setActiveTags] = useState<string[]>(getTagsFromUrl);
  const isLocked = getUrlParams().get('locked') === 'true';

  const toggleTag = (tag:string) => {
    if (isLocked) return;
    setActiveTags((prev) => 
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev,tag]
    );
  }

  return (
    <FilterContext.Provider value={{activeTags, isLocked, toggleTag}}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) throw new Error('useFilters must be used within a FilterProvider');
  return context;
};

const getTagsFromUrl = () => {
  const tagsParam = getUrlParams().get('tags');
  return tagsParam ? tagsParam.split(',') : [];
}

const getUrlParams = () => {
  const queryString = window.location.search || window.location.hash.split('?')[1]
  return new URLSearchParams(queryString || '');
}