import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.top}>
        <Image src="/images/logo.png" width={150} height={50} alt="Logo" />
        <div className={styles.single}>
          <h2>Services</h2>
          <div>
            <Link href="/products">Products</Link>
            <Link href="/#">Spa</Link>
          </div>
        </div>
        <div className={styles.single}>
          <h2>Quick Links</h2>
          <div>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/#">Privacy Policy</Link>
            <Link href="/#">Terms and Condition</Link>
          </div>
        </div>
        <div className={styles.single}>
          <h2>Address</h2>
          <div>
            <p>7 Adamspon Eyifujowo ginti ikorodu, Lagos, Nigeria 104101</p>
            <p>Phone: 08140137649</p>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© Lenas Organic Skincare & Spa 2025. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
