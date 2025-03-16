import HomeProducts from "@/components/home-product";
import { products } from "@/utils/data";
import React from "react";

const AllProducts = () => {
  return (
    <main>
      <HomeProducts data={products} page={false} />
    </main>
  );
};

export default AllProducts;
