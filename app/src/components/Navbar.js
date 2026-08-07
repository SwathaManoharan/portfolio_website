import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'];

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="container nav-inner">
        <a href="#hero" className="nav-logo">SM</a>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l}>
              <Link to={l.toLowerCase()} smooth duration={600} offset={-70}>{l}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
