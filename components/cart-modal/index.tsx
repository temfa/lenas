import React from "react";
import styles from "./styles.module.css";
// import Close from "@/svgs/close";

const CartModal = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Cart</h2>
        {/* <Close /> */}
      </div>
    </div>
  );
};

export default CartModal;
