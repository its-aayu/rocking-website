import "../css/Hero.css";
import hero from "../assets/hero.png";
import { Link } from "react-router-dom";
function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          LIVE LOUD.<br />
          <span>ROCK HARD.</span>
        </h1>

        <p>
          From massive rock concerts to unforgettable events.
        </p>

        <div className="hero-btns">
          <button>Book Concert</button>
          <button className="outline">Book Party</button>
        </div>
        <div className="hero-btns">
  <Link to="/book-concert">
    <button>Book Concert</button>
  </Link>

  <Link to="/book-home-party">
    <button className="outline">
      Book Party
    </button>
  </Link>
</div>
      </div>

      <div className="hero-image">
        <img src={hero} alt="" />
      </div>
    </section>
  );
}

export default Home;