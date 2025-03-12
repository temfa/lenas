"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppSelector } from "@/redux/store/store";
import Image from "next/image";
import { formatter } from "@/utils/helper";
import PaystackPop from "@paystack/inline-js";
// import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { location } from "@/utils/data";
import { useDispatch } from "react-redux";
import { clearCart } from "@/redux/slice/cart";

type FormProps = {
  fname: string;
  lname: string;
  address: string;
  country: string;
  state: string;
  town: string;
  phone: string;
  email: string;
};

const CheckoutBody = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormProps>();
  //   const router = useRouter();
  const dispatch = useDispatch();

  const submit: SubmitHandler<FormProps> = (e) => {
    const publicKey = "pk_test_7fb90bd8aa7b5f58930828f02a247d2a950ad4d2";
    const popup = new PaystackPop();
    popup.newTransaction({
      key: publicKey,
      email: e.email,
      amount: (total + pickup) * 100,
      onSuccess: async () => {
        // if (payStatus) {
        toast.success("Payment successful");
        reset();
        dispatch(clearCart());
      },
      onCancel: () => {
        toast.error("Payment cancelled");
      },
      onLoad: (response) => {
        console.log("onLoad: ", response);
      },
      onError: (error) => {
        console.log("Error: ", error.message);
      },
    });
  };

  const [pickup, setPickup] = useState(0);

  const cartItems = useAppSelector((store) => store.cart);

  const total = cartItems?.reduce((a, b) => a + b.promoPrice * b.count, 0);

  return (
    <form className={styles.container} onSubmit={handleSubmit(submit)}>
      <div className={styles.left}>
        <h2>Billing Details</h2>
        <div className={styles.group}>
          <label htmlFor="fname">First Name</label>
          <input type="text" {...register("fname", { required: "First Name is required" })} />
          {errors.fname && <span className="error">{errors.fname.message}</span>}
        </div>
        <div className={styles.group}>
          <label htmlFor="lname">Last Name</label>
          <input type="text" {...register("lname", { required: "Last Name is required" })} />
          {errors.lname && <span className="error">{errors.lname.message}</span>}
        </div>
        <div className={styles.group}>
          <label htmlFor="address">Street Address</label>
          <input type="text" {...register("address", { required: "Address is required" })} />
          {errors.address && <span className="error">{errors.address.message}</span>}
        </div>
        {/* <div className={styles.group}>
          <label htmlFor="country">Country</label>
          <select {...register("country", { required: "Country is required" })}></select>
          {errors.country && <span className="error">{errors.country.message}</span>}
        </div> */}
        <div className={styles.group}>
          <label htmlFor="state">State</label>
          <select {...register("state", { required: "State is required" })}>
            <option value="">Choose a State</option>
            {location?.map((item, index) => {
              return (
                <option value={item.state} key={index}>
                  {item.state}
                </option>
              );
            })}
          </select>
          {errors.state && <span className="error">{errors.state.message}</span>}
        </div>
        <div className={styles.group}>
          <label htmlFor="town">Town/City</label>
          <input type="text" {...register("town", { required: "Town is required" })} />
          {errors.town && <span className="error">{errors.town.message}</span>}
        </div>
        <div className={styles.group}>
          <label htmlFor="phone">Phone</label>
          <input type="text" {...register("phone", { required: "Phone is required" })} />
          {errors.phone && <span className="error">{errors.phone.message}</span>}
        </div>
        <div className={styles.group}>
          <label htmlFor="email">Email</label>
          <input type="email" {...register("email", { required: "Email is required" })} />
          {errors.email && <span className="error">{errors.email.message}</span>}
        </div>
      </div>
      <div className={styles.right}>
        <h2>Products</h2>
        <div className={styles.products}>
          {cartItems?.map((product, index) => {
            return (
              <div key={index} className={styles.single}>
                <Image src={product.image} width={80} height={80} alt="Products" />
                <div>
                  <p>{product?.title}</p>
                  <p>{formatter(product?.promoPrice)}</p>
                  <p>QTY: {product?.count}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.subTotal}>
          <h3>Subtotal</h3>
          <p>{formatter(total)}</p>
        </div>
        <div className={styles.pickup}>
          <div>
            <input type="radio" name="pickup" onChange={() => setPickup(0)} />
            <span>Pickup (Wed. and Fri. by 2.30pm)</span>
          </div>
          <div>
            <input type="radio" name="pickup" onChange={() => setPickup(6000)} />
            <span>Outside Lagos - {formatter(6000)} </span>
          </div>
          <div>
            <input type="radio" name="pickup" onChange={() => setPickup(5000)} />
            <span>Within Lagos - {formatter(5000)} </span>
          </div>
          <div>
            <input type="radio" name="pickup" onChange={() => setPickup(3000)} />
            <span>Within Ikorodu - {formatter(3000)} </span>
          </div>
        </div>
        <div className={styles.subTotal}>
          <h3>Total</h3>
          <p>{formatter(total + pickup)}</p>
        </div>
        <button type="submit">Place Order</button>
      </div>
    </form>
  );
};

export default CheckoutBody;
