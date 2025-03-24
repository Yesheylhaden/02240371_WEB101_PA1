import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="spotify-clone">
      <header className="spotify-header">
        <div className="spotify-logo">
          <img src="/logo.png" alt="Spotify Logo" />
        </div>
        <nav className="spotify-nav">
          <button className="nav-home">🏠</button>
          <input
            type="text"
            className="search-bar"
            placeholder="What do you want to play?"
          />
        </nav>
        <div className="spotify-auth">
          <a href="#">Premium</a>
          <a href="#">Support</a>
          <a href="#">Download</a>
          <a href="#">Sign up</a>
          <button className="login-btn">Log in</button>
        </div>
      </header>

      <div className="spotify-body">
        <aside className="spotify-sidebar">
          <h3>Your Library</h3>
          <div className="playlist-box">
            <h4>Create your first playlist</h4>
            <p>It's easy, we'll help you</p>
            <button>Create playlist</button>
          </div>
          <div className="podcast-box">
            <h4>Let's find some podcasts to follow</h4>
            <p>We'll keep you updated on new episodes</p>
            <button>Browse podcasts</button>
          </div>
          <div className="footer-links">
            <a href="#">Legal</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies</a>
            <a href="#">About Ads</a>
            <a href="#">Accessibility</a>
            <div className="language-btn">🌐 English</div>
          </div>
        </aside>

        <main className="spotify-main">
          <section className="trending-section">
            <h2>Trending songs</h2>
            <div className="song-cards">
              <div className="song-card">
                <img src="/blue.png" alt="song" />
                <h4>blue</h4>
                <p>yung kai</p>
              </div>
              <div className="song-card">
                <img src="/smile.png" alt="song" />
                <h4>Die With A Smile</h4>
                <p>Lady Gaga, Bruno Mars</p>
              </div>
              <div className="song-card">
                <img src="/likejinnie.png" alt="song" />
                <h4>like JENNIE</h4>
                <p>JENNIE</p>
              </div>
              <div className="song-card">
                <img src="/likeFather.png" alt="song" />
                <h4>BIRDS OF A FEATHER</h4>
                <p>Billie Eilish</p>
              </div>
              <div className="song-card">
                <img src="/anxiety.png" alt="song" />
                <h4>Anxiety</h4>
                <p>Doechii</p>
              </div>
              <div className="song-card">
                <img src="/ranjan.png" alt="song" />
                <h4>Raanjhan (From "Do Patti")</h4>
                <p>Sachet-Parampara</p>
              </div>
              <div className="song-card">
                <img src="/mawongpa.png" alt="song" />
                <h4>Mawongpa</h4>
                <p>Rebellions Bhutan</p>
              </div>
            </div>
          </section>

          <section className="artists-section">
            <h2>Popular artists</h2>
            <div className="artist-cards">
              <div className="artist-card">
                <img src="/Billie.png" alt="artist" />
                <p>Billie Eilish</p>
              </div>
              <div className="artist-card">
                <img src="/Lady.png" alt="artist" />
                <p>Lady Gaga</p>
              </div>
              <div className="artist-card">
                <img src="/Kendrick.png" alt="artist" />
                <p>Kendrick Lamar</p>
              </div>
              <div className="artist-card">
                <img src="/Weekend.png" alt="artist" />
                <p>The Weeknd</p>
              </div>
              <div className="artist-card">
                <img src="/Rebellions.png" alt="artist" />
                <p>Rebellions Bhutan</p>
              </div>
              <div className="artist-card">
                <img src="/yuki.png" alt="artist" />
                <p>yung kai</p>
              </div>
              <div className="artist-card">
                <img src="/rose.png" alt="artist" />
                <p>ROSÉ</p>
              </div>
            </div>
          </section>

          <section className="artists-section">
            <h2>Trending Albums</h2>
            <div className="artist-cards">
              <div className="artist-card">
                <img src="/Billie.png" alt="artist" />
                <p>Billie Eilish</p>
              </div>
              <div className="artist-card">
                <img src="/Lady.png" alt="artist" />
                <p>Lady Gaga</p>
              </div>
              <div className="artist-card">
                <img src="/Kendrick.png" alt="artist" />
                <p>Kendrick Lamar</p>
              </div>
              <div className="artist-card">
                <img src="/Weekend.png" alt="artist" />
                <p>The Weeknd</p>
              </div>
              <div className="artist-card">
                <img src="/Rebellions.png" alt="artist" />
                <p>Rebellions Bhutan</p>
              </div>
              <div className="artist-card">
                <img src="/yuki.png" alt="artist" />
                <p>yung kai</p>
              </div>
              <div className="artist-card">
                <img src="/rose.png" alt="artist" />
                <p>ROSÉ</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
