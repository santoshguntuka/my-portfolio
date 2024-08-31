import React from 'react';
import '../styles/Home.css'; // Ensure the path is correct

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <div className="text-section">
          <h1>Hey, I'm Santosh Guntuka</h1>
          <p>Software Developer</p>
<<<<<<< HEAD
          <a href={`${process.env.PUBLIC_URL}/cs.pdf`} download="santosh_guntuka_Resume.pdf" className="btn-resume">
            Download Resume
          </a>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/santoshguntuka" target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/linkedin-icon.png`} alt="LinkedIn" className="social-icon" />
            </a>
            <a href="https://github.com/santoshguntuka" target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/github-icon.png`} alt="GitHub" className="social-icon" />
=======
          <a href="/cs.pdf" download="santosh_guntuka_Resume.pdf" className="btn-resume">Download Resume</a>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/santoshguntuka" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin-icon.png" alt="LinkedIn" className="social-icon" />
            </a>
            <a href="https://github.com/santoshguntuka" target="_blank" rel="noopener noreferrer">
              <img src="/github-icon.png" alt="GitHub" className="social-icon" />
>>>>>>> 7d08da0 (Initial commit)
            </a>
          </div>
        </div>
        <div className="image-section">
<<<<<<< HEAD
          <img src={`${process.env.PUBLIC_URL}/1577159321637.jpeg`} alt="Santosh Guntuka" />
=======
          <img src="/1577159321637.jpeg" alt="Santosh Guntuka" />
>>>>>>> 7d08da0 (Initial commit)
        </div>
      </div>
    </section>
  );
}

export default Home;
<<<<<<< HEAD

=======
>>>>>>> 7d08da0 (Initial commit)
