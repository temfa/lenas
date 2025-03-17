"use client";
import dynamic from "next/dynamic";
import React from "react";

const CheckoutBody = dynamic(() => import("../../components/checkout-body"), { ssr: false });
const Checkout = () => {
  return (
    <main>
      <CheckoutBody />
    </main>
  );
};

export default Checkout;
