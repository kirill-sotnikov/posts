import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import logo from "../../../../public/logo.svg";
import { Menu } from "../Menu/Menu";
import { Search } from "../Search/Search";
import style from "./Header.module.css";

export const Header = () => {
  const scrollPosition = useRef(0);
  const [isHide, setIsHide] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY - scrollPosition.current > 200) {
        scrollPosition.current = window.scrollY;
        setIsHide(true);
      }
      if (isHide && window.scrollY > scrollPosition.current) {
        scrollPosition.current = window.scrollY;
      }
      if (scrollPosition.current - window.scrollY > 200) {
        scrollPosition.current = window.scrollY;
        setIsHide(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHide]);

  return (
    <div
      className={style.header}
      style={
        isHide
          ? { transition: "0.4s", top: -140 }
          : { transition: "0.4s", top: 0 }
      }
    >
      <div className={style.logoWrapper}>
        <div className={style.logo}>
          <Image
            src={logo}
            alt="logo"
            style={{ paddingLeft: 23, flexGrow: 1 }}
          />
          <Search />
        </div>
      </div>
      <Menu />
    </div>
  );
};
