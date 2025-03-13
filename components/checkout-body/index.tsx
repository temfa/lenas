"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppSelector } from "@/redux/store/store";
import Image from "next/image";
import { formatter } from "@/utils/helper";
// import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { location } from "@/utils/data";
import { useDispatch } from "react-redux";
import { clearCart } from "@/redux/slice/cart";
import { PaystackButton } from "react-paystack";

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
  const cartItems = useAppSelector((store) => store.cart);

  const total = cartItems?.reduce((a, b) => a + b.promoPrice * b.count, 0);
  //   const router = useRouter();
  const dispatch = useDispatch();
  const [pickup, setPickup] = useState(0);
  const [pickupMethod, setPickupMethod] = useState("");
  const [page, setPage] = useState("Billing");
  const [email, setEmail] = useState("");

  const submit: SubmitHandler<FormProps> = (e) => {
    if (pickupMethod === "") toast.error("Pick a shipping method");
    else {
      setPage("Shipping");
      setEmail(e.email);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const publicKey = "pk_test_7fb90bd8aa7b5f58930828f02a247d2a950ad4d2";

  const componentProps = {
    email,

    amount: (total + pickup) * 100,

    publicKey,

    text: "Place Order",

    onSuccess: () => {
      toast.success("Payment successful");
      reset();
      dispatch(clearCart());
      setPage("Billing");
      setPickup(0);
    },
    onCancel: () => {
      toast.error("Payment cancelled");
    },
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(submit)}>
      <div className={styles.left}>
        <h2>{page === "Shipping" ? "Shipping Method" : "Billing Details"}</h2>
        {page === "Shipping" ? (
          <div className={styles.pickups}>
            {pickupMethod === "Ship" ? (
              <>
                <div className={styles.pickupSingle}>
                  <div>
                    <input type="radio" name="pickup" onChange={() => setPickup(6000)} />
                    <span>Outside Lagos </span>
                  </div>
                  <p>{formatter(6000)}</p>
                </div>
                <div className={styles.pickupSingle}>
                  <div>
                    <input type="radio" name="pickup" onChange={() => setPickup(5000)} />
                    <span>Within Lagos </span>
                  </div>
                  <p> {formatter(5000)}</p>
                </div>
                <div className={styles.pickupSingle}>
                  <div>
                    <input type="radio" name="pickup" onChange={() => setPickup(3000)} />
                    <span>Within Ikorodu </span>
                  </div>
                  <p>{formatter(3000)}</p>
                </div>
              </>
            ) : (
              <>
                <div>
                  <p>7 Adamspon Eyifujowo ginti ikorodu, Lagos, Nigeria 104101</p>
                </div>
              </>
            )}
          </div>
        ) : (
          <>
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
            <button type="submit">Continue to Shipping</button>
          </>
        )}
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
        {page === "Billing" && (
          <div className={styles.pickup}>
            <div>
              <input type="radio" name="pickup" onChange={() => setPickupMethod("Pickup")} />
              <span>Pickup in Store (Wed. and Fri. by 2.30pm)</span>
            </div>
            <div>
              <input type="radio" name="pickup" onChange={() => setPickupMethod("Ship")} />
              <span>Ship</span>
            </div>
          </div>
        )}
        <div className={styles.subTotal}>
          <h3>Subtotal</h3>
          <p>{formatter(total)}</p>
        </div>
        <div className={styles.subTotal}>
          <h3>Shipping</h3>
          <p>{page === "Shipping" ? formatter(pickup) : "Calculated at next step"}</p>
        </div>
        <div className={styles.subTotal}>
          <h3>Total</h3>
          <p>{formatter(total + pickup)}</p>
        </div>
        {page === "Shipping" && pickupMethod === "Ship" && pickup != 0 && <PaystackButton {...componentProps} />}
        {page === "Billing" && (
          <button type="submit" className={styles.bill}>
            Continue to Shipping
          </button>
        )}
      </div>
    </form>
  );
};

export default CheckoutBody;
