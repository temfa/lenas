"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { formatter } from "@/utils/helper";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/utils/firebase";
import Image from "next/image";

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
  shippingFee: number;
};

export const SingleOrderBody = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(false);

  const [orders, setOrders] = useState<OrdersProps>({
    cart: [
      {
        promoPrice: 0,
        count: 0,
        description: "",
        image: "/image/1.jpeg",
        price: 0,
        size: "",
        title: "",
      },
    ],
    name: "",
    address: "",
    state: "",
    email: "",
    phoneNumber: "",
    ID: "",
    shipping: "",
    shippingFee: 0,
  });
  const [price, setPrice] = useState(0);
  useEffect(() => {
    setLoading(true);
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
        const found = firebaseOrders.find((element) => element.ID === id);

        if (found) {
          setOrders(found);
          const temp = found.cart.map((value) => value.promoPrice);
          setPrice(temp.reduce((acc, item) => Number(acc) + Number(item), 0));
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching events from Firestore:", error);
      }
    };

    fetchEventsFromFirestore();
  }, [id]);
  return (
    <div className={styles.singleOrderCont}>
      {loading ? (
        <h2>Loading....</h2>
      ) : (
        <>
          <div className={styles.customerContainer}>
            <div className={styles.customerWrapper}>
              <div className={styles.customerSingle}>
                <h2>
                  Customer Name: <span>{orders.name}</span>
                </h2>
                <h3>
                  Order Id: <span>{id}</span>
                </h3>
              </div>
              <div className={styles.customerSingle}>
                <h2>
                  Contact Info: <span> {orders.phoneNumber} </span>
                </h2>
                <h2>
                  Amount Paid: <span> {formatter(price)} </span>
                </h2>
              </div>
              <div className={styles.customerSingle}>
                <h2>
                  Address: <span> {orders.address} </span>
                </h2>
              </div>
              {/* <div className={styles.customerSingle}>
                  <h2>
                    Status:{" "}
                    <p
                      onClick={() => setActive(true)}
                      className={order?.status === "completed" ? "completed" : order?.status === "failed" || order?.status === "cancelled" ? "failed" : "ongoing"}>
                      {order?.status}
                    </p>
                  </h2>
                </div> */}
            </div>
            <h2>Order Details</h2>
          </div>
          <div className={styles.orderItems}>
            <h2>Order Items</h2>
            <div className={styles.orderItemsWrapper}>
              {orders?.cart?.map((item, index) => {
                return (
                  <div className={styles.orderItemSingle} key={index}>
                    <div className={styles.orderImg}>
                      <div>
                        <Image src={item.image} width={100} height={100} alt="Product" />
                      </div>
                      <div>
                        <h2>{item.title}</h2>
                      </div>
                    </div>
                    <div className={styles.details}>
                      <h2>
                        Price : <span>{formatter(item.promoPrice)}</span>
                      </h2>
                      <h2>
                        Quantity : <span>{item.count}</span>
                      </h2>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.summaryContainer}>
            <h2>Order Summary</h2>
            <div className={styles.summaryWrapper}>
              <div>
                <p>Sub-Total</p>
                <h3>{formatter(price)}</h3>
              </div>
              <div>
                <p>Delivery Fee</p>
                <h3>{formatter(orders.shippingFee)}</h3>
              </div>
              <div>
                <h2>Total Amount Paid</h2>
                <h3>{formatter(price + orders.shippingFee)}</h3>
              </div>
              {/* <div>
          <h3>Vendor’s Pay</h3>
          <h1>{formatter.format(220000)}</h1>
        </div> */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
