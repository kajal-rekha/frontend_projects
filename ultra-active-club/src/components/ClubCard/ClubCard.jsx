import { useState } from "react";
import "./ClubCard.css";

const ClubCard = ({ blog, addToListHandler }) => {
  const [isAdded, setIsAdded] = useState(false);

  const { name, image, category, description, age, time_required } = blog;

  const colorChangeHandler = () => {
    addToListHandler(blog);
    setIsAdded(!isAdded);
  };

  const buttonText = isAdded ? "added" : "Add to list";
  const buttonColor = isAdded ? "added-color" : "add-list-btn";
  return (
    <div className="club-card">
      <img src={image} alt={category} className="club-img" />

      <div className="club-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <p className="age">For age: {age}</p>
        <p className="time">Time required: {time_required}</p>
        <button onClick={colorChangeHandler} className={buttonColor}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ClubCard;
