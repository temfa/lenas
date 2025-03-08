"use client";
import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
          Indulge in Beauty Your Natural Glow with Lenas Skincare
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 4 }}>
          Our luxurious skincare formulations are crafted to nourish, rejuvenate, and reveal your inner radiance.
        </motion.p>
        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 6 }}>
          <Link href="/products">Shop Now</Link>
        </motion.button>
      </div>
    </div>
  );
};

export default Banner;
