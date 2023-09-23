import "./FoodCard.css";

const Foodcard = ({ food, addToCartHandler }) => {
  const {
    idMeal,
    strMeal,
    strCategory,
    strInstructions,
    strMealThumb,
    price = 100,
  } = food;

  return (
    <div className="food-card">
      <div className="food-img">
        <img src={strMealThumb} alt={strCategory} />
      </div>
      <div className="food-des">
        <h3>{strMeal}</h3>
        <p>
          {strInstructions ? strInstructions.slice(0, 150) : "Data not found!"}
        </p>
        <div className="card-btn">
          <button onClick={() => addToCartHandler(food)}>Add to cart</button>
          <button>Bookmark</button>
        </div>
      </div>
    </div>
  );
};

export default Foodcard;
