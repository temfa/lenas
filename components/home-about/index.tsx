import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const HomeAbout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <video
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
        </video>
        <div data-aos="fade-in" data-aos-duration="1000" data-aos-easing="ease-in" data-aos-mirror="true" data-aos-once="false">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque autem saepe aliquam maxime dignissimos quaerat quidem voluptatem similique quod, molestiae at nesciunt
            facere sint vero esse ad eum debitis est?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque autem saepe aliquam maxime dignissimos quaerat quidem voluptatem similique quod, molestiae at nesciunt
            facere sint vero esse ad eum debitis est?
          </p>
          <Link href="/about">View More</Link>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
