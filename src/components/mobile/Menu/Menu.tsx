import Image from "next/image";
import { FunctionComponent, useEffect, useState } from "react";
import crossMobileMenu from "../../../../public/crossMobileMenu.svg";
import logo from "../../../../public/logo.svg";
import { MenuButton } from "../MenuButton/MenuButton";
import style from "./Menu.module.css";

interface MenuProps {
  onClickCross: () => void;
}

export const Menu: FunctionComponent<MenuProps> = ({ onClickCross }) => {
  const [posY, setPosY] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setPosY(window.scrollY);
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className={style.background}
      style={{
        top: posY,
      }}
      onClick={(event) => {
        if (event.currentTarget === event.target) {
          onClickCross();
        }
      }}
    >
      <div className={style.wrapper}>
        <div className={style.header}>
          <Image src={logo} alt="logo" height={24} />
          <Image
            src={crossMobileMenu}
            alt="cross"
            height={18}
            onClick={onClickCross}
          />
        </div>
        <div className={style.menu}>
          <MenuButton
            dropDownMenu={[
              { text: "Demos Header", href: "#" },
              { text: "Demos Layout", href: "#" },
            ]}
          >
            Demos
          </MenuButton>
          <MenuButton
            dropDownMenu={[
              { text: "Post Header", href: "#" },
              { text: "Post Layout", href: "#" },
            ]}
          >
            Post
          </MenuButton>
          <MenuButton
            dropDownMenu={[
              { text: "Features Header", href: "#" },
              { text: "Features Layout", href: "#" },
            ]}
          >
            Features
          </MenuButton>
          <MenuButton
            dropDownMenu={[
              { text: "Categories Header", href: "#" },
              { text: "Categories Layout", href: "#" },
            ]}
          >
            Categories
          </MenuButton>
          <MenuButton
            dropDownMenu={[
              { text: "Shop Header", href: "#" },
              { text: "Shop Layout", href: "#" },
            ]}
          >
            Shop
          </MenuButton>
        </div>
      </div>
    </div>
  );
};
