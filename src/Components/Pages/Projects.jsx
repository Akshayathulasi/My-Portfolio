import React from "react";
import "./Projects.css";
import myimg from "../../images/image1.png";
import img from "../../images/image3.png";
import img1 from "../../images/image4.png";
import img2 from "../../images/image5.png";
import img3 from "../../images/image6.png";
import img4 from "../../images/image7.png";


function Projects() {
  const projects = [
    {
      title: "Cafe Delight Landing Page",
img: myimg, // your café image
desc: "A modern and responsive café website with menu showcase, offers, and booking feature.",
tech: "HTML · CSS · JavaScript",
      link: "#"
    },
    {
      title: "Fake News Detection System",
img: img, // your project image here
desc: "AI-based web application that detects fake news using NLP and machine learning.",
tech: "Python · NLP · Machine Learning",
link: "#"

    },
    {
    title: "Oceanic Dining Experience",
img: img1,
desc: "Immersive UI with animated sea creatures and floating menu cards for seafood lovers.",
tech: "React · Framer Motion · CSS Animations",
link: "#"

    },
    {
      title: "AI Database Querying UI",
img: img2,
desc: "Interactive UI for automated database queries using large language models.",
tech: "React · LLM · API Integration",
link: "#"

    },
    {
      title: "Interactive Art Showcase",
img: img3,
desc: "Dynamic frontend gallery for showcasing art and models with smooth animations.",
tech: "React · CSS Animations · GSAP",
link: "#"

    },
    {
      title: "Animated Cards",
      img: img4,
      desc: "Interactive card design with hover transitions and motion effects.",
      tech: "HTML5 · CSS3 · JavaScript",
      link: "#"
    }
  ];

  return (
    <div className="projects-container">
      {/* Header Section */}
      <header className="projects-header">
        <h1><span>My</span> Projects</h1>
        <p>Some of the featured works that showcase my design, development, and creativity.</p>
      </header>

      {/* Project Grid */}
      <section className="projects-grid">
        {projects.map((project, i) => (
          <div className="project-card" key={i}>
            <div className="project-img">
              <img src={project.img} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <span className="tech">{project.tech}</span>
              <a href={project.link} className="view-btn">View Project</a>
            </div>
          </div>
        ))}
      </section>

      {/* Footer
      <footer className="projects-footer">
        <p>© 2025 MyPortfolio | Built by Dari 💚</p>
      </footer> */}
    </div>
  );
}

export default Projects;