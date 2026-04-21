
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-card">
          <div className="contact-info">
            <h2>Let's build something <br/><span className="text-gradient">amazing together.</span></h2>
            <p>I'm currently available for freelance projects and new opportunities. If you have a project that needs some creative magic, I'd love to hear about it.</p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-label">Email</span>
                <a href="mailto:sabonawaktoletafese@gmail.com" className="contact-value">sabonawaktoletafese@gmail.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Socials</span>
                <div className="social-links">
                  <a href="https://x.com/SabonaW_Tirkena" target="_blank" rel="noopener noreferrer">Twitter</a>
                  <a href="https://www.linkedin.com/in/sabona-waktole" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href="https://github.com/SabonaWaktole" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form-container">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={4} placeholder="Tell me about your project..."></textarea>
              </div>
              <button type="button" className="btn btn-primary submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
