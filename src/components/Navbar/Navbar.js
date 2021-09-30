import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-flex-1">
          <ul className="navbar-items">
            <li><a href="#about">About</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>

        </div>
        <div className="navbar-flex-2">
          <div className="social-icons">
            <a href="https://github.com/Mohamed-N-Mohamed" target="_blank" rel="noreferrer">
              <img src="images/GitHub-Mark-Light-120px-plus.png" alt="github icon" />

            </a>

            <a href="https://www.linkedin.com/in/mohamed-mohamed-9555b3194" target="_blank" rel="noreferrer">
              <img src="/images/linkedin-3-256.png" alt="github icon" />

            </a>

          </div>
          
        </div>
      </div>
      <div className="navbar-title">
          <div className="title-contaienr">
            <h1 className="title">Mohamed Mohamed</h1>
            <h3 className="sub-title">Front-End Developer</h3>
            <h3 className="locaction">London, UK</h3>
          </div>
        </div>

    </div>
    
  )
}

export default Navbar
