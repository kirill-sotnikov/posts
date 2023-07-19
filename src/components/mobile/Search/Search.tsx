import Image from "next/image";
import { FunctionComponent } from "react";
import crossMobileMenu from "../../../../public/crossMobileMenu.svg";
import { useSearch } from "../../../searchContext";
import style from "./Search.module.css";

interface SearchProps {
  onClickCross: () => void;
}

export const Search: FunctionComponent<SearchProps> = ({ onClickCross }) => {
  const { setSearch } = useSearch();

  return (
    <div className={style.wrapper}>
      <input
        autoFocus
        placeholder="search"
        type="text"
        onChange={(event) =>
          setSearch(event.currentTarget.value.toLocaleLowerCase())
        }
      />
      <Image
        src={crossMobileMenu}
        alt="cross"
        onClick={() => {
          onClickCross();
          setSearch("");
        }}
      />
    </div>
  );
};
