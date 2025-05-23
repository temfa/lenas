"use client";
import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const Banner = () => {
  // const videoRef = useRef<HTMLVideoElement>(null);
  // const startTime = 100;

  // useEffect(() => {
  //   const video = videoRef.current;
  //   if (video) {
  //     const handleMetadata = () => {
  //       video.currentTime = startTime;
  //       video.play();
  //     };

  //     video.addEventListener("loadedmetadata", handleMetadata);

  //     return () => {
  //       video.removeEventListener("loadedmetadata", handleMetadata);
  //     };
  //   }
  // }, [startTime]);
  // const sendPurchaseEmail = async (customerEmail: string, purchaseDetails: PurchaseDetails) => {
  //   try {
  //     const response = await fetch("/api/send-mail", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ customerEmail, purchaseDetails }),
  //     });

  //     const result = await response.json();
  //     console.log(result);
  //   } catch (error) {
  //     console.error("Error sending email:", error);
  //   }
  // };

  // const customerEmail = "topeakinfe@gmail.com";
  // const purchaseDetails = { item: "Product Name", amount: 100 };

  // sendPurchaseEmail(customerEmailx, purchaseDetails);
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      {/* <video autoPlay loop muted playsInline className={styles.video} ref={videoRef}>
        <source src="/video.MP4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className={styles.content}>
        {/* <button onClick={async () => await sendPurchaseEmail(customerEmail, purchaseDetails)}>Test</button> */}
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
          Indulge in Beauty Your Natural Glow with Lenas Organic Skincare
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
