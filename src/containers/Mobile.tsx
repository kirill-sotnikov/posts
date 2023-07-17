import { useState } from "react";
import { Content, Header, Menu } from "../components/mobile";

export const Mobile = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
    <div>
      <Header
        onClickMenu={() => {
          setIsShowMenu(true);
        }}
      />
      {isShowMenu && <Menu onClickCross={() => setIsShowMenu(false)} />}
      <Content />
    </div>
  );
};
