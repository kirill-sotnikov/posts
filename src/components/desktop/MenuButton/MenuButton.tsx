import Image from "next/image";
import { ReactNode, memo } from "react";
import { keyof } from "ts-keyof";
import arrowRight from "../../../../public/arrowRight.svg";
import style from "./MenuButton.module.css";
interface MenuButton {
  children: ReactNode;
  dropdownMenu?: Array<{ text: string; href: string }>;
}

export const MenuButton = memo<MenuButton>(({ children, dropdownMenu }) => {
  return (
    <li className={style.menu_button}>
      {children}
      {dropdownMenu && (
        <ul className={style.dropdown}>
          {dropdownMenu.map((item) => (
            <li key={item.text + item.href}>
              <a href={item.href}>
                {item.text}{" "}
                <Image src={arrowRight} alt="arrow" height={8} width={5} />
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
});

MenuButton.displayName = keyof({ MenuButton });
