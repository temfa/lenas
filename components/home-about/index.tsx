import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";

const HomeAbout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.video}
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in"
          data-aos-mirror="true"
          data-aos-once="false">
          <source src="/video.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <Image src="/images/8.jpeg" width={500} height={500} alt="About" />
        <div data-aos="fade-in" data-aos-duration="1000" data-aos-easing="ease-in" data-aos-mirror="true" data-aos-once="false">
          <h2>OUR MISSION</h2>
          <p>Naturally for Everyone.</p>
          <p> At Lena’s organic skincare & Spa , We’re dedicated to providing simple , yet powerful all - natural ingredients and remains sustainable.</p>
          <p>
            We believe in harnessing the potency of herbs and essential oils to create all-natural products that nurture every skin type Inspired by nature, crafted with Love .
            Experience the transformative power of nature, tailored to your unique skin.
          </p>
          <Link href="/about">View More</Link>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
