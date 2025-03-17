"use client";
import React, { useEffect } from "react";
import styles from "./styles.module.css";
import Close from "@/svgs/close";
import { useAppSelector } from "@/redux/store/store";
import { setCartOpen } from "@/redux/slice/cartOpen";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { formatter } from "@/utils/helper";
import { addtoCart, reducetoCart, removeFromCart } from "@/redux/slice/cart";
import Link from "next/link";
import { useWindowWidth } from "@/hooks/useWidth";

const CartModal = () => {
  const dispatch = useDispatch();
  const isCartOpen = useAppSelector((store) => store.cartOpen);
  const cartItems = useAppSelector((store) => store.cart);

  const total = cartItems?.reduce((a, b) => a + b.promoPrice * b.count, 0);
  const width = useWindowWidth();

  useEffect(() => {
    if (isCartOpen && width > 500) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
    }

    return () => {
      document.body.style.overflow = ""; // Cleanup when unmounted
    };
  }, [isCartOpen, width]);

  const found = cartItems?.find((element) => element.title === "Niacinamide hydrating mask");

  return (
    <div className={isCartOpen ? styles.overlay : ""}>
      <div className={isCartOpen ? `${styles.open} ${styles.container}` : styles.container}>
        <div className={styles.header}>
          <h2>Cart</h2>
          <Close action={() => dispatch(setCartOpen(false))} />
        </div>
        <div className={styles.body}>
          <div className={styles.products}>
            {cartItems?.map((item, index) => {
              return (
                <div className={styles.single} key={index}>
                  <div className={styles.left}>
                    <Image src={item.image} width={100} height={100} alt="Product" />
                    <div className={styles.details}>
                      <h3>{item.title}</h3>
                      <div>
                        <p
                          onClick={() => {
                            if (item.count !== 1) dispatch(reducetoCart(item));
                          }}>
                          -
                        </p>
                        <h4>{item.count}</h4>
                        <p onClick={() => dispatch(addtoCart(item))}>+</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.right}>
                    <Close action={() => dispatch(removeFromCart(item))} />
                    <p>{formatter(item.promoPrice * item.count)}</p>
                  </div>
                </div>
              );
            })}
            {!found && (
              <div className={styles.new}>
                <h4>Complete the routine!</h4>
                <div className={styles.left}>
                  <Image src="/images/21.jpg" width={100} height={100} alt="Product" />
                  <div className={styles.details}>
                    <h3>Niacinamide hydrating mask</h3>
                    <p>{formatter(3000)}</p>
                    <button
                      onClick={() => {
                        const cartDetails = {
                          image: "/images/21.jpg",
                          title: "Niacinamide hydrating mask",
                          description: "For reduction of facial inflammation",
                          size: "",
                          price: 5000,
                          promoPrice: 3000,
                          count: 1,
                        };
                        dispatch(addtoCart(cartDetails));
                      }}>
                      Add to Cart
                    </button>
                  </div>
                </div>
                {/* <div className={styles.right}>
                <Close action={() => dispatch(removeFromCart(item))} />
                <p>{formatter(item.promoPrice * item.count)}</p>
              </div> */}
              </div>
            )}
          </div>
          <div className={styles.subTotal}>
            <h3>Subtotal</h3>
            <p>{formatter(total)}</p>
          </div>
          <Link href="/checkout" onClick={() => dispatch(setCartOpen(false))}>
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
