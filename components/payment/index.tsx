import React, { FC } from "react";
import styles from "./styles.module.css";
import MoneySvg from "@/svgs/money";
import Close from "@/svgs/close";

type Props = {
  action: () => void;
  confirm: () => void;
  state: boolean;
};

export const Payment: FC<Props> = ({ action, confirm, state }) => {
  return (
    <div className={state ? styles.overlay : styles.none}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <MoneySvg />
          <Close action={action} />
        </div>
        <div className={styles.info}>
          <h2>You&apos;re Almost Done – Make Your Payment</h2>
          <p>To complete your transaction, kindly transfer the payment to the account below and click &quot;Confirm&quot; once you&apos;re done.</p>
        </div>
        <div className={styles.body}>
          <div className={styles.single}>
            <p>Account Name</p>
            <h2>Lena’s Organic skincare </h2>
          </div>
          <div className={styles.single}>
            <p>Account Number</p>
            <h2>1541448285</h2>
          </div>
          <div className={styles.single}>
            <p>Bank Name</p>
            <h2>Access Bank Plc</h2>
          </div>
        </div>
        <div className={styles.buttons}>
          <button onClick={action}>Cancel</button>
          <button onClick={confirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
};
