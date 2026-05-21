import React from 'react';
import logo from '../assets/Logo.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__logo">
          <img src={logo} alt="RR Maxx" />
        </div>
        <div className="footer__info">
          <p>📱 @rrmaxx_oficina</p>
          <p><a href="tel:1198764323">📞 (11) 98764-4323</a></p>
          <p>📍 R. Celestina Moreira, 82 - Sítio Morro Grande, SP - 02808-010</p>
        </div>
      </div>
    </footer>
  );
}