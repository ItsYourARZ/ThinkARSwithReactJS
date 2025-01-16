import React, { useState } from "react";
import "./App.css"; // Import your CSS

const App = () => {
  // State for active navigation link
  const [activeLink, setActiveLink] = useState("Home");

  // Handle navigation link click
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      <header>
        <a href="#" className="logo"></a>
        <nav>
          <a
            href="#home"
            className={activeLink === "Home" ? "active" : ""}
            onClick={() => handleLinkClick("Home")}
          >
            Home
          </a>
          <a
            href="#"
            className={activeLink === "Services" ? "active" : ""}
            onClick={() => handleLinkClick("Services")}
          >
            Services
          </a>
          <a
            href="#"
            className={activeLink === "Skills" ? "active" : ""}
            onClick={() => handleLinkClick("Skills")}
          >
            Skills
          </a>
          <a
            href="#"
            className={activeLink === "Education" ? "active" : ""}
            onClick={() => handleLinkClick("Education")}
          >
            Education
          </a>
          <a
            href="#"
            className={activeLink === "Experience" ? "active" : ""}
            onClick={() => handleLinkClick("Experience")}
          >
            Experience
          </a>
          <a
            href="#"
            className={activeLink === "Contact" ? "active" : ""}
            onClick={() => handleLinkClick("Contact")}
          >
            Contact
          </a>
        </nav>
      </header>

      <section className="home">
        <div className="home-img">
          <img src="main.jpg" alt="" />
        </div>
        <div className="home-content">
          <h1>
            Hi, I'm <span>Anirudh</span>
          </h1>
          <h3 className="typing-text">
            I'm a <span></span>
          </h3>
          <p><sl>**</sl>Undergoing Development<sl>**</sl></p>
          <p>I'm a passionate web developer who loves creating beautiful and functional websites.</p>
          <p>I enjoy working with new technologies.</p>
          <p>Building impactful solutions that make a difference is what drives me every day.</p>

          <div className="social-icons">
            <a href="https://discord.com/invite/YEhUTjdHXk"><i className="fa-brands fa-discord"></i></a>
            <a href="https://github.com/ItsYourARZ/"><i className="fa-brands fa-github"></i></a>
            <a href="https://open.spotify.com/user/31fqmjj657zn7lrqcb7b22a5y7tu?si=cca64c177e5e43d0"><i className="fa-brands fa-spotify"></i></a>
          </div>
        </div>
      </section>

      <section className="services" id="services">

      </section>
    </div>
  );
};

export default App;
