import { useEffect, useState } from 'react';
import './App.css'; // This will include your styles

function App() {
  const [typingText, setTypingText] = useState('Web Developer');

  useEffect(() => {
    const interval = setInterval(() => {
      setTypingText((prev) => {
        const words = ['Web Developer', 'Web Designer', 'Web Learner'];
        const currentIndex = words.indexOf(prev);
        return words[(currentIndex + 1) % words.length];
      });
    }, 5000); // Change text every 5 seconds
    return () => clearInterval(interval); // Clean up the interval
  }, []);

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
          <h3 className="typing-text">{typingText}</h3>
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
      </section>
    </div>
  );
}

export default App;
