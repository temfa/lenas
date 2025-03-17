"use client";
import React, { ReactNode } from "react";
import styles from "./styles.module.css";
import { useAppSelector } from "@/redux/store/store";

const BodyLayout = ({ children }: { children: ReactNode }) => {
  const isOpen = useAppSelector((store) => store.cartOpen);
  return <div className={isOpen ? styles.bodyLayout : styles.bodyLayout2}>{children}</div>;
};

export default BodyLayout;
