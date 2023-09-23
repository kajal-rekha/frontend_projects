import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav>
        <div className="logo">
          <a href="#">Ultra active club</a>
        </div>
        <div className="profile">
          <div className="profile-img">
            <img
              src="https://www.prageru.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fqnesrjodfi80%2F2Qh5riP9uq8IUt1QWl9y0x%2F2fe20a630299efb2a31ed352bc1fe3e4%2FIMG_2700.jpg.png%3Ff%3Dfaces&w=256&q=75"
              alt="profile-image"
            />
          </div>
          <div className="profile-address">
            <h4>Zahid Hossain</h4>
            <p>Sydney, Austrilia</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
