import "../css/Hero.css";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

function Content() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <h1>
          LIVE LOUD.
          <br />
          <span>FEEL THE ROCK.</span>
        </h1>

        <p>
          Rock Concerts That Ignite The Stage.
          <br />
          Unforgettable Moments That Stay Forever.
        </p>

        <div className="divider">
          <span>⚡</span>
        </div>

        <h4>ALSO AVAILABLE FOR</h4>

        <h3 className="event-text">
          HOME PARTIES & PRIVATE EVENTS
        </h3>

        <div className="hero-buttons" >

  <Link to="/book-concert">
    <button className="concert-btn">
      BOOK FOR CONCERT
    </button>
  </Link>

  <Link to="/book-home-party">
    <button className="party-btn">
      BOOK FOR HOME PARTY
    </button>
  </Link>

</div>

      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/9718427187"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
      >
        <FaWhatsapp />
      </a>

    </section>
  );
}

export default Content;