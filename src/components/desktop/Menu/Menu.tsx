import Image from "next/image";
import arrowBottom from "../../../../public/arrowBottom.svg";
import { MenuButton } from "../MenuButton/MenuButton";
import style from "./Menu.module.css";

const Arrow = () => (
  <Image src={arrowBottom} alt="arrow" style={{ marginLeft: 4 }} />
);

export const Menu = () => {
  return (
    <div style={{ borderBottom: "1px solid #E9E9E9" }}>
      <nav>
        <ul className={style.dropdown}>
          <MenuButton
            dropdownMenu={[
              { text: "Demos Header", href: "#" },
              { text: "Demos Layout", href: "#" },
            ]}
          >
            <a href="#">
              Demos <Arrow />
            </a>
          </MenuButton>
          <MenuButton
            dropdownMenu={[
              { text: "Post Header", href: "#" },
              { text: "Post Layout", href: "#" },
            ]}
          >
            <a href="#">
              Post <Arrow />
            </a>
          </MenuButton>
          <MenuButton
            dropdownMenu={[
              { text: "Features Header", href: "#" },
              { text: "Features Layout", href: "#" },
            ]}
          >
            <a href="#">
              Features <Arrow />
            </a>
          </MenuButton>
          <MenuButton
            dropdownMenu={[
              { text: "Categories Header", href: "#" },
              { text: "Categories Layout", href: "#" },
            ]}
          >
            <a href="#">
              Categories <Arrow />
            </a>
          </MenuButton>
          <MenuButton
            dropdownMenu={[
              { text: "Shop Header", href: "#" },
              { text: "Shop Layout", href: "#" },
            ]}
          >
            <a href="#">
              Shop <Arrow />
            </a>
          </MenuButton>
          <MenuButton>
            <a href="#">Buy Now</a>
          </MenuButton>
        </ul>
      </nav>
    </div>
  );
};
