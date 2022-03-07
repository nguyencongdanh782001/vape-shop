import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const SideBar = () => {
  const router = useRouter();
  return (
    <div className="bg-white w-[300px] border border-solid border-white border-l-gray-500 border-r-gray-500 flex flex-col sticky top-20">
      <div className="py-3 mb-2 bg-slate-800">
        <h3 className="uppercase text-2xl text-center font-bold tracking-wide text-white">
          danh mục
        </h3>
      </div>
      <ul className="flex flex-col gap-y-2">
        <li
          className={`${
            router.pathname === "/san-pham/free-base" ? "" : ""
          } sidebar-item`}
        >
          <Link href="/san-pham/free-base" passHref>
            <a className="py-2 w-[75%] hover:text-gray-500">
              tinh dầu freebase
            </a>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link href="/san-pham/free-base" passHref>
            <a className="py-2 w-[75%] hover:text-gray-500">tinh dầu saltnic</a>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link href="/san-pham/free-base" passHref>
            <a className="py-2 w-[75%] hover:text-gray-500">box tank</a>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link href="/san-pham/free-base" passHref>
            <a className="py-2 w-[75%] hover:text-gray-500">pod mod</a>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link href="/san-pham/free-base" passHref>
            <a className="py-2 w-[75%] hover:text-gray-500">phụ kiện</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
