import React from "react";
import ProductDetailItem from "./components/ProductDetailItem";

interface PropsType {
  data: {
    title: string;
    image: string;
    price: string;
  }[];
}

const ListProductDetail = ({ data }: PropsType) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full flex flex-wrap gap-3 items-center max-w-[350px] sm:max-w-screen-sm md:max-w-screen-sm lg:max-w-screen-md">
        {data?.map((item, index) => (
          <ProductDetailItem key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ListProductDetail;
