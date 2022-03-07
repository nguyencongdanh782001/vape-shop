import { Breadcrumbs, Pagination, Typography } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import Layout from "../../components/Layout";
import ListProductDetail from "../../components/ListproductDetail/ListProductDetail";
import SearchMenu from "../../components/searchmenu/SearchMenu";
import SideBar from "../../components/sidebar/SideBar";
import { freebaseDeatil } from "../../data/productData";

const FreeBase = () => {
  const [page, setPage] = useState<number>(1);
  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const handleChange = (newValue: any, actionMeta: any) => {
    console.group("Value Changed");
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Layout>
      <section className=" mt-[50px] lg:mt-[75px] w-full flex justify-center items-center h-full bg-gray-100 pb-10">
        <div className="flex justify-center w-[80rem]">
          <div className="grow-0 hidden lg:block">
            <SideBar />
          </div>
          <div className="grow-[1]">
            <div className="lg:mx-[49px] pl-3 py-2 mb-4 bg-white my-4 rounded">
              <Breadcrumbs aria-label="breadcrumb">
                <Link href="/" passHref>
                  <a className="hover:underline text-base font-medium">
                    Trang chủ
                  </a>
                </Link>
                <Typography color="text.primary" className="font-medium">
                  Breadcrumbs
                </Typography>
              </Breadcrumbs>
            </div>
            <SearchMenu />
            <div className="lg:mx-[49px] bg-white pt-2 pb-5 rounded ">
              <div className="flex items-center justify-between mb-7 mt-3 px-4">
                <h1 className="font-medium text-xs sm:text-lg border-l-4 border-red-400 pl-2">
                  Tinh dầu Freebase
                </h1>
                <div className="flex justify-between items-center gap-x-3">
                  <label className="font-semibold text-xs sm:text-base">
                    Sắp Xếp:
                  </label>
                  <Select
                    options={options}
                    onChange={handleChange}
                    className="w-32 text-xs sm:text-sm sm:w-36"
                    placeholder="Lựa chọn..."
                  />
                </div>
              </div>
              <ListProductDetail data={freebaseDeatil} />
              <div className="w-full flex justify-center items-center mt-6">
                <Pagination
                  count={10}
                  page={page}
                  onChange={handleChangePage}
                  size="medium"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FreeBase;
