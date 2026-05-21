import React from 'react';
import carroVermelho from '../assets/carro-vermelho.png';

export default function QuemSomos() {
  return (
    <section className="quem-somos" id="quem-somos">
      <div className="container quem-somos__inner">
        <div className="quem-somos__img">
          <img src={carroVermelho} alt="Carro RR Maxx" />
        </div>
        <div className="quem-somos__text">
          <h2>QUEM SOMOS</h2>
          <p>
            Há anos cuidando de carros particulares, nossa oficina une a experiência
            prática de mecânicos especialistas com as mais modernas ferramentas de
            diagnóstico eletrônico. Atendemos com hora marcada para garantir agilidade
            e um atendimento personalizado. Da revisão preventiva à mecânica pesada de
            motor e câmbio, estamos prontos para manter seu patrimônio sempre em movimento.
          </p>
        </div>
      </div>
    </section>
  );
}