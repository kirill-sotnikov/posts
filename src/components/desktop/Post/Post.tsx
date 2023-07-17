import Image from "next/image";
import { CSSProperties, memo } from "react";
import { keyof } from "ts-keyof";
import dot from "../../../../public/dot.svg";
import { PostType } from "../Content/Content";
import style from "./Post.module.css";

interface PostProps extends PostType {
  onClick?: () => void;
  style?: CSSProperties;
  imgHeight?: number;
  imgWidth?: number;
}

export const Post = memo<PostProps>(
  ({
    img,
    tags: tag,
    title,
    autor,
    date,
    views,
    text,
    onClick,
    imgHeight,
    imgWidth,
    style: innerStyle,
  }) => {
    return (
      <div className={style.post} style={innerStyle} onClick={onClick}>
        <div style={{ height: 230, position: "relative" }}>
          <Image
            src={img}
            alt="img"
            style={{ objectFit: "cover" }}
            layout="fill"
          />
        </div>
        <p className={style.tag}>{tag}</p>
        <p className={style.title}>{title}</p>
        <p className={style.info}>
          {autor} <Image src={dot} alt="dot" style={{ margin: "0 5px" }} />
          <span>{date}</span>
          <Image src={dot} alt="dot" style={{ margin: "0 5px" }} />
          <span>{views}</span>
        </p>
        <p className={style.description}>{text}</p>
      </div>
    );
  }
);

Post.displayName = keyof({ Post });
