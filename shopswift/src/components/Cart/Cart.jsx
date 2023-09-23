import "./Cart.css";

const Cart = ({ cart }) => {
  console.log(cart);

  let totalPrice = 0;
  let shipping = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    shipping = shipping + product.shipping;
  }

  const tax = (totalPrice * 3) / 100;
  const grandTotal = totalPrice + shipping + tax;
  return (
    <div className="order-cart">
      <h3>Order Summary</h3>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${totalPrice} </p>
      <p>Shipping: ${shipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <p>Grand Total Price: ${grandTotal.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
