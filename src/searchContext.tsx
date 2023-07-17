import {
  FunctionComponent,
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

interface SearchContextType {
  search: string;
  setSearch: (value: string) => void;
}

const searchContext = createContext<SearchContextType>({
  search: "",
  setSearch: () => {},
});

export const SearchContextProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [search, setSearchInner] = useState<SearchContextType["search"]>("");

  const setSearch: SearchContextType["setSearch"] = useCallback((value) => {
    setSearchInner(value);
  }, []);

  return (
    <searchContext.Provider value={{ search, setSearch }}>
      {children}
    </searchContext.Provider>
  );
};

export const useSearch = () => useContext(searchContext);
