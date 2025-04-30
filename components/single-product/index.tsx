"use client";
import React, { FC, useEffect, useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { formatter } from "@/utils/helper";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addtoCart } from "@/redux/slice/cart";
import { setCartOpen } from "@/redux/slice/cartOpen";

type Props = {
  image: string;
  title: string;
  description: string;
  size: string;
  price: number;
  promoPrice: number;
};

const SingleProduct: FC<Props> = ({ image, title, description, size, price, promoPrice }) => {
  const dispatch = useDispatch();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const addItemCart = () => {
    const cartDetails = {
      image,
      title,
      description,
      size,
      price,
      promoPrice,
      count: 1,
    };
    dispatch(addtoCart(cartDetails));
    // toast.success("Added to Cart Successfully!!");
    if (isClient) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    dispatch(setCartOpen(true));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={styles.container}>
      <motion.div className={styles.image}>
        <Image src={image} width={416} height={368} alt="Products" />
        {/* <CartSvg /> */}
      </motion.div>
      <div className={styles.content}>
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
      </div>
      <div className={styles.buy}>
        <button onClick={addItemCart}>Add to Cart</button>
      </div>
    </motion.div>
  );
};

export default SingleProduct;
