import { Link } from "react-router-dom";
import "../css/Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      {" "}
      <div className="logo">
        {" "}
        <span className="logo-icon">⚡</span>{" "}
        <span className="logo-text">AMAN RAJ SRIVASTAVA</span>{" "}
      </div>{" "}
      <ul className="nav-links">
        {" "}
        <li>
          <Link to="/">HOME</Link>
        </li>{" "}
        <li>
          <Link to="/about">ABOUT</Link>
        </li>{" "}
        <li>
          <Link to="/services">SERVICES</Link>
        </li>{" "}
        <li>
          <Link to="/gallery">GALLERY</Link>
        </li>{" "}
        <li>
          <Link to="/videos">VIDEOS</Link>
        </li>{" "}
        <li>
          <Link to="/reviews">REVIEWS</Link>
        </li>{" "}
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>{" "}
      </ul>{" "}
      {/* <button className="book-btn"> BOOK NOW </button>{" "} */}
      <Link to="/book-now">
  <button className="book-btn">
    BOOK NOW
  </button>
</Link>
    </nav>
  );
}
export default Navbar;

