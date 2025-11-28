import React from "react";
import "./Education.css";

function Education() {
  const educationData = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      college: "Arunachala college of Engineering for women",
      year: "2021 – 2025",
      details: "Focused on frontend development, UI/UX design, and modern JavaScript frameworks.",
    },
    {
      degree: "Higher Secondary Education (12th)",
      college: "L M S Higher Secondary School,Neyyoor",
      year: "2019 – 2021",
      details: "Studied Maths Biology with distinction.",
    },
    {
      degree: "Secondary Education (10th)",
      college: "L M S Higher Secondary School,Neyyoor",
      year: "2018 – 2019",
      details: "Completed foundational studies with excellence in Science and Computer subjects.",
    },
  ];

  return (
     <div className="skill-page">
      <header className="education-header">
        <h1>
          My <span>Education</span>
        </h1>
        <p>
          A journey of academic growth enriched with practical exposure and hands-on learning        </p>
      </header>

      {/* Timeline */}
      <section className="timeline">
        {educationData.map((edu, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{edu.degree}</h3>
              <h4>{edu.college}</h4>
              <span className="year">{edu.year}</span>
              <p>{edu.details}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Footer
      <footer className="education-footer">
        <p>© 2025 Dariha | Designed with 💚 using React</p>
      </footer> */}
    </div>
  );
}

export default Education;
