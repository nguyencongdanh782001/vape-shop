import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { LOGO } from "../../../public/assets/global-image";
import { HiMenu } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { MdKeyboardArrowRight } from "react-icons/md";

interface OpenType {
  open: boolean;
  first: boolean;
}
const NavBarMobile = () => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState<OpenType>({
    open: false,
    first: true,
  });

  const [openProduct, setOpenProduct] = useState({
    open: false,
    first: true,
  });

  const handleProduct = () => {
    setOpenProduct({ first: false, open: !openProduct.open });
  };

  return (
    <div className="flex justify-between items-center py-2 px-3 sm:px-4">
      <div className="flex justify-center items-center gap-x-3">
        <div className="">
          <Image
            src={LOGO}
            alt="Picture of the author"
            width={30}
            height={30}
          />
        </div>
      </div>
      <div className="relative">
        <input
          type="text"
          className="h-7 w-[210px] sm:w-[230px] rounded-full outline-none pl-[38px] py-4 pr-4 font-medium text-sm text-gray-500 border border-solid border-gray-400"
          placeholder="Search..."
        />
        <i className="absolute left-3 top-0 bottom-0 my-auto flex items-center">
          <BsSearch className="text-gray-400" />
        </i>
      </div>
      <div>
        <i
          className="flex items-center text-2xl cursor-pointer"
          onClick={() =>
            setOpenMenu({
              open: true,
              first: false,
            })
          }
        >
          <HiMenu />
        </i>
      </div>

      <div
        className={`${
          openMenu.first === false
            ? openMenu.open === true
              ? "animate-showMenuMobile"
              : "animate-hideMenuMobile"
            : "hidden"
        } w-full h-screen fixed left-0 top-0 flex flex-col bg-white`}
      >
        <div className="flex justify-end p-4">
          <i
            className="flex items-center text-2xl cursor-pointer"
            onClick={() => setOpenMenu({ open: false, first: false })}
          >
            <GrClose />
          </i>
        </div>
        <div className="px-10">
          <ul className="flex-col justify-center items-center">
            <li
              className={`${
                router.pathname === "/" ? "header-mobile-menu-item-active" : ""
              } header-mobile-menu-item`}
            >
              <Link href="/" passHref>
                <a className="header-mobile-menu-link">trang chủ</a>
              </Link>
            </li>
            <li
              className={`${
                router.pathname === "/ve-chung-toi"
                  ? "header-mobile-menu-item-active"
                  : ""
              } header-mobile-menu-item`}
            >
              <Link href="/ve-chung-toi">
                <a className="header-mobile-menu-link">về chúng tôi</a>
              </Link>
            </li>
            <li className={`h-full transition-all duration-300 ease-linear`}>
              <div
                className="flex justify-between items-center px-3 h-[45px]"
                onClick={handleProduct}
              >
                <p className={`font-bold text-[16px] text-gray-500 uppercase`}>
                  sản phẩm
                </p>
                <i>
                  <MdKeyboardArrowRight
                    className={`font-bold text-gray-500 text-xl ${
                      openProduct.first === false
                        ? openProduct.open
                          ? "rotate-90"
                          : ""
                        : ""
                    }  transition-all duration-300`}
                  />
                </i>
              </div>
              <ul
                className={`${
                  openProduct.first === false
                    ? openProduct.open
                      ? "animate-showDropMenu"
                      : "animate-hideDropMenu"
                    : "hidden"
                } px-4 rounded-b-lg mb-1 origin-top-left`}
              >
                <li
                  className={`${
                    router.pathname === "/freebase"
                      ? "header-mobile-menu-item-active"
                      : ""
                  } product-mobile-menu-item`}
                >
                  <Link href="/freebase">
                    <a className="product-mobile-menu-link">
                      tinh dầu freebase
                    </a>
                  </Link>
                </li>
                <li
                  className={`${
                    router.pathname === "/saltnic"
                      ? "header-mobile-menu-item-active"
                      : ""
                  } product-mobile-menu-item`}
                >
                  <Link href="/saltnic">
                    <a className="product-mobile-menu-link">tinh dầu saltnic</a>
                  </Link>
                </li>
                <li
                  className={`${
                    router.pathname === "/pod"
                      ? "header-mobile-menu-item-active"
                      : ""
                  } product-mobile-menu-item`}
                >
                  <Link href="/pod">
                    <a className="product-mobile-menu-link">pod mod</a>
                  </Link>
                </li>
                <li
                  className={`${
                    router.pathname === "/phu-kien"
                      ? "header-mobile-menu-item-active"
                      : ""
                  } product-mobile-menu-item`}
                >
                  <Link href="/phu-kien">
                    <a className="product-mobile-menu-link">phụ kiện</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className={`${
                router.pathname === "/san-pham-khuyen-mai"
                  ? "header-mobile-menu-item-active"
                  : ""
              } header-mobile-menu-item`}
            >
              <Link href="/san-pham-khuyen-mai">
                <a className="header-mobile-menu-link">sản phẩm khuyến mãi</a>
              </Link>
            </li>
            <li
              className={`${
                router.pathname === "/tin-tuc"
                  ? "header-mobile-menu-item-active"
                  : ""
              } header-mobile-menu-item`}
            >
              <Link href="/tin-tuc">
                <a className="header-mobile-menu-link">tin tức</a>
              </Link>
            </li>
            <li
              className={`${
                router.pathname === "/lien-he"
                  ? "header-mobile-menu-item-active"
                  : ""
              }header-mobile-menu-item`}
            >
              <Link href="/lien-he">
                <a className="header-mobile-menu-link">liên hệ</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBarMobile;
