import Image from "next/image";
import { ComponentPropsWithoutRef, memo } from "react";
import { keyof } from "ts-keyof";
import arrowBottom from "../../../../public/arrowBottom.svg";
import arrowRight from "../../../../public/arrowRight.svg";
import style from "./MenuButton.module.css";

interface MenuButton extends ComponentPropsWithoutRef<"button"> {
  arrow?: boolean;
  dropDownMenu?: Array<{ text: string; href: string }>;
}

export const MenuButton = memo<MenuButton>(
  ({ children, arrow = true, dropDownMenu = [], ...props }) => {
    return (
      <div className={style.wrapper}>
        <button className={style.menu_button} {...props}>
          {children}
          {arrow && (
            <Image
              src={arrowBottom}
              alt="arrowBottom"
              style={{ marginLeft: 4 }}
            />
          )}
        </button>
        {dropDownMenu.length > 0 && (
          <div className={style.drop_down_menu_wrapper}>
            <div className={style.drop_down_menu}>
              {dropDownMenu.map((item) => (
                <a href={item.href} key={item.text + item.href}>
                  {item.text}
                  <Image src={arrowRight} alt="arrow_right" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
);

MenuButton.displayName = keyof({ MenuButton });
