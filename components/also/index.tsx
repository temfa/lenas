import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

const Also = () => {
  return (
    <div className={styles.container}>
      <Image src="/images/bulk.jpg" width={500} height={500} alt="Bulk" />
      <div>
        <p>
          We also offer private labeling / wholesale deals and this is available for all products. For more info contact us{" "}
          <Link href="https://www.instagram.com/lenas_organicskincare?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
            @lenasorganicskincare
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Also;
