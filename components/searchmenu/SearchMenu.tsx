import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const SearchMenu = () => {
  const price = [
    { id: 1, min: "0", max: "100.000" },
    { id: 1, min: "100.000", max: "200.000" },
    { id: 1, min: "200.000", max: "300.000" },
    { id: 1, min: "300.000", max: "500.000" },
    { id: 1, min: "500.000", max: "1.000.000" },
    { id: 1, min: "1.000.000", max: "10.000.000" },
  ];
  const sizes = [
    { id: 1, size: "60ml" },
    { id: 2, size: "120ml" },
  ];
  return (
    <ul className="flex justify-start items-center gap-x-5 lg:mx-[49px] pl-3 mb-4 bg-white rounded">
      <li className="font-medium text-base text-red-500 py-2 tracking-wide">
        Tìm kiếm:
      </li>
      <li className="flex flex-col cursor-pointer relative group py-2">
        <div className="font-medium text-base tracking-wide flex items-center justify-between gap-x-2">
          <p>Mức giá</p>
          <i>
            <MdKeyboardArrowDown />
          </i>
        </div>
        <ul className="absolute z-10 overflow-hidden bg-white top-10 left-0 w-44 rounded border border-gray-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-[250ms] origin-top">
          {price.map((item, index) => (
            <li
              key={index}
              className="py-2 pl-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              {item.max !== "10.000.000"
                ? item.min === "0"
                  ? ` Giá từ ${item.max}`
                  : `${item.min} - ${item.max}`
                : ` Giá trên ${item.min}`}
            </li>
          ))}
        </ul>
      </li>
      <li className="flex flex-col cursor-pointer relative group py-2">
        <div className="font-medium text-base tracking-wide flex items-center justify-between gap-x-2">
          <p>Loại sản phẩm</p>
          <i>
            <MdKeyboardArrowDown />
          </i>
        </div>
        <ul className="absolute z-10 overflow-hidden bg-white top-10 left-0 w-44 rounded border border-gray-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-[250ms] origin-top">
          {price.map((item, index) => (
            <li
              key={index}
              className="py-2 pl-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              {item.max !== "10.000.000"
                ? item.min === "0"
                  ? ` Giá từ ${item.max}`
                  : `${item.min} - ${item.max}`
                : ` Giá trên ${item.min}`}
            </li>
          ))}
        </ul>
      </li>
      <li className="flex flex-col cursor-pointer relative group py-2 ">
        <div className="font-medium text-base tracking-wide flex items-center justify-between gap-x-2">
          <p>Thương hiệu</p>
          <i>
            <MdKeyboardArrowDown />
          </i>
        </div>
        <ul className=" absolute z-10 overflow-hidden bg-white top-10 left-0 w-44 rounded border border-gray-400 scale-y-0 group-hover:scale-y-100 group-focus:scale-y-100 transition-transform duration-[250ms] origin-top">
          {price.map((item, index) => (
            <li
              key={index}
              className="py-2 pl-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              {item.max !== "10.000.000"
                ? item.min === "0"
                  ? ` Giá từ ${item.max}`
                  : `${item.min} - ${item.max}`
                : ` Giá trên ${item.min}`}
            </li>
          ))}
        </ul>
      </li>
      <li className="flex flex-col cursor-pointer relative group py-2">
        <div className="font-medium text-base tracking-wide flex items-center justify-between gap-x-2">
          <p> kích thước</p>
          <i>
            <MdKeyboardArrowDown />
          </i>
        </div>
        <ul className="absolute z-10 overflow-hidden bg-white top-10 left-0 w-24 rounded border border-gray-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-[250ms] origin-top">
          {sizes.map((item, index) => (
            <li
              key={index}
              className="py-2 pl-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              {item.size}
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default SearchMenu;
