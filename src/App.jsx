import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Valores from './components/Valores';
import QuemSomos from './components/QuemSomos';
import Servicos from './components/Servicos';
import Cards from './components/Cards';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './style/style.css';

export default function App() {
  useEffect(() => {
    function ajustarTamanhoVLibras() {
      const tentativa = setInterval(() => {
        const host = document.getElementById('vlibras-access-wrapper')
        if (host && host.shadowRoot) {
          clearInterval(tentativa)

          if (!host.shadowRoot.getElementById('vlibras-tamanho-custom')) {
            const style = document.createElement('style')
            style.id = 'vlibras-tamanho-custom'
            style.textContent = `
              #vlibras-button {
                width: 80px !important;
                height: 80px !important;
              }
              #vlibras-button img {
                width: 100% !important;
                height: 100% !important;
              }
            `
            host.shadowRoot.appendChild(style)
          }
        }
      }, 300)
    }

    function iniciarWidget() {
      new window.VLibras.Widget('https://vlibras.gov.br/app')
      ajustarTamanhoVLibras()
    }

    if (window.VLibras) {
      iniciarWidget()
      return
    }

    if (document.querySelector('script[src*="vlibras-plugin.js"]')) {
      return
    }

    const script = document.createElement('script')
    script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js'
    script.onload = iniciarWidget
    document.body.appendChild(script)
  }, [])

  return (
    <>
      <div vw="true" className="enabled">
        <div vw-access-button="true" className="active"></div>
        <div vw-plugin-wrapper="true">
          <div className="vw-plugin-top-wrapper"></div>
        </div>
      </div>
      <Header />
      <Hero />
      <Valores />
      <QuemSomos />
      <Servicos />
      <Cards />
      <FAQ />
      <Footer />
    </>
  );
}