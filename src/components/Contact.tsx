import { useState, type FormEvent } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Safety check to ensure form isn't empty
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    try {
      const response = await fetch(import.meta.env.VITE_FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        setStatus('sent');
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('idle');
        alert("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      setStatus('idle');
      alert("Oops! There was a problem submitting your form.");
    }
  };

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
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="John Doe" 
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="john@example.com" 
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn btn-primary submit-btn"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
