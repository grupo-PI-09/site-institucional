import React, { useState, useEffect } from 'react';
import logo from '../assets/Logo.svg';
import acessibilidade from '../assets/image-acessibility.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [daltonico, setDaltonico] = useState(
    () => localStorage.getItem('daltonico') === 'true'
  );

  useEffect(() => {
    if (localStorage.getItem('daltonico') === 'true') {
      document.body.classList.add('daltonico')
    }
  }, [])

  function toggleDaltonico() {
    const novo = !daltonico
    setDaltonico(novo)
    localStorage.setItem('daltonico', novo)
    if (novo) {
      document.body.classList.add('daltonico')
    } else {
      document.body.classList.remove('daltonico')
    }
  }

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

        <button
          className={`nav__acessibilidade ${daltonico ? 'ativo' : ''}`}
          onClick={toggleDaltonico}
          title="Modo daltônico"
        >
          <img src={acessibilidade} alt="Acessibilidade" />
        </button>

        <button className="nav__hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>
    </header>
  );
}