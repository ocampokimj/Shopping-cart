import CartBoxes from "./CartBoxes";

const Cart = (props) => {
  const { carts, removeItem } = props;

  let subTotal = 0;
  const tax = 7.25;

  const thankYouPopUp = () => {
    alert("Thank you for shopping!");
  };

  for (let i = 0; i < carts.length; i++) {
    let cart = carts[i];
    subTotal += cart[0].price; //adding items to the subtotal
  };
  
  let taxTotal = (subTotal / 100) * tax; //converting subtotal + presumed tax %
  let taxRounded = Math.round(taxTotal * 100) / 100; //rounding total to neaest te

  let total = subTotal + taxRounded;

  return (
    <div className="Cart">
      <div className="cart-title">CART</div>
      <div className="cart-container">
        <div className="cart-review">
          {carts.map((cart) => (
            <CartBoxes
              removeItem={removeItem}
              carts={carts}
              cart={cart}
              thankYouPopUp={thankYouPopUp}
            />
          ))}
        </div>
        <div className="cart-overview">
          <div className="checkout-msg">Ready to check out?</div>
          <div className="checkout-subtotal">subtotal - ${subTotal}</div>
          <div className="checkout-shipping">tax - ${taxRounded}</div>
          <div className="checkout-total">total - ${total}</div>
          <button className="checkout-btn" onClick={() => thankYouPopUp()}>
            checkout
          </button>
        </div>
      </div>
    </div>
  );
};
//
export default Cart;
