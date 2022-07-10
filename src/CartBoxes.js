import React from "react";

const CartBoxes = (props) => {
  const { cart, removeItem } = props;

  const review = cart[0];

  return (
    <div className="cart-items">
      <img className="cart-checkout-img" src={review.avatar} alt={cart.id} />
      <p className="cart-checkout-name">{review.name}</p>
      <p className="cart-checkout-price">${review.price}</p>
      <button className="cart-checkout-btn" onClick={() => removeItem(cart)}>
        x
      </button>
    </div>
  );
};

export default CartBoxes;
