import { useEffect, useState } from "react";
import Cart from "./Cart";
import KnowledgeCard from "./KnowledgeCard";

const Home = () => {
  const [knowledgeData, setKnowledgeData] = useState([]);
  const [cart, setCart] = useState([]);
  const [spentTimes, setSpentTimes] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setKnowledgeData(data));
  });

  const markAsReadHandler = (data) => {
    const isItemInCart = cart.find((item) => item.id === data.id);
    if (isItemInCart) {
      return alert("Data already added!");
    } else {
      setCart([...cart, data]);
    }
  };

  const spentTimesHandler = (data) => {
    if (spentTimes) {
      setSpentTimes([...spentTimes, data]);
    } else {
      setSpentTimes([data]);
    }
  };

  return (
    <div className="knowledge-cafe-container ">
      <div className="knowledge-cafe-left">
        {knowledgeData?.map((data) => (
          <KnowledgeCard
            key={data.id}
            data={data}
            markAsReadHandler={markAsReadHandler}
            spentTimesHandler={spentTimesHandler}
          />
        ))}
      </div>
      <div className="knowledge-cafe-cart">
        <Cart cart={cart} spentTimes={spentTimes} />
      </div>
    </div>
  );
};

export default Home;
