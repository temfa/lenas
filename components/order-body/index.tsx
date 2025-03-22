"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { formatter } from "@/utils/helper";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/utils/firebase";
import { useRouter } from "next/navigation";

type OrdersProps = {
  cart: {
    promoPrice: number;
    count: number;
    description: string;
    image: string;
    price: number;
    size: string;
    title: string;
  }[];
  name: string;
  address: string;
  state: string;
  email: string;
  phoneNumber: string;
  ID: string;
  shipping: string;
  shippingFee: string;
};

export const OrderBody = () => {
  const router = useRouter();

  const [orders, setOrders] = useState<OrdersProps[]>([]);
  useEffect(() => {
    const fetchEventsFromFirestore = async () => {
      try {
        const queryData = query(collection(db, "orders"));
        const querySnapshot = await getDocs(queryData);

        const firebaseOrders: OrdersProps[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data() as OrdersProps;
          if (data) {
            firebaseOrders.push(data); // Add all dates from Firebase
          }
        });

        setOrders(firebaseOrders);
        // setLoading(false);
      } catch (error) {
        // setLoading(false);
        console.error("Error fetching events from Firestore:", error);
      }
    };

    fetchEventsFromFirestore();
  }, []);

  return (
    <div className={styles.assignContainer}>
      <div className={styles.assignWrapper}>
        <div className={styles.assignHeader}>
          <p>S/N</p>
          <p>Customer</p>
          <p>Phone Number</p>
          <p>Shipping</p>
          <p>Total</p>
        </div>
        {orders.length === 0 ? (
          <p>No Data</p>
        ) : (
          orders?.map((item, index) => {
            const temp = item.cart.map((value) => value.promoPrice);
            const price = temp.reduce((acc, item) => Number(acc) + Number(item), 0);
            return (
              <div className={styles.assignSingle} key={index} onClick={() => router.push(`/orders/${item.ID}`)}>
                <p>{index + 1}</p>
                <p>{item.name}</p>
                <p>{item.phoneNumber}</p>
                <p>{item.shipping}</p>
                <p>{formatter(price)}</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
