import Image from "next/image";
import { ComponentPropsWithoutRef, FunctionComponent, useState } from "react";
import cross from "../../../../public/cross.svg";
import search from "../../../../public/search.svg";
import { useSearch } from "../../../searchContext";
import style from "./Search.module.css";

export const Search: FunctionComponent<ComponentPropsWithoutRef<"input">> = ({
  onChange,
  ...props
}) => {
  const [isActive, setIsActive] = useState(false);
  const { setSearch } = useSearch();

  return (
    <span style={{ position: "relative" }}>
      {!isActive ? (
        <Image
          src={search}
          alt="search"
          style={{ cursor: "pointer" }}
          onClick={() => setIsActive(true)}
        />
      ) : (
        <Image
          src={cross}
          alt="cross"
          style={{ cursor: "pointer" }}
          onClick={() => {
            setIsActive(false);
            setSearch("");
          }}
        />
      )}

      {isActive && (
        <input
          autoFocus
          onChange={(event) => {
            setSearch(event.currentTarget.value.toLocaleLowerCase());
            onChange && onChange(event);
          }}
          className={style.search}
          {...props}
        />
      )}
    </span>
  );
};
