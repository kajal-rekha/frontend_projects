import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  });

  const addToCartHandler = (product) => {
    if (cart) {
      setCart([...cart, product]);
    } else {
      setCart([product]);
    }
  };

  return (
    <div className="products-section">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCartHandler={addToCartHandler}
          />
        ))}
      </div>
      <div className="product-cart">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
