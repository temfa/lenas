import React from "react";
import styles from "../page.module.css";
import Link from "next/link";

const Contact = () => {
  return (
    <main className={styles.container}>
      <h2>Contact</h2>
      <p>
        If you need to contact us, you can do so by: <br /> 💬 writing to us on Instagram{" "}
        <span>
          <Link href="https://www.instagram.com/lenas_organicskincare/" target="_blank">
            @lenas_organicskincare
          </Link>{" "}
        </span>{" "}
        <br /> 💌 sending a dm to{" "}
        <span>
          <Link href="https://wa.me/2348140137649?fbclid=PAZXh0bgNhZW0CMTEAAaaUXhKxNvE-8F5x5kQ_IGFuj5PSBa1YYns4mdymrIsQ3KNRVeaDK13B-TU_aem__V8S2Xj3MQSd9uD4ehn3XA." target="_blank">
            +2348140137649
          </Link>
        </span>
        .
        <br /> We will respond as soon as possible, within the next 24/48 working hours. <br /> Customer Service is available Monday to Sunday, from 9:00 AM to 6:00 PM CET
        (excluding holidays).
      </p>
    </main>
  );
};

export default Contact;
