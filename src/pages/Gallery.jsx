// import "../css/Gallery.css";

// function Gallery() {
//   const images = [
//     "IMAGE 1",
//     "IMAGE 2",
//     "IMAGE 3",
//     "IMAGE 4",
//     "IMAGE 5",
//     "IMAGE 6",
//     "IMAGE 7",
//     "IMAGE 8"
//   ];

//   return (
//     <section className="gallery-section" id="gallery">

//       <h2>GALLERY</h2>
//       <p>Captured moments, forever memories.</p>

//       <div className="gallery-filter">
//         <button className="active">ALL</button>
//         <button>CONCERTS</button>
//         <button>BACKSTAGE</button>
//         <button>PARTIES</button>
//         <button>FANS</button>
//       </div>

//       <div className="gallery-grid">
//         {images.map((item, index) => (
//           <div className="gallery-card" key={index}>
//             {item}
//           </div>
//         ))}
//       </div>

//     </section>
//   );
// }

// export default Gallery;


import { useState } from "react";
import "../css/Gallery.css";

function Gallery() {

  const images = Array.from(
    { length: 80 },
    (_, index) => `IMAGE ${index + 1}`
  );

  const [visibleCount, setVisibleCount] = useState(8);

  const loadMore = () => {
    setVisibleCount(visibleCount + 8);
  };

  return (
    <section className="gallery-section" id="gallery">

      <h2>GALLERY</h2>
      <p>Captured moments, forever memories.</p>

      <div className="gallery-filter">
        <button className="active">ALL</button>
        <button>CONCERTS</button>
        <button>BACKSTAGE</button>
        <button>PARTIES</button>
        <button>FANS</button>
      </div>

      <div className="gallery-grid">

        {images
          .slice(0, visibleCount)
          .map((item, index) => (

            <div
              className="gallery-card"
              key={index}
            >
              {item}
            </div>

          ))}

      </div>

      {visibleCount < images.length && (
        <button
          className="load-more-btn"
          onClick={loadMore}
        >
          LOAD MORE
        </button>
      )}

    </section>
  );
}

export default Gallery;