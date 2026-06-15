// import "../css/Video.css";

// function Video() {
//   const videos = [
//     "Live in Delhi",
//     "House Party Vibes",
//     "College Fest Delhi",
//     "Rock Night Delhi",
//     "Club Show Goa",
//     "Sangeet Night"
//   ];

//   return (
//     <section className="video-section" id="videos">

//       <h2>VIDEOS</h2>
//       <p>Some moments that rock!</p>

//       <div className="video-buttons">
//         <button>ALL</button>
//         <button>CONCERTS</button>
//         <button>PARTIES</button>
//         <button>FESTS</button>
//         <button>CLUB SHOWS</button>
//       </div>

//       <div className="video-grid">
//         {videos.map((video, index) => (
//           <div className="video-card" key={index}>

//             <div className="video-frame">
//               ▶
//             </div>

//             <h4>{video}</h4>

//           </div>
//         ))}
//       </div>

//       <button className="load-btn">
//         LOAD MORE
//       </button>

//     </section>
//   );
// }

// export default Video;

import "../css/Video.css";

function Video() {
  return (
    <section className="video-section" id="videos">

      <h2>VIDEOS</h2>
      <p>Some moments that rock!</p>

      <div className="video-buttons">
        <button>ALL</button>
        <button>CONCERTS</button>
        <button>PARTIES</button>
        <button>FESTS</button>
        <button>CLUB SHOWS</button>
      </div>

      {/* First Row */}
      <div className="video-slider">

        <div className="video-track row1">

          <div className="video-card">▶ Live in Delhi</div>
          <div className="video-card">▶ House Party Vibes</div>
          <div className="video-card">▶ College Fest Delhi</div>
          <div className="video-card">▶ Rock Night Delhi</div>
          <div className="video-card">▶ Club Show Goa</div>

          <div className="video-card">▶ Live in Delhi</div>
          <div className="video-card">▶ House Party Vibes</div>
          <div className="video-card">▶ College Fest Delhi</div>
          <div className="video-card">▶ Rock Night Delhi</div>
          <div className="video-card">▶ Club Show Goa</div>

        </div>

      </div>

      {/* Second Row */}
      <div className="video-slider">

        <div className="video-track row2">

          <div className="video-card">▶ Sangeet Night</div>
          <div className="video-card">▶ Wedding Performance</div>
          <div className="video-card">▶ Corporate Event</div>
          <div className="video-card">▶ Festival Show</div>
          <div className="video-card">▶ Fan Meet</div>

          <div className="video-card">▶ Sangeet Night</div>
          <div className="video-card">▶ Wedding Performance</div>
          <div className="video-card">▶ Corporate Event</div>
          <div className="video-card">▶ Festival Show</div>
          <div className="video-card">▶ Fan Meet</div>

        </div>

      </div>

    </section>
  );
}

export default Video;