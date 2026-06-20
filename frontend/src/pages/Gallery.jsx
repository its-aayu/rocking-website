
// import { useState } from "react";
// import "../css/Gallery.css";

// function Gallery() {

//   const images = Array.from(
//     { length: 80 },
//     (_, index) => `IMAGE ${index + 1}`
//   );

//   const [visibleCount, setVisibleCount] = useState(8);

//   const loadMore = () => {
//     setVisibleCount(visibleCount + 8);
//   };

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

//         {images
//           .slice(0, visibleCount)
//           .map((item, index) => (

//             <div
//               className="gallery-card"
//               key={index}
//             >
//               {item}
//             </div>

//           ))}

//       </div>

//       {visibleCount < images.length && (
//         <button
//           className="load-more-btn"
//           onClick={loadMore}
//         >
//           LOAD MORE
//         </button>
//       )}

//     </section>
//   );
// }

// export default Gallery;


// import { useState } from "react";
// import "../css/Gallery.css";

// function Gallery() {

//   const [showAll, setShowAll] = useState(false);

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

//       {/* Moving Row 1 */}

//       <div className="gallery-slider">

//         <div className="gallery-track row1">

//           <div className="gallery-card">IMAGE 1</div>
//           <div className="gallery-card">IMAGE 2</div>
//           <div className="gallery-card">IMAGE 3</div>
//           <div className="gallery-card">IMAGE 4</div>
//           <div className="gallery-card">IMAGE 5</div>

//           <div className="gallery-card">IMAGE 1</div>
//           <div className="gallery-card">IMAGE 2</div>
//           <div className="gallery-card">IMAGE 3</div>
//           <div className="gallery-card">IMAGE 4</div>
//           <div className="gallery-card">IMAGE 5</div>

//         </div>

//       </div>

//       {/* Moving Row 2 */}

//       <div className="gallery-slider">

//         <div className="gallery-track row2">

//           <div className="gallery-card">IMAGE 6</div>
//           <div className="gallery-card">IMAGE 7</div>
//           <div className="gallery-card">IMAGE 8</div>
//           <div className="gallery-card">IMAGE 9</div>
//           <div className="gallery-card">IMAGE 10</div>

//           <div className="gallery-card">IMAGE 6</div>
//           <div className="gallery-card">IMAGE 7</div>
//           <div className="gallery-card">IMAGE 8</div>
//           <div className="gallery-card">IMAGE 9</div>
//           <div className="gallery-card">IMAGE 10</div>

//         </div>

//       </div>

//       {!showAll && (
//         <button
//           className="load-more-btn"
//           onClick={() => setShowAll(true)}
//         >
//           LOAD MORE
//         </button>
//       )}

//       {showAll && (

//         <div className="masonry-gallery">

//           {Array.from({ length: 80 }, (_, i) => (

//             <div
//               key={i}
//               className={`masonry-item size-${(i % 6) + 1}`}
//             >
//               IMAGE {i + 1}
//             </div>

//           ))}

//         </div>

//       )}

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

  const [showGallery, setShowGallery] = useState(false);
  const [visibleImages, setVisibleImages] = useState(10);

  return (
    <section className="gallery-section" id="gallery">

      <h2>GALLERY</h2>

      <p>
        Captured moments, forever memories.
      </p>

      <div className="gallery-filter">

        <button className="active">
          ALL
        </button>

        <button>
          CONCERTS
        </button>

        <button>
          BACKSTAGE
        </button>

        <button>
          PARTIES
        </button>

        <button>
          FANS
        </button>

      </div>

      {/* MOVING ROW 1 */}

      <div className="gallery-slider">

        <div className="gallery-track row1">

          <div className="gallery-card">IMAGE 1</div>
          <div className="gallery-card">IMAGE 2</div>
          <div className="gallery-card">IMAGE 3</div>
          <div className="gallery-card">IMAGE 4</div>
          <div className="gallery-card">IMAGE 5</div>

          <div className="gallery-card">IMAGE 1</div>
          <div className="gallery-card">IMAGE 2</div>
          <div className="gallery-card">IMAGE 3</div>
          <div className="gallery-card">IMAGE 4</div>
          <div className="gallery-card">IMAGE 5</div>

        </div>

      </div>

      {/* MOVING ROW 2 */}

      <div className="gallery-slider">

        <div className="gallery-track row2">

          <div className="gallery-card">IMAGE 6</div>
          <div className="gallery-card">IMAGE 7</div>
          <div className="gallery-card">IMAGE 8</div>
          <div className="gallery-card">IMAGE 9</div>
          <div className="gallery-card">IMAGE 10</div>

          <div className="gallery-card">IMAGE 6</div>
          <div className="gallery-card">IMAGE 7</div>
          <div className="gallery-card">IMAGE 8</div>
          <div className="gallery-card">IMAGE 9</div>
          <div className="gallery-card">IMAGE 10</div>

        </div>

      </div>

      {/* FIRST LOAD MORE BUTTON */}

      {!showGallery && (

        <button
          className="load-more-btn"
          onClick={() => setShowGallery(true)}
        >
          LOAD MORE
        </button>

      )}

      {/* FULL GALLERY */}

      {showGallery && (

        <>
          <div className="masonry-gallery">

            {images
              .slice(0, visibleImages)
              .map((image, index) => (

                <div
                  key={index}
                  className={`masonry-item size-${(index % 6) + 1}`}
                >
                  {image}
                </div>

              ))}

          </div>

          {visibleImages < images.length && (

            <button
              className="load-more-btn"
              onClick={() =>
                setVisibleImages(visibleImages + 10)
              }
            >
              LOAD 10 MORE
            </button>

          )}

        </>

      )}

    </section>
  );
}

export default Gallery;