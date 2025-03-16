import HomeAbout from "@/components/home-about";
import React from "react";
import styles from "../page.module.css";
import AboutBody from "@/components/about-body";

const About = () => {
  return (
    <main>
      <AboutBody />
      <HomeAbout page="About" />
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.video}
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        data-aos-mirror="true"
        data-aos-once="false">
        <source src="/video2.MP4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </main>
  );
};

export default About;
