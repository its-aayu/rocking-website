import { Link } from "react-router-dom";
import "../css/GallayHalf.css";

function GallaryHalf() {
return ( <section className="gallery-half-section">

  <h2>GALLERY</h2>

  <p>
    Captured moments, forever memories.
  </p>

  <div className="gallery-filter">
    <button className="active">ALL</button>
    <button>CONCERTS</button>
    <button>BACKSTAGE</button>
    <button>PARTIES</button>
    <button>FANS</button>
  </div>

  <div className="gallery-grid">

    <div className="gallery-card">IMAGE 1</div>
    <div className="gallery-card">IMAGE 2</div>
    <div className="gallery-card">IMAGE 3</div>
    <div className="gallery-card">IMAGE 4</div>

    <div className="gallery-card">IMAGE 5</div>
    <div className="gallery-card">IMAGE 6</div>
    <div className="gallery-card">IMAGE 7</div>
    <div className="gallery-card">IMAGE 8</div>

  </div>

  <Link to="/gallery">
    <button className="load-more-btn">
      LOAD MORE
    </button>
  </Link>

</section>


);
}

export default GallaryHalf;
