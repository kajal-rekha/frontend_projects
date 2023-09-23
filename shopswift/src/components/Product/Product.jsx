import "./Product.css";

const Product = ({ product, addToCartHandler }) => {
  const {
    id,
    name,
    category,
    price,
    ratings,
    ratingsCount,
    img,
    shipping,
    quantity,
  } = product;
  return (
    <div className="product-card">
      <div className="product-img">
        <img src={img} alt={category} />
      </div>
      <div className="product-des">
        <span>{category}</span>
        <h3>{name}</h3>
        <p>
          <span>Price:</span> {price}
        </p>
        <p>
          <span>Shipping:</span> {shipping}
        </p>
        <button onClick={() => addToCartHandler(product)}>Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
