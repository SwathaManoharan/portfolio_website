import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <div className="sky-blobs" aria-hidden="true">
        <div className="sky-blob sky-blob-1" />
        <div className="sky-blob sky-blob-2" />
        <div className="sky-blob sky-blob-3" />
        <div className="sky-blob sky-blob-4" />
      </div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
      <footer>
        <div className="container">
          <p>
            Built with ❤️ by <a href="https://linkedin.com/in/swatham" target="_blank" rel="noreferrer">Swatha Manoharan</a>
            {' '}· DevOps & Cloud Engineer · {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
