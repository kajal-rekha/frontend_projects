import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Foodcard from "../Foodcard/Foodcard";
import "./Home.css";

const Home = () => {
  const [search, setSearch] = useState("");
  const [foods, setFoods] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => res.json())
      .then((data) => setFoods(data?.meals));
  }, [search]);

  const addToCartHandler = (food) => {
    const isItemInCart = cart.some((item) => item.idMeal === food.idMeal);
    if (!isItemInCart) {
      setCart([...cart, food]);
    }
  };

  const removeFromCartHandler = (foodToRemove) => {
    const newCart = cart.filter((food) => food.idMeal !== foodToRemove.idMeal);
    setCart(newCart);
  };

  return (
    <section className="home">
      <div className="search-bar">
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          placeholder="Search recipe here..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="food-section">
        <div className="food-container">
          {foods.map((food) => (
            <Foodcard
              key={food.idMeal}
              food={food}
              addToCartHandler={addToCartHandler}
            />
          ))}
        </div>
        <div className="food-cart">
          <Cart cart={cart} removeFromCartHandler={removeFromCartHandler} />
        </div>
      </div>
    </section>
  );
};

export default Home;
