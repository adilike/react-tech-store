import React from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default function Cart() {
  return (
    <section className="py-5">
      {/* Ttile */}
      <div className="container">
        <Title title="your cart items" center />
      </div>
      {/* Cart column in fluid contaniner to span as wide as content */}
      <CartColumns />
      {/* Cart list in fluid contaniner to span as wide as content */}
      <CartList />
      {/* cart totals */}
      <CartTotals />
    </section>
  );
}
