import "./ClubCard.css";

const ClubCard = ({ blog, addToListHandler }) => {
  const { name, image, category, description, age, time_required } = blog;

  return (
    <div className="club-card">
      <img src={image} alt={category} className="club-img" />

      <div className="club-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <p className="age">For age: {age}</p>
        <p className="time">Time required: {time_required}</p>
        <button onClick={() => addToListHandler(blog)} className="btn">
          Add to list
        </button>
      </div>
    </div>
  );
};

export default ClubCard;
