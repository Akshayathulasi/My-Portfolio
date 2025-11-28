import React from "react";
import "./Home.css";
import mypic1 from "../../images/pic_my.jpg";  // ✔ Correct path

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Hello, I'm <span>Akshaya</span></h1>
          <h2>A Passionate <span>FullStack Developer</span></h2>
          <p>
            I craft elegant, responsive web experiences using modern tools 
            like React, JavaScript, and CSS — blending creativity with clean code.
          </p>
          <button className="cta-btn" onClick={() => window.location.href="#projects"}>
            View My Work
          </button>
        </div>

        <div className="hero-image">
          <img src={mypic1} alt="developer" />
        </div>
      </section>
    </div>
  );
}

export default Home;
