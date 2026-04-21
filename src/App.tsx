
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <footer style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--text-secondary)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <p>&copy; {new Date().getFullYear()} Lets build something cool together.</p>
      </footer>
    </>
  );
}

export default App;
