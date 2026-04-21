import './Resume.css';

const experiences = [
  {
    role: "Junior Software Developer",
    company: "Nordic ICT",
    date: "05/2025 – Present",
    location: "Remote"
  },
  {
    role: "Mobile App Developer Intern",
    company: "Eskalate",
    date: "07/2025 – Present",
    location: "Hybrid"
  }
];

const education = [
  {
    degree: "BSc in Computer Science and Engineering",
    institution: "Adama Science and Technology University",
    date: "09/2022 – Present",
    location: "Adama, Ethiopia"
  },
  {
    degree: "Software Development & Programming",
    institution: "African to Silicon Valley",
    date: "01/2025 – 12/2025",
    location: "Adama, Ethiopia"
  },
  {
    degree: "Cloud Computing (AWS)",
    institution: "ALX Africa",
    date: "03/2025 – 01/2026",
    location: "Remote"
  }
];

const Resume = () => {
  return (
    <section className="resume" id="experience">
      <div className="container">
        <div className="section-header">
          <h2>My <span className="text-gradient">Journey</span></h2>
          <p>A brief look at my professional experience and educational background.</p>
        </div>

        <div className="resume-grid">
          <div className="resume-column">
            <h3 className="resume-column-title">Experience</h3>
            <div className="resume-timeline">
              {experiences.map((exp, index) => (
                <div className="resume-item" key={index}>
                  <div className="resume-item-marker"></div>
                  <div className="resume-item-content">
                    <span className="resume-date">{exp.date}</span>
                    <h4>{exp.role}</h4>
                    <h5>{exp.company} <span>• {exp.location}</span></h5>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-column">
            <h3 className="resume-column-title">Education</h3>
            <div className="resume-timeline">
              {education.map((edu, index) => (
                <div className="resume-item" key={index}>
                  <div className="resume-item-marker"></div>
                  <div className="resume-item-content">
                    <span className="resume-date">{edu.date}</span>
                    <h4>{edu.degree}</h4>
                    <h5>{edu.institution} <span>• {edu.location}</span></h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
