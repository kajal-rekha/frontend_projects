import "./Cart.css";

const Cart = ({ cart, removeFromCartHandler }) => {
  return (
    <div className="cart">
      <h2>Order Cart</h2>
      {cart.map((item) => (
        <div key={item.idMeal} className="cart-item">
          <h3>{item.strMeal}</h3>
          <div className="cart-item-button">
            <button onClick={() => removeFromCartHandler(item)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
