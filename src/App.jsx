import { useEffect, useState } from 'react';
import './App.css'; // This will include your styles

function App() {
  const [typingText, setTypingText] = useState('Web Developer');

  return (
    <div className="App">
      <header>
        <a href="#" className="logo"></a>
        <nav>
          <a href="#" className="active">Home</a>
          <a href="#">Services</a>
          <a href="#">Skills</a>
          <a href="#">Education</a>
          <a href="#">Experience</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      <section className="home">
        <div className="home-img">
          <img src="https://avatars.githubusercontent.com/u/187540760?v=4" alt="Anirudh" />
        </div>
        <div className="home-content">
          <h1>Hi, I'm <span>Anirudh</span></h1>
          <h3 className="typing-text">I'm a <span></span></h3>
          <p>Currently in Development</p>
          <p>I'm a passionate web developer who loves creating beautiful and functional websites.</p>
          <p>I enjoy working with new technologies.</p>
          <p>Building impactful solutions that make a difference is what drives me every day.</p>
          <div className="social-icons">
            <a href="https://discord.gg/8c7p2eJfKy"><i className="fa-brands fa-discord"></i></a>
            <a href="https://github.com/ItsYourARZ"><i className="fa-brands fa-github"></i></a>
            <a href="https://open.spotify.com/user/31fqmjj657zn7lrqcb7b22a5y7tu?si=dc1d0ba0c0fb493a"><i className="fa-brands fa-spotify"></i></a>
          </div>
        </div>

        <section class="skills">
        <div class="skill-card">
            <div class="icon"><i class="fa fa-code"></i></div>
            <h3>Web Development</h3>
            <p>I build full-stack web applications using the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js, handling everything from the database to the user interface.</p>
        </div>
        <div class="skill-card">
            <div class="icon"><i class="fa fa-database"></i></div>
            <h3>Backend Development</h3>
            <p>Expert at server-side logic, database management, API creation, and ensuring smooth integration between frontend and backend systems, while optimizing performance, security, and scalability.</p>
        </div>
        <div class="skill-card">
            <div class="icon"><i class="fa fa-pencil-alt"></i></div>
            <h3>UI Design</h3>
            <p>I'm skilled in UI design, with a focus on creating intuitive, visually appealing interfaces. I ensure a seamless user experience by balancing aesthetics with functionality, optimizing design for responsiveness and usability.</p>
        </div>
        <div class="skill-card">
            <div class="icon"><i class="fa fa-paint-brush"></i></div>
            <h3>Painting</h3>
            <p>I'm an adept painter, skilled in various techniques and mediums. I express creativity through vibrant compositions, focusing on detail, emotion, and storytelling to create visually impactful and thought-provoking artworks.</p>
        </div>
        </section>
      </section>
    </div>
  );
}

export default App;
