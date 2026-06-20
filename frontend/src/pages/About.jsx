import "../css/About.css";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-left">

        <h5>ABOUT ME</h5>

        <h2>
          I DON'T JUST SING.
          <br />
          <span>I LIVE THE MUSIC.</span>
        </h2>

        <p>
          Rock is not just a genre. It's a way of life. With a
          powerful voice, high-energy performances, and a
          connection with the crowd, I create moments you'll
          never forget.
        </p>

        <div className="feature-list">

          <div className="feature">
            <div className="feature-icon">🎸</div>

            <div>
              <h4>Powerful Vocals</h4>
              <p>Voice that hits you deep.</p>
            </div>
          </div>

          <div className="feature">
            <div className="feature-icon">🎸</div>

            <div>
              <h4>Stage Presence</h4>
              <p>High energy. Pure rock.</p>
            </div>
          </div>

          <div className="feature">
            <div className="feature-icon">👥</div>

            <div>
              <h4>Crowd Connection</h4>
              <p>Making every show personal.</p>
            </div>
          </div>

        </div>

      </div>

      <div className="about-right">

        <div className="image-box">
          IMAGE HERE
        </div>

      </div>

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

      </div>

    </section>
  );
}

export default About;