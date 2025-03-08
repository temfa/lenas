import HomeProducts from "@/components/home-product";
import { products } from "@/utils/data";
import React from "react";

const AllProducts = () => {
  return (
    <>
      <HomeProducts data={products} page={false} />
    </>
  );
};

export default AllProducts;
