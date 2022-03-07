import type { NextPage } from "next";
import { useEffect } from "react";
import Category from "../components/category/Category";
import Layout from "../components/Layout";
import ListProduct from "../components/listproduct/ListProduct";
import SliderBanner from "../components/slider/SliderBanner";
import { freebase, podmod, saltnic } from "../data/productData";

const Home: NextPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout scrollNavBar="scroll">
      <div className="pb-10">
        <SliderBanner />
        <Category />
        <ListProduct heading="freebase" data={freebase} />
        <ListProduct heading="saltnic" data={saltnic} />
        <ListProduct heading="pod mod" data={podmod} />
      </div>
    </Layout>
  );
};

export default Home;
