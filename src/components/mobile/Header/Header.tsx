import Image from "next/image";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import logo from "../../../../public/logo.svg";
import mobileBurgerMenu from "../../../../public/mobileBurgerMenu.svg";
import search from "../../../../public/search.svg";
import { Search } from "../Search/Search";
import style from "./Header.module.css";

interface HeaderProps {
  onClickMenu: () => void;
}

export const Header: FunctionComponent<HeaderProps> = ({ onClickMenu }) => {
  const scrollPosition = useRef(0);
  const [isShowHeader, setIsShowHeader] = useState(false);
  const [isShowSearch, setIsShowSearch] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY - scrollPosition.current > 200) {
        scrollPosition.current = window.scrollY;
        setIsShowHeader(true);
      }
      if (isShowHeader && window.scrollY > scrollPosition.current) {
        scrollPosition.current = window.scrollY;
      }
      if (scrollPosition.current - window.scrollY > 200) {
        scrollPosition.current = window.scrollY;
        setIsShowHeader(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isShowHeader]);

  return (
    <div
      className={style.header}
      style={
        isShowHeader
          ? { transition: "0.4s", top: -140 }
          : { transition: "0.4s", top: 0 }
      }
    >
      <Image
        src={mobileBurgerMenu}
        alt="menu"
        height={17}
        width={25}
        onClick={onClickMenu}
      />
      <Image src={logo} alt="logo" height={24} />
      <Image
        src={search}
        alt="search"
        height={16}
        width={16}
        onClick={() => setIsShowSearch(true)}
      />
      {isShowSearch && <Search onClickCross={() => setIsShowSearch(false)} />}
    </div>
  );
};
