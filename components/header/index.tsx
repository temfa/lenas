import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
// import CartSvg from "@/svgs/cart";

const Header = () => {
  return (
    <header className={styles.container}>
      <nav>
        <Link href="/about">About Us</Link>
        <Link href="/products">Products</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <h2>Lenas</h2>
      <div>
        <Link href="/cart">
          Cart
          {/* <CartSvg /> */}
        </Link>
        <Link href="/">Book Reservation</Link>
      </div>
    </header>
  );
};

export default Header;
