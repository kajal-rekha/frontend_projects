import { useState } from "react";
import "./Cart.css";

const Cart = ({ exerciseTime }) => {
  const [selectedValue, setSelectedValue] = useState(0);

  let totalExerciseTime = 0;

  for (const data of exerciseTime) {
    totalExerciseTime = totalExerciseTime + data.time_required;
  }

  const handleCircleValue = (value) => {
    setSelectedValue(value);
    console.log(value);
  };

  return (
    <div className="cart">
      <div className="user">
        <div className="user-img">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGtt5cbCSflh0WR7u0LmJYuxuyKLzmx1mf_A&usqp=CAU"
            alt="user-image"
          />
        </div>
        <div className="user-name">
          <h4>Zahidul Hasan</h4>
          <p>Sydney Austracila</p>
        </div>
      </div>

      <div className="cart-content">
        <div className="weight-circle">
          <div className="weight">
            <p>
              <span>75</span>kg
            </p>
            <p>Weight</p>
          </div>
          <div className="height">
            <span>6.5</span>
            <p>Height</p>
          </div>
          <div className="age">
            <p>
              <span>25</span>years
            </p>
            <p>Height</p>
          </div>
        </div>
        <div className="break">
          <h4>Add A Breake</h4>
          <div className="circles">
            <div className="circle" onClick={() => handleCircleValue(10)}>
              10s
            </div>
            <div className="circle" onClick={() => handleCircleValue(20)}>
              20s
            </div>
            <div className="circle" onClick={() => handleCircleValue(30)}>
              30s
            </div>
            <div className="circle" onClick={() => handleCircleValue(40)}>
              40s
            </div>
            <div className="circle" onClick={() => handleCircleValue(50)}>
              50s
            </div>
          </div>
        </div>
        <div className="exercise-details">
          <h4> Exercise Details</h4>
          <div className="exercise-time">
            <p className="time">Exercise Time</p>
            <p className="sceconds">{totalExerciseTime} sec</p>
          </div>
          <div className="breake-time">
            <p className="time">Breake Time</p>
            <p className="sceconds">{selectedValue} sec</p>
          </div>
        </div>
        <button className="btn">Activity Completed</button>
      </div>
    </div>
  );
};

export default Cart;
