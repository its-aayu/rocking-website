import "../css/Video.css";

function Video() {
  const videos = [
    "Live in Delhi",
    "House Party Vibes",
    "College Fest Delhi",
    "Rock Night Delhi",
    "Club Show Goa",
    "Sangeet Night"
  ];

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

      <div className="video-grid">
        {videos.map((video, index) => (
          <div className="video-card" key={index}>

            <div className="video-frame">
              ▶
            </div>

            <h4>{video}</h4>

          </div>
        ))}
      </div>

      <button className="load-btn">
        LOAD MORE
      </button>

    </section>
  );
}

export default Video;