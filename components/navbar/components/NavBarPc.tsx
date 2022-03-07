import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { LOGO } from "../../../public/assets/global-image";

const NavBarPc = () => {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center py-2 px-8">
      <div>
        <div className="w-full">
          <Image
            src={LOGO}
            alt="Picture of the author"
            width={50}
            height={50}
          />
        </div>
      </div>
      <ul className="flex justify-center items-center gap-x-8 ">
        <li
          className={router.pathname === "/" ? "header-menu-item-active" : ""}
        >
          <Link href="/" passHref>
            <a className="header-menu-link">trang chủ</a>
          </Link>
        </li>
        <li
          className={
            router.pathname === "/ve-chung-toi" ? "header-menu-item-active" : ""
          }
        >
          <Link href="/ve-chung-toi">
            <a className="header-menu-link">về chúng tôi</a>
          </Link>
        </li>
        <li
          className={
            router.pathname.split("/")[1] === "san-pham"
              ? "header-menu-item-active"
              : ""
          }
        >
          <Link href="/san-pham/free-base">
            <a className="header-menu-link">sản phẩm</a>
          </Link>
        </li>
        <li
          className={
            router.pathname === "/san-pham-khuyen-mai"
              ? "header-menu-item-active"
              : ""
          }
        >
          <Link href="/san-pham-khuyen-mai">
            <a className="header-menu-link">sản phẩm khuyến mãi</a>
          </Link>
        </li>
        <li
          className={
            router.pathname === "/tin-tuc" ? "header-menu-item-active" : ""
          }
        >
          <Link href="/tin-tuc">
            <a className="header-menu-link">tin tức</a>
          </Link>
        </li>
        <li
          className={
            router.pathname === "/lien-he" ? "header-menu-item-active" : ""
          }
        >
          <Link href="/lien-he">
            <a className="header-menu-link">liên hệ</a>
          </Link>
        </li>
      </ul>

      <div className="relative">
        <input
          type="text"
          className="h-7 w-[280px] rounded-full outline-none pl-[38px] py-5 pr-4 font-medium text-sm text-gray-500 border border-solid border-gray-400"
          placeholder="Search..."
        />
        <i className="absolute left-3 top-0 bottom-0 my-auto flex items-center">
          <BsSearch className="text-gray-400" />
        </i>
      </div>
    </div>
  );
};

export default NavBarPc;
