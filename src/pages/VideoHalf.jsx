// import { useState } from "react";
// import "../css/VideoHalf.css";
// import { Link } from "react-router-dom";

// function VideoHalf() {

//   const videos = [
//     "Rock Concert - Mumbai",
//     "House Party Vibes",
//     "College Fest Madness",
//     "Rock Night Delhi",
//     "Club Show Goa",
//     "Sangeet Night",
//     "Wedding Performance",
//     "Corporate Event",
//     "Live Stage Show",
//     "Private Party",
//     "Festival Performance",
//     "Music Night",
//     "Concert Live",
//     "College Event",
//     "Club Performance",
//     "Fan Meet",
//     "Award Night",
//     "Acoustic Session"
//   ];

//   const [visible, setVisible] = useState(6);

//   return (
//     <section className="videohalf-section">

//       <h2>
//         WATCH. FEEL. <span>EXPERIENCE.</span>
//       </h2>

//       <p className="subtitle">
//         Live moments that say it all.
//       </p>

//       <div className="videohalf-grid">
//         {videos.slice(0, visible).map((video, index) => (
//           <div className="videohalf-card" key={index}>
//             <div className="play-btn">▶</div>
//             <h4>{video}</h4>
//           </div>
//         ))}
//       </div>

//       {visible < videos.length && (
//         // <button
//         //   className="load-btn"
//         //   onClick={() => setVisible(visible + 6)}
//         // >
//         //   LOAD MORE
//         // </button>
        
        

// <Link to="/videos">
//   <button className="load-btn">
//     LOAD MORE
//   </button>
// </Link>
//       )}

//     </section>
//   );
// }

// export default VideoHalf;

import "../css/VideoHalf.css";
import { Link } from "react-router-dom";

function VideoHalf() {
  return (
    <section className="video-half-section">

      <h2>
        WATCH. FEEL. <span>EXPERIENCE.</span>
      </h2>

      <p className="subtitle">
        Live moments that say it all.
      </p>

      {/* First Row */}
      <div className="video-slider">

        <div className="video-track row1">

          <div className="video-card">▶ Rock Concert</div>
          <div className="video-card">▶ House Party</div>
          <div className="video-card">▶ College Fest</div>
          <div className="video-card">▶ Wedding Show</div>
          <div className="video-card">▶ Club Performance</div>

          <div className="video-card">▶ Rock Concert</div>
          <div className="video-card">▶ House Party</div>
          <div className="video-card">▶ College Fest</div>
          <div className="video-card">▶ Wedding Show</div>
          <div className="video-card">▶ Club Performance</div>

        </div>

      </div>

      {/* Second Row */}
      <div className="video-slider">

        <div className="video-track row2">

          <div className="video-card">▶ Live Stage</div>
          <div className="video-card">▶ Corporate Event</div>
          <div className="video-card">▶ Fan Meet</div>
          <div className="video-card">▶ Music Night</div>
          <div className="video-card">▶ Festival Show</div>

          <div className="video-card">▶ Live Stage</div>
          <div className="video-card">▶ Corporate Event</div>
          <div className="video-card">▶ Fan Meet</div>
          <div className="video-card">▶ Music Night</div>
          <div className="video-card">▶ Festival Show</div>

        </div>

      </div>

      <Link to="/videos">
        <button className="load-btn">
          LOAD MORE
        </button>
      </Link>

    </section>
  );
}

export default VideoHalf;