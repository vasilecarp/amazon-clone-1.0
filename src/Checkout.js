import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://m.media-amazon.com/images/I/71cvRGs+pPL._SX3000_.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
        </div>
      </div>
      <div className="checkout__right">
        <h2>The subtotal will go here</h2>
      </div>
    </div>
  );
}

export default Checkout;
