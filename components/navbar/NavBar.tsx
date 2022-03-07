import React, { memo, useEffect, useRef, useState } from "react";
import NavBarPc from "./components/NavBarPc";
import { useMediaQuery } from "react-responsive";
import NavBarMobile from "./components/NavBarMobile";

interface PropsType {
  scrollNavBar: string;
}

const NavBar = ({ scrollNavBar }: PropsType) => {
  const [hideHeader, setHideHeader] = useState("bg-none");

  const prevScroll = useRef<number>(0);
  const isMobile = useMediaQuery({ maxWidth: "1200px" });

  useEffect(() => {
    const handleScroll = () => {
      if (prevScroll.current === 0 || window.scrollY === 0) {
        setHideHeader("block bg-none ");
      } else if (prevScroll.current < window.scrollY) {
        setHideHeader("animate-hideHeader");
      } else {
        setHideHeader(
          "block animate-showHeader bg-white shadow-md shadow-gray-400"
        );
      }
      prevScroll.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        scrollNavBar === "scroll"
          ? hideHeader
          : "block bg-white shadow-md shadow-gray-400"
      } w-full text-black fixed top-0 z-20`}
    >
      {isMobile ? <NavBarMobile /> : <NavBarPc />}
    </header>
  );
};

export default memo(NavBar);
