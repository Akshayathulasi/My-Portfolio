import React from "react";
import "./About.css";
import mypic from "../../images/pic1_my.jpg";

function About() {
  return (
    <div className="about-container">
      <section className="about-section">
        <div className="about-image">
          <img src={mypic} alt="developer" />
        </div>

        <div className="about-text">
          <h2>Who I Am</h2>
<p>
  I’m Akshaya — a frontend developer with a strong focus on clean UI and smooth user experience. <br />
  I enjoy transforming ideas into interactive and user-friendly web applications. <br />
  My aim is to build modern, efficient, and intuitive interfaces that users enjoy using. <br />
  I believe in continuous learning and consistently explore new technologies to enhance my skills.
</p>




          {/* 🔽 Download Resume Button */}
          <a className="about-btn" href="/Akshayats_resume.pdf" download>
            Download Resume
          </a>

          

        </div>
      </section>
    </div>
  );
}

export default About;
