import { useState, useEffect } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav id="navbar" style={{ boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,.09)' : 'none' }}>
        <div className="nav-inner">
          <a href="#" className="nav-logo">Service<span>Hub</span></a>
          <div className="nav-links">
            <a href="#categories">Services</a>
            <a href="#professionals">Professionals</a>
            <a href="#how-it-works">How it works</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="nav-cta">
            <button className="btn-ghost">Log in</button>
            <button className="btn-primary">Get Started</button>
          </div>
          <button className="nav-hamburger" onClick={() => setMenuOpen(o => !o)}>
            <span /><span /><span />
          </button>
        </div>
      </nav>
      <div className={`mobile-nav${menuOpen ? ' open' : ''}`}>
        <a href="#categories" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#professionals" onClick={() => setMenuOpen(false)}>Professionals</a>
        <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
        <a href="#blog" onClick={() => setMenuOpen(false)}>Blog</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        <button className="btn-primary" style={{ marginTop: 8 }}>Get Started</button>
      </div>
    </>
  );
}
