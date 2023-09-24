import "./Home.css";
import { useEffect, useState } from "react";
import ClubCard from "../ClubCard/ClubCard";
import Cart from "../Cart/Cart";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  });

  return (
    <div className="home">
      <div className="ultra-club-left">
        <div className="logo">
          <a href="#">ULTRA-ACTIVE-CLUB</a>
        </div>
        <h3 className="title">{`Select today's exercise`}</h3>
        <div className="ultra-club">
          {blogs.map((blog) => (
            <ClubCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
      <div className="ultra-club-right">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Home;
