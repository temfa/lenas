"use client";
import React, { useRef, useState } from "react";
import styles from "./styles.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppSelector } from "@/redux/store/store";
import Image from "next/image";
import { formatter, generateRandomID } from "@/utils/helper";
// import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { location } from "@/utils/data";
import { useDispatch } from "react-redux";
import { addtoCart, clearCart } from "@/redux/slice/cart";
// import { PaystackButton } from "react-paystack";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/utils/firebase";
import { Payment } from "../payment";
import { clearModalOpen, setModalOpen } from "@/redux/slice/modalOpen";

// import { closePaymentModal, useFlutterwave } from "flutterwave-react-v3";
// import { FlutterwaveConfig } from "flutterwave-react-v3/dist/types";

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
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [state, setState] = useState("");
  const [payment, setPayment] = useState(false);
  const found = cartItems?.find((element) => element.title === "Niacinamide hydrating mask");

  const topRef = useRef<HTMLFormElement | null>(null);

  // const config: FlutterwaveConfig = {
  //   public_key: "FLWPUBK--X",
  //   // public_key: "FLWPUBK_TEST-ff2ac3f21bc90680e45d6898aa2a7a07-X",
  //   tx_ref: Date.now().toString(),
  //   amount: total + pickup,
  //   currency: "NGN",
  //   payment_options: "card,mobilemoney,ussd",
  //   customer: {
  //     email: email,
  //     phone_number: phoneNumber,
  //     name: name,
  //   },
  //   customizations: {
  //     title: "",
  //     description: "",
  //     logo: "",
  //   },
  // };

  // const handleFlutterPayment = useFlutterwave(config);

  const submit: SubmitHandler<FormProps> = (e) => {
    if (pickupMethod === "") toast.error("Pick a shipping method");
    else {
      setPage("Shipping");
      setEmail(e.email);
      setName(`${e.lname} ${e.fname}`);
      setAddress(e.address);
      setState(e.state);
      setPhoneNumber(e.phone);
      // if (typeof window !== "undefined") {
      //   window.scrollTo({ top: 0, behavior: "smooth" });
      // }
      if (topRef.current) {
        //   window.scrollTo({ top: 0, behavior: "smooth" });
        topRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // const makePayment = () => {
  //   handleFlutterPayment({
  //     callback: () => {
  //       closePaymentModal(); // this will close the modal programmatically
  //       toast.success("Payment successful");
  //       reset();
  //       dispatch(clearCart());
  //       setPage("Billing");
  //       setPickup(0);
  //     },
  //     onClose: () => {
  //       // dispatch(clearOrder());
  //       toast.error("Payment Cancelled");
  //     },
  //   });
  // };

  // const publicKey = "pk_live_b99a01c0e6a9702b38a82ab273bfe84ecff44249";

  //   const test = () => {
  //     const emailBody = `
  //   <h1>New Order</h1>
  //   <p>Dear Lenas,</p>
  //   <p><strong>${name}</strong> just made a new order with <strong>${pickupMethod}</strong> and paid <strong>${formatter(pickup)}</strong> for shipping to:</p>
  //   <p><strong>${address}, ${state}</strong></p>

  //   <h2>Order Details:</h2>
  //   <ul>
  //     ${cartItems
  //       ?.map(
  //         (item) => `
  //         <li>
  //           <p><strong>Product Name:</strong> ${item.title}</p>
  //           <p><strong>Quantity:</strong> ${item.count}</p>
  //           <p><strong>Amount:</strong> ${formatter(item.promoPrice)}</p>
  //           <p><strong>Size:</strong> ${item.count || 1}</p>
  //         </li>
  //       `
  //       )
  //       .join("")}
  //   </ul>

  //   <h3>Total Amount Paid: ${formatter(total + pickup)}</h3>

  //   <p>Thank you for your order!</p>
  // `;

  //     const data = {
  //       to: "lenasorganicskincare@gmail.com",
  //       name: "Lenas Organic Skincare",
  //       subject: "New Order",
  //       body: emailBody,
  //     };

  //     const options = {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     };

  //     fetch(`/api/send`, options).then(() => {
  //       toast.success("Payment successful");
  //       reset();
  //       dispatch(clearCart());
  //       setPage("Billing");
  //       setPickup(0);
  //     });
  //   };

  //   const componentProps = {
  //     email,

  //     amount: (total + pickup) * 100,

  //     publicKey,

  //     text: "Place Order",

  //     onSuccess: () => {
  //       const emailBody = `
  //   <h1>New Order</h1>
  //   <p>Dear Lenas,</p>
  //   <p><strong>${name}</strong> just made a new order with <strong>${pickupMethod}</strong> and paid <strong>${formatter(pickup)}</strong> for shipping to:</p>
  //   <p><strong>${address}, ${state}</strong></p>
  //   <p><strong>${phoneNumber}</strong></p>

  //   <h2>Order Details:</h2>
  //   <ul>
  //     ${cartItems
  //       ?.map(
  //         (item) => `
  //         <li>
  //           <p><strong>Product Name:</strong> ${item.title}</p>
  //           <p><strong>Quantity:</strong> ${item.count}</p>
  //           <p><strong>Amount:</strong> ${formatter(item.promoPrice)}</p>
  //           <p><strong>Size:</strong> ${item.count || 1}</p>
  //         </li>
  //       `
  //       )
  //       .join("")}
  //   </ul>

  //   <h3>Total Amount Paid: ${formatter(total + pickup)}</h3>

  //   <p>Thank you for your order!</p>
  // `;

  //       const data = {
  //         to: "lenasorganicskincare@gmail.com",
  //         name: "Lenas Organic Skincare",
  //         subject: "New Order",
  //         body: emailBody,
  //       };

  //       const options = {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(data),
  //       };

  //       fetch(`https://lenasorganicskincare.com/api/send`, options).then(() => {
  //         toast.success("Payment successful");
  //         reset();
  //         dispatch(clearCart());
  //         setPage("Billing");
  //         setPickup(0);
  //       });
  //       const ID = generateRandomID(6);
  //       const docRef = doc(db, "orders", ID);

  //       const payload = {
  //         cart: cartItems,
  //         name,
  //         address,
  //         state,
  //         email,
  //         phoneNumber,
  //         ID,
  //         shipping: pickupMethod,
  //         shippingFee: pickup,
  //       };

  //       setDoc(docRef, payload)
  //         .then(() => {
  //           console.log("Saved successfully");
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //     },
  //     onClose: () => {
  //       toast.error("Payment cancelled");
  //     },
  //   };

  const makePayments = async () => {
    try {
      const emailBody = `
    <h1>New Order</h1>
    <p>Dear Lenas,</p>
    <p><strong>${name}</strong> just made a new order with <strong>${pickupMethod}</strong> and paid <strong>${formatter(pickup)}</strong> for shipping to:</p>
    <p><strong>${address}, ${state}</strong></p>
    <p><strong>${phoneNumber}</strong></p>
  
    <h2>Order Details:</h2>
    <ul>
      ${cartItems
        ?.map(
          (item) => `
          <li>
            <p><strong>Product Name:</strong> ${item.title}</p>
            <p><strong>Quantity:</strong> ${item.count}</p>
            <p><strong>Amount:</strong> ${formatter(item.promoPrice)}</p>
            <p><strong>Size:</strong> ${item.size}</p>
          </li>
        `
        )
        .join("")}
    </ul>
  
    <h3>Total Amount Paid: ${formatter(total + pickup)}</h3>
  
    <p>Thank you for your order!</p>
  `;

      const data = {
        to: "lenasorganicskincare@gmail.com",
        name: "Lenas Organic Skincare",
        subject: "New Order",
        body: emailBody,
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      await fetch(`https://lenasorganicskincare.com/api/send`, options);

      const ID = generateRandomID(6);
      const payload = {
        cart: cartItems,
        name,
        address,
        state,
        email,
        phoneNumber,
        ID,
        shipping: pickupMethod,
        shippingFee: pickup,
        createdAt: new Date(),
      };

      await addDoc(collection(db, "orders"), payload);
      toast.success("Payment successful");
      reset();
      dispatch(clearCart());
      setPage("Billing");
      setPickup(0);
      setPayment(false);
    } catch (error) {
      console.error("Payment failed:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(submit)} ref={topRef}>
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
                    <span>Ikorodu </span>
                  </div>
                  <p>{formatter(3000)}</p>
                </div>
                <div className={styles.pickupSingle}>
                  <div>
                    <input type="radio" name="pickup" onChange={() => setType("International")} />
                    <span>International Delivery(DHL or UPS) </span>
                  </div>
                  <p>Depends on the weight of the products</p>
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
            {!found && (
              <div className={styles.new}>
                <h4>Complete the routine!</h4>
                <div className={styles.lefts}>
                  <Image src="/images/21.jpg" width={150} height={150} alt="Product" />
                  <div className={styles.detailse}>
                    <h3>Niacinamide hydrating mask</h3>
                    <p>{formatter(3000)}</p>
                    <button
                      onClick={() => {
                        const cartDetails = {
                          image: "/images/21.jpg",
                          title: "Niacinamide hydrating mask",
                          description: "For reduction of facial inflammation",
                          size: "",
                          price: 5000,
                          promoPrice: 3000,
                          count: 1,
                        };
                        dispatch(addtoCart(cartDetails));
                      }}>
                      Add to Cart
                    </button>
                  </div>
                </div>
                {/* <div className={styles.right}>
                <Close action={() => dispatch(removeFromCart(item))} />
                <p>{formatter(item.promoPrice * item.count)}</p>
              </div> */}
              </div>
            )}
            {/* <h2 onClick={test}>Test</h2> */}
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
                <div>
                  <Image src={product.image} width={100} height={100} alt="Products" />
                  <p>
                    {product?.title} ({product?.count})
                  </p>
                </div>
                <p>{formatter(product?.promoPrice)} </p>
                {/* <p>QTY: {product?.count}</p> */}
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
        {
          page === "Shipping" && pickupMethod === "Ship" && pickup != 0 && (
            <button
              onClick={() => {
                setPayment(true);
                dispatch(setModalOpen(true));
              }}>
              Place Order
            </button>
          )
          // <PaystackButton {...componentProps} />
        }
        {
          page === "Shipping" && pickupMethod === "Ship" && type === "International" && (
            <button
              onClick={() => {
                setPayment(true);
                dispatch(setModalOpen(true));
              }}>
              Place Order
            </button>
          )
          // <PaystackButton {...componentProps} />
        }
        {
          page === "Shipping" && pickupMethod === "Pickup" && (
            <button
              onClick={() => {
                setPayment(true);
                dispatch(setModalOpen(true));
              }}>
              Place Order
            </button>
          )
          // <PaystackButton {...componentProps} />
        }
        {page === "Billing" && (
          <button type="submit" className={styles.bill}>
            Continue to Shipping
          </button>
        )}
        <Payment
          confirm={makePayments}
          action={() => {
            setPayment(false);
            dispatch(clearModalOpen());
          }}
          state={payment}
          amount={total + pickup}
        />
      </div>
    </form>
  );
};

export default CheckoutBody;
