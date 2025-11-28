import React, { useState } from "react";
import "./Skill.css";

const skills = [
  { src: "https://img.icons8.com/color/480/html-5.png", name: "HTML" },
  { src: "https://img.icons8.com/color/480/css3.png", name: "CSS" },
  { src: "https://img.icons8.com/color/480/javascript.png", name: "JavaScript" },
  { src: "https://img.icons8.com/office/480/react.png", name: "React" },
  { src: "https://img.icons8.com/color/480/bootstrap.png", name: "Bootstrap" },
  { src: "https://img.icons8.com/color/480/python--v1.png", name: "Python" },
  { src: "https://img.icons8.com/color/480/django.png", name: "Django" },
  { src: "https://img.icons8.com/color/480/nodejs.png", name: "Node.js" },
  { src: "https://img.icons8.com/color/480/express.png", name: "Express.js" },
  { src: "https://img.icons8.com/color/480/mongodb.png", name: "MongoDB" },
  { src: "https://img.icons8.com/color/480/mysql-logo.png", name: "MySQL" },
  { src: "https://img.icons8.com/color/480/git.png", name: "Git" },
  { src: "https://img.icons8.com/color/480/github.png", name: "GitHub" },
  { src: "https://img.icons8.com/color/480/tailwindcss.png", name: "Tailwind CSS" },
];

const Skills = () => {
  const [rotating, setRotating] = useState(
    Array(skills.length).fill(true) // all cards rotate initially
  );

  const toggleRotation = (index) => {
    setRotating((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index]; // toggle specific card
      return newState;
    });
  };

  return (
    <div className="skill-page">
      <header className="skill-header">
        <h1>
          My <span>Skills</span>
        </h1>
        <p>
          A refined collection of technical competencies, continuously developed to deliver efficient, scalable, and innovative solutions.
        </p>
      </header>

      <div className="skills-gallery">
        {skills.map((skill, i) => (
          <div
            className={`skill-card ${rotating[i] ? "rotate" : ""}`}  // 🔥 important
            key={i}
            onClick={() => toggleRotation(i)}  // 🔥 clicking stops/starts rotation
          >
            <img src={skill.src} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
