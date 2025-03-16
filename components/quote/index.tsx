import React from "react";
import styles from "./styles.module.css";
// import TreatmentSvg from "@/svgs/treatment";
// import DetoxSvg from "@/svgs/detox";
// import FootMassageSvg from "@/svgs/foot-massage";
// import CandleSvg from "@/svgs/candle";

const Quote = () => {
  return (
    <div className={styles.container}>
      <h2 data-aos="fade-down" data-aos-duration="1000" data-aos-easing="ease-in" data-aos-mirror="true" data-aos-once="false">
        “Give Your Body A Little Love, It Deserves It”
      </h2>
      {/* <div className={styles.body}>
        <div className={styles.single} data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in" data-aos-mirror="true" data-aos-once="false">
          <TreatmentSvg />
          <p>Face Treatments</p>
        </div>
        <div className={styles.single} data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in" data-aos-mirror="true" data-aos-once="false">
          <DetoxSvg />
          <p>Detox Massage</p>
        </div>
        <div className={styles.single} data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in" data-aos-mirror="true" data-aos-once="false">
          <FootMassageSvg />
          <p>Foot Massage</p>
        </div>
        <div className={styles.single} data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in" data-aos-mirror="true" data-aos-once="false">
          <CandleSvg />
          <p>Candle Relaxing</p>
        </div>
      </div> */}
    </div>
  );
};

export default Quote;
