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
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex justify-center flex-wrap gap-3 items-center ">
          {data?.map((item, index) => (
            <ProductDetailItem key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListProductDetail;
