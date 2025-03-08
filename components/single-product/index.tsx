import React, { FC } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { formatter } from "@/utils/helper";
import CartSvg from "@/svgs/cart";

type Props = {
  image: string;
  title: string;
  description: string;
  size: string;
  price: number;
};

const SingleProduct: FC<Props> = ({ image, title, description, size, price }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={image} width={416} height={368} alt="Products" />
        <CartSvg />
      </div>
      <div className={styles.title}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={styles.price}>
        <p>{size}</p>
        <p>{formatter(price)}</p>
      </div>
      <div className={styles.buy}>
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default SingleProduct;
