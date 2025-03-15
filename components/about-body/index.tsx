import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const AboutBody = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
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
          <source src="/video4.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.right}>
          <div>
            <h2>About Us</h2>
            <p>Welcome to Lena&apos;s Organic Skincare & spa , Your Trusted Skincare Partner.</p>
            <p>
              At Lenas Organic Skincare , we&apos;re passionate about helping you achieve healthy, glowing skin. As an amazing skincare formulator in Africa, we&apos;ve been
              perfecting our craft for over 6 years, delivering high-quality, effective products that cater to diverse skin types and concerns.
            </p>
          </div>
          <div>
            <h2>Our Story</h2>
            <p>
              Founded on March 31, 2019 , our journey began with a simple yet powerful mission: to provide tailored skincare solutions that empower individuals to take control of
              their skin health. Our founder, <strong>OGHE HELENA EJIRO</strong> , a skilled skincare formulator, drew from years of experience and expertise to create a range of
              products that address specific skin issues, from hyperpigmentation to acne and dryness
            </p>
          </div>
        </div>
      </div>
      <div className={styles.middle}>
        <div className={styles.wrapper}>
          <h2>Our Philosophy</h2>
          <p>We believe that everyone deserves healthy, radiant skin. That&apos;s why we&apos;re committed to:</p>
          <ul>
            <li>Using only the finest, clinically-tested ingredients that are gentle, effective, and suitable for various skin types.</li>
            <li>Crafting products that are free from harsh chemicals, artificial fragrances, and dyes.</li>
            <li>Providing personalized skincare advice and support to help you achieve your skin goals.</li>
            <li>Continuously innovating and improving our formulations to stay ahead of the curve in skincare science.</li>
          </ul>
        </div>
        <div className={styles.wrapper}>
          <h2>Our Values</h2>
          <ul>
            <li>Quality: We&apos;re dedicated to creating products that meet the highest standards of quality, safety, and efficacy.</li>
            <li>Integrity: We&apos;re transparent about our ingredients, processes, and expertise, ensuring that you can trust our products and advice.</li>
            <li>Customer-centricity: We listen to your concerns, respond to your needs, and strive to exceed your expectations.</li>
            <li>Innovation: We stay up-to-date with the latest skincare research, trends, and technologies to bring you the best possible products and solutions.</li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <h2>Join Our Skincare Journey</h2>
        <p>
          At Lena’s Organic Skincare , we are more than just a skincare company – we are a community dedicated to helping you achieve the skin you deserve. Explore our website,
          discover our products, and let us work together to unlock your skin&apos;s full potential.
        </p>
        <p>
          Contact us :{" "}
          <span>
            <Link href="mailto:Lenasorganicskincare@gmail.com" target="_blank">
              Lenasorganicskincare@gmail.com
            </Link>
          </span>{" "}
          or{" "}
          <span>
            <Link href="tel:2348140137649" target="_blank">
              +2348140137649
            </Link>
          </span>
        </p>
        <p>
          Follow us :{" "}
          <span>
            <Link href="https://www.instagram.com/lenas_organicskincare?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
              @lenasorganicskincare
            </Link>{" "}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AboutBody;
