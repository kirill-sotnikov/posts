import { MenuButton } from "../MenuButton/MenuButton";
import style from "./Menu.module.css";

export const Menu = () => {
  return (
    <div style={{ borderBottom: "1px solid #E9E9E9" }}>
      <div className={style.inner_wrapper}>
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
        <MenuButton arrow={false}>Buy Now</MenuButton>
      </div>
    </div>
  );
};
