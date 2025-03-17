import React, { FC } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import ArrowRight from "@/svgs/arrow-right";
import dynamic from "next/dynamic";

type Props = {
  data: {
    title: string;
    price: number;
    description: string;
    size: string;
    image: string;
    promoPrice: number;
  }[];
  page: boolean;
};

const SingleProduct = dynamic(() => import("../single-product"), { ssr: false });
const HomeProducts: FC<Props> = ({ data, page }) => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.header}>

        </div> */}
      <h2 data-aos="fade-in" data-aos-duration="1000" data-aos-easing="ease-in" data-aos-mirror="true" data-aos-once="false">
        Our Skin Catalogue
      </h2>
      <div className={styles.body} data-aos="fade-in" data-aos-duration="1000" data-aos-easing="ease-in" data-aos-mirror="true" data-aos-once="false">
        {data?.map((item, index) => {
          return (
            <SingleProduct image={item.image} title={item.title} description={item.description} price={item.price} size={item.size} key={index} promoPrice={item.promoPrice} />
          );
        })}
      </div>
      {page && (
        <Link href="/products">
          All Products{" "}
          <span>
            <ArrowRight />
          </span>{" "}
        </Link>
      )}
    </div>
  );
};

export default HomeProducts;
