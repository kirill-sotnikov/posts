import Image from "next/image";
import { FunctionComponent, useEffect, useState } from "react";
import crossMobileMenu from "../../../../public/crossMobileMenu.svg";
import dot from "../../../../public/dot.svg";
import { PostType } from "../../desktop/Content/Content";
import style from "./PopUp.module.css";

interface PopUpProps extends PostType {
  onClickOutside: () => void;
}

export const PopUp: FunctionComponent<PopUpProps> = ({
  img_2x,
  tags,
  title,
  autor,
  date,
  views,
  text,
  onClickOutside,
}) => {
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
      className={style.wrapper}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClickOutside();
        }
      }}
      style={{ top: posY }}
    >
      <div className={style.popUp}>
        <img src={img_2x} alt="img" style={{ width: "100%" }} />
        <p className={style.tag}>{tags}</p>
        <p className={style.title}>{title}</p>
        <p className={style.info}>
          {autor} <Image src={dot} alt="dot" style={{ margin: "0 5px" }} />
          <span>{date}</span>
          <Image src={dot} alt="dot" style={{ margin: "0 5px" }} />
          <span>{views}</span>
        </p>
        <p className={style.description}>{text}</p>
        <div className={style.cross} onClick={onClickOutside}>
          <Image src={crossMobileMenu} alt="cross" />
        </div>
      </div>
    </div>
  );
};
