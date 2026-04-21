
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Stock Pulse Predictor',
    category: 'Fintech Analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    description: 'A predictive dashboard analyzing financial markets and forecasting stock market trends.',
    link: 'https://github.com/SabonaWaktole/stock-pulse-predictor'
  },
  {
    id: 2,
    title: 'AI chat assistant',
    category: 'Development',
    image: 'https://plus.unsplash.com/premium_photo-1725985758385-d5462d6e7f50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'An AI integrated chat assistant bot.',
    link: 'https://github.com/SabonaWaktole/GenAIChatBot'
  },
  {
    id: 3,
    title: 'SaaS Blog Post',
    category: 'SaaS Frontend',
    image: 'https://images.unsplash.com/photo-1704969724330-54510439bdaa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Connecting people globally with real-time features.',
    link: 'https://github.com/SabonaWaktole/blog-post-saas-frontend'
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <h2>Selected <span className="text-gradient">Work</span></h2>
          <p>Here are a few projects I've worked on recently. Want to see more? Email me.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={project.id} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-overlay">
                  <span className="project-category">{project.category}</span>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">View Project &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
