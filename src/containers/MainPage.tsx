import { useEffect, useState } from "react";
import { Desktop } from "./Desktop";
import { Mobile } from "./Mobile";

export const MainPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 700) {
      setIsMobile(true);
    }
  }, []);

  if (isMobile) {
    return <Mobile />;
  }

  return <Desktop />;
};
