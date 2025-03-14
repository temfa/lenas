"use client";
import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <video autoPlay loop muted playsInline className={styles.video}>
        <source src="/video.MP4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.content}>
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
          Indulge in Beauty Your Natural Glow with Lenas Organic Skincare
        </motion.h1>
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
