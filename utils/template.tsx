import * as React from "react";
import { formatter } from "./helper";
import { CartType } from "./data";

interface EmailTemplateProps {
  name: string;
  pickupMethod: string;
  pickup: number;
  address: string;
  state: string;
  phoneNumber: string;
  total: number;
  cartItems: CartType[];
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, phoneNumber, pickup, pickupMethod, address, state, total, cartItems }) => (
  <div>
    <h1>New Order</h1>
    <p>Dear Lenas,</p>
    <p>
      <strong>${name}</strong> just made a new order with <strong>${pickupMethod}</strong> and paid <strong>${formatter(pickup)}</strong> for shipping to:
    </p>
    <p>
      <strong>
        ${address}, ${state}
      </strong>
    </p>
    <p>
      <strong>${phoneNumber}</strong>
    </p>

    <h2>Order Details:</h2>
    <ul>
      $
      {cartItems
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
  </div>
);
