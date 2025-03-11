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
  promoPrice: number;
};

const SingleProduct: FC<Props> = ({ image, title, description, size, price, promoPrice }) => {
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
        <div>
          <p>{formatter(price)}</p>
          <p>{formatter(promoPrice)}</p>
        </div>
      </div>
      <div className={styles.buy}>
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default SingleProduct;
