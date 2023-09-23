import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <li>
          <a href="#">Savory</a>
        </li>
      </div>
      <ul className="menu-items">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Meals</a>
        </li>
        <li>
          <a href="#">Order</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
