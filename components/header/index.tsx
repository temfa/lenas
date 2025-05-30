"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import Bars from "@/svgs/bars";
import CartSvg from "@/svgs/cart";
import Close from "@/svgs/close";
import InstagramSvg from "@/svgs/instagram";
import TwitterSvg from "@/svgs/twitter";
import FacebookSvg from "@/svgs/facebook";
import { useAppSelector } from "@/redux/store/store";
import { setCartOpen } from "@/redux/slice/cartOpen";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const [mobile, setMobile] = useState(false);

  const cartItems = useAppSelector((store) => store.cart);
  return (
    <header className={styles.container}>
      <nav>
        <Link href="/about">About Us</Link>
        <Link href="/products">Products</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/images/logo-black.png" width={200} height={60} alt="Logo" />
        </Link>
        <div>
          <Bars action={() => setMobile(true)} />
          <div onClick={() => dispatch(setCartOpen(true))}>
            <CartSvg />
            {/* <sup>{cartItems.length}</sup> */}
          </div>
        </div>
      </div>
      <div className={styles.action}>
        <p onClick={() => dispatch(setCartOpen(true))}>
          Cart {cartItems.length !== 0 && <sup>{cartItems.length}</sup>}
          {/* <CartSvg /> */}
        </p>
        <Link href="/">Book Reservation</Link>
      </div>
      <div className={mobile ? `${styles.mobile} ${styles.none}` : styles.none}>
        <div className={styles.head}>
          <Image src="/images/logo-black.png" width={120} height={50} alt="Logo" />
          <Close action={() => setMobile(false)} />
        </div>
        <div className={styles.nav}>
          <Link href="/" onClick={() => setMobile(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setMobile(false)}>
            About Us
          </Link>
          <Link href="/products" onClick={() => setMobile(false)}>
            Products
          </Link>
          <Link href="/contact" onClick={() => setMobile(false)}>
            Contact
          </Link>
        </div>
        <Link href="/">Book Reservation</Link>
        <div className={styles.socials}>
          <Link href="#">
            <InstagramSvg />
          </Link>
          <Link href="#">
            <TwitterSvg />
          </Link>
          <Link href="#">
            <FacebookSvg />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
