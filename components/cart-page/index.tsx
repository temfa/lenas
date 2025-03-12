"use client";
import React from "react";
import styles from "./styles.module.css";
import { useAppSelector } from "@/redux/store/store";
import Image from "next/image";
import { formatter } from "@/utils/helper";
import { addtoCart, reducetoCart } from "@/redux/slice/cart";
import { useDispatch } from "react-redux";

const CartPage = () => {
  const cartItems = useAppSelector((store) => store.cart);
  const total = cartItems?.reduce((a, b) => a + b.promoPrice * b.count, 0);
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <h2>Cart</h2>
      <div className={styles.details}>
        <div className={styles.header}>
          <p>Cart</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Sub-total</p>
        </div>
        <div className={styles.body}>
          {cartItems?.map((item, index) => {
            return (
              <div key={index} className={styles.single}>
                <div className={styles.title}>
                  <Image width={70} height={70} src={item.image} alt="Product" />
                  <div>
                    <h2>{item.title}</h2>
                    <p>{item.size}</p>
                    <p>{formatter(item.promoPrice)}</p>
                  </div>
                </div>
                <p>{formatter(item.promoPrice)}</p>
                <div className={styles.quantity}>
                  <p
                    onClick={() => {
                      if (item.count !== 1) dispatch(reducetoCart(item));
                    }}>
                    -
                  </p>
                  <h4>{item.count}</h4>
                  <p
                    onClick={() => {
                      dispatch(addtoCart(item));
                    }}>
                    +
                  </p>
                </div>
                <p>{formatter(item.promoPrice * item.count)}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.total}>
        <div>
          <h4>Total</h4>
          <p>{formatter(total)}</p>
        </div>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
