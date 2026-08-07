import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'];

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={[scrolled ? 'scrolled' : '', menuOpen ? 'nav-open' : ''].filter(Boolean).join(' ')}>
      <div className="container nav-inner">
        <a href="#hero" className="nav-logo">Swatha Manoharan</a>
        <button
          className="nav-hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
        </button>
        <ul className={`nav-links${menuOpen ? ' nav-links-open' : ''}`}>
          {links.map(l => (
            <li key={l}>
              <Link to={l.toLowerCase()} smooth duration={600} offset={-70} onClick={closeMenu}>{l}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
