

import "../css/Artist.css";

function Artist() {
  return (
    <><section className="artist">

          {/* Left Side Frame */}
          <div className="artist-frame">
              <div className="red-brush"></div>

              <div className="placeholder-text">
                  SINGER IMAGE
              </div>
          </div>

          {/* Right Side Content */}
          <div className="artist-content">

              <h5>ABOUT ME</h5>

              <h2>
                  I DON'T JUST SING,
                  <br />
                  <span>I LIVE THE MUSIC.</span>
              </h2>

              <p>
                  Rock is not just a genre, it's an emotion.
                  With a powerful voice, high-energy performances,
                  and a connection with the crowd, I create moments
                  you'll never forget.
              </p>

              <div className="artist-cards">

                  <div className="artist-card">
                      <div className="icon">🎤</div>

                      <h4>Powerful Vocals</h4>

                      <p>
                          Voice that hits
                          <br />
                          you deep.
                      </p>
                  </div>

                  <div className="artist-card">
                      <div className="icon">🎸</div>

                      <h4>Rock Performer</h4>

                      <p>
                          High energy.
                          <br />
                          Pure stage presence.
                      </p>
                  </div>

                  <div className="artist-card">
                      <div className="icon">👥</div>

                      <h4>Crowd Connection</h4>

                      <p>
                          Making every show
                          <br />
                          personal.
                      </p>
                  </div>

              </div>

              <button className="artist-btn">
                  KNOW MORE ABOUT ME
              </button>

          </div>




      </section>
      
      <div className="stats-container">

              <div className="stat-box">
                  <h3>250+</h3>
                  <span>LIVE SHOWS</span>
              </div>

              <div className="stat-box">
                  <h3>100K+</h3>
                  <span>HAPPY FANS</span>
              </div>

              <div className="stat-box">
                  <h3>8+</h3>
                  <span>YEARS OF MUSIC</span>
              </div>

              <div className="stat-box">
                  <h3>50+</h3>
                  <span>CITIES ROCKED</span>
              </div>

          </div></>




   
  );
}

export default Artist;