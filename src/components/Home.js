import React from 'react';
import '../styles/Home.css'; // Ensure the path is correct

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <div className="text-section">
          <h1>Hey, I'm Santosh Guntuka</h1>
          <p>Software Developer</p>
          <a
            href={`${process.env.PUBLIC_URL}/santoshguntuka_resume.pdf`}
            download="santosh_guntuka_Resume.pdf"
            className="btn-resume"
          >
            Download Resume
          </a>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/santoshguntuka"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/linkedin-icon.png`}
                alt="LinkedIn"
                className="social-icon"
              />
            </a>
            <a
              href="https://github.com/santoshguntuka"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/github-icon.png`}
                alt="GitHub"
                className="social-icon"
              />
            </a>
          </div>
        </div>
        <div className="image-section">
          <img
            src={`${process.env.PUBLIC_URL}/1577159321637.jpeg`}
            alt="Santosh Guntuka"
            className="profile-img"
          />
        </div>
        {/* Chrome Extension section */}
        <div className="chrome-extension-section">
          <p>Check out my Chrome extension!</p>
          <a
            href="https://chromewebstore.google.com/detail/article-vault/kgnmgmnoanljhgenpjphamjlpcadbmim" // Replace with your actual link
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${process.env.PUBLIC_URL}/images.jpeg`} // Replace with your image path
              alt="Chrome Extension"
              className="chrome-extension-img"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
