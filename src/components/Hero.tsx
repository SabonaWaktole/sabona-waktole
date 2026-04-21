
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="about">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="dot"></span> Available for work
          </div>
          <h1 className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Hi, I'm <span className="text-gradient">Sabona</span>.<br />
            I build digital experiences.
          </h1>
          <p className="hero-description animate-fade-in" style={{ animationDelay: '0.3s' }}>
            I build scalable backend systems, SaaS platforms, and API-driven applications that help businesses automate workflows and operate efficiently. My focus is on creating reliable, maintainable systems that are production-ready and built for long-term growth.          </p>
          <div className="hero-actions animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
        <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="glow-circle"></div>
          <div className="visual-card">
             {/* Abstract representation representing portfolio/visual */}
             <div className="card-header">
                <span className="mac-dot bg-red"></span>
                <span className="mac-dot bg-yellow"></span>
                <span className="mac-dot bg-green"></span>
             </div>
             <div className="card-body code-block">
               <pre><code>
<span className="keyword">class</span> <span className="class-name">Life</span> {"{\n"}
{"  "}<span className="keyword">static void</span> <span className="function">live</span>() {"{\n"}
{"    "}<span className="control-keyword">try</span> {"{\n"}
{"      "}<span className="function">code</span>();{"\n"}
{"      "}<span className="function">sleep</span>();{"\n"}
{"    } "}<span className="control-keyword">catch</span> (<span className="class-name">Exception</span> e) {"{\n"}
{"      "}<span className="function">fix</span>(e);{"\n"}
{"    }\n"}
{"    "}<span className="function">live</span>();{"\n"}
{"  }\n"}
{"  "}<span className="keyword">static void</span> <span className="function">code</span>() <span className="keyword">throws</span> <span className="class-name">Exception</span> {"{ "}<span className="control-keyword">throw new</span> <span className="class-name">Exception</span>(); {"}\n"}
{"  "}<span className="keyword">static void</span> <span className="function">sleep</span>() {"{}\n"}
{"  "}<span className="keyword">static void</span> <span className="function">fix</span>(<span className="class-name">Exception</span> e) {"{}\n"}
{"}"}
               </code></pre>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
