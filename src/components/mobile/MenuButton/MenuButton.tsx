import Image from "next/image";
import { ReactNode, memo, useState } from "react";
import { keyof } from "ts-keyof";
import arrowBottom from "../../../../public/arrowBottom.svg";
import style from "./MenuButton.module.css";

interface MenuButtonProps {
  children: ReactNode;
  dropDownMenu?: Array<{ text: string; href: string }>;
}

export const MenuButton = memo<MenuButtonProps>(
  ({ dropDownMenu, children }) => {
    const [isActive, setIsActive] = useState(false);

    return (
      <div>
        <p
          className={style.title}
          onClick={() => setIsActive((state) => !state)}
        >
          {children}
          <Image
            src={arrowBottom}
            alt="arrow bottom"
            style={{ marginLeft: 4 }}
          />
        </p>
        {isActive &&
          dropDownMenu &&
          dropDownMenu.map((item) => (
            <a
              href={item.href}
              className={style.submenu}
              key={item.href + item.text}
            >
              {item.text}
            </a>
          ))}
      </div>
    );
  }
);

MenuButton.displayName = keyof({ MenuButton });
