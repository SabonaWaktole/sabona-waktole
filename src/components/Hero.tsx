import { useState, useEffect } from 'react';
import './Hero.css';

type Token = { text: string; className?: string };
const codeLines: Token[] = [
  { text: "class ", className: "keyword" },
  { text: "Life", className: "class-name" },
  { text: " {\n" },
  { text: "  static void ", className: "keyword" },
  { text: "live", className: "function" },
  { text: "() {\n" },
  { text: "    try ", className: "control-keyword" },
  { text: "{\n" },
  { text: "      code", className: "function" },
  { text: "();\n" },
  { text: "      sleep", className: "function" },
  { text: "();\n" },
  { text: "    } " },
  { text: "catch ", className: "control-keyword" },
  { text: "(" },
  { text: "Exception", className: "class-name" },
  { text: " e) {\n" },
  { text: "      fix", className: "function" },
  { text: "(e);\n" },
  { text: "    }\n" },
  { text: "    live", className: "function" },
  { text: "();\n" },
  { text: "  }\n" },
  { text: "  static void ", className: "keyword" },
  { text: "code", className: "function" },
  { text: "() " },
  { text: "throws ", className: "keyword" },
  { text: "Exception", className: "class-name" },
  { text: " { " },
  { text: "throw new ", className: "control-keyword" },
  { text: "Exception", className: "class-name" },
  { text: "(); }\n" },
  { text: "  static void ", className: "keyword" },
  { text: "sleep", className: "function" },
  { text: "() {}\n" },
  { text: "  static void ", className: "keyword" },
  { text: "fix", className: "function" },
  { text: "(" },
  { text: "Exception", className: "class-name" },
  { text: " e) {}\n" },
  { text: "}" }
];

const totalChars = codeLines.reduce((acc, t) => acc + t.text.length, 0);

const Hero = () => {
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < totalChars) {
      const timer = setTimeout(() => setCharIndex(c => c + 1), 30);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setCharIndex(0), 4000);
      return () => clearTimeout(timer);
    }
  }, [charIndex]);

  const renderTokens = () => {
    let charsLeft = charIndex;
    const rendered = [];
    for (let i = 0; i < codeLines.length; i++) {
      const token = codeLines[i];
      if (charsLeft <= 0) break;
      
      if (token.text.length <= charsLeft) {
        rendered.push(<span key={i} className={token.className}>{token.text}</span>);
        charsLeft -= token.text.length;
      } else {
        rendered.push(<span key={i} className={token.className}>{token.text.substring(0, charsLeft)}</span>);
        charsLeft = 0;
      }
    }
    return rendered;
  };

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
            I build scalable backend systems, SaaS platforms, and API-driven applications that help businesses automate workflows and operate efficiently. My focus is on creating reliable, maintainable systems that are production-ready and built for long-term growth.
          </p>
          <div className="hero-actions animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
        <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="glow-circle"></div>
          <div className="visual-card">
             <div className="card-header">
                <span className="mac-dot bg-red"></span>
                <span className="mac-dot bg-yellow"></span>
                <span className="mac-dot bg-green"></span>
             </div>
             <div className="card-body code-block">
               <pre><code>{renderTokens()}<span className="cursor"></span></code></pre>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
