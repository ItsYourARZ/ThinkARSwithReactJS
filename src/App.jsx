import React from "react";
import "./index.css";
import profileImage from "https://avatars.githubusercontent.com/u/187540760?v=4"; // Put your image in the assets folder
import "./components/Home.css";
import "./components/Header.css";

const App = () => {
  return (
    <section className="home">
      <header>
      <a href="#" className="logo">
        Anirudh
      </a>
      <nav className={menuActive ? "active" : ""}>
        <a href="#" className="active">
          Home
        </a>
        <a href="#">Services</a>
        <a href="#">Skills</a>
        <a href="#">Education</a>
        <a href="#">Experience</a>
        <a href="#">Contact</a>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
    </header>
          <div className="home-img">
            <img src={profileImage} alt="Anirudh" />
          </div>
          <div className="home-content">
            <h1>
              Hi, I'm <span>Anirudh</span>
            </h1>
            <h3 className="typing-text">
              I'm a <span></span>
            </h3>
            <p>Currently in Development</p>
            <p>
              I'm a passionate web developer who loves creating beautiful and
              functional websites.
            </p>
            <p>I enjoy working with new technologies.</p>
            <p>
              Building impactful solutions that make a difference is what drives me
              every day.
            </p>
            <div className="social-icons">
              <a href="https://discord.gg/8c7p2eJfKy">
                <i className="fa-brands fa-discord"></i>
              </a>
              <a href="https://github.com/ItsYourARZ">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://open.spotify.com/user/31fqmjj657zn7lrqcb7b22a5y7tu?si=dc1d0ba0c0fb493a">
                <i className="fa-brands fa-spotify"></i>
              </a>
            </div>
          </div>
        </section>
  );
};

export default App;
