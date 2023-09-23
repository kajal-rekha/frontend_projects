const Cart = ({ cart, spentTimes }) => {
  let totalTime = 0;

  for (const data of spentTimes) {
    totalTime = totalTime + data.read_time;
  }
  return (
    <div className="cart">
      <div className="spent-times">
        <h4 className="spent-heading">
          Spent Times on read:
          {totalTime} min
        </h4>
      </div>
      <div className="bookmark-blog">
        <h4>Bookmark Blogs: {cart.length}</h4>
      </div>
      <div className="cart-item">
        {cart.map((item) => (
          <div key={item.id} className="cart-heading">
            <h4>{item.heading_title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
