import React, { useState } from 'react';
import logo from '../assets/Logo.svg';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <a href="#" className="nav__logo">
          <img src={logo} alt="RR Maxx" />
        </a>

        <ul className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#quem-somos">Quem Somos</a></li>
          <li><a href="#servicos">Serviços</a></li>
        </ul>

        <div className="nav__contact">
          <a href="https://www.google.com/maps?q=R.+Celestino+Moreira,+82+-+Sítio+Morro+Grande,+São+Paulo+-+SP,+02808-010"
            target="_blank"
            rel="noreferrer">📍 Localização</a>
          <a href="https://wa.me/5511987644323" target="_blank" rel="noreferrer">💬 WhatsApp</a>
        </div>

        <button className="nav__hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>
    </header>
  );
}