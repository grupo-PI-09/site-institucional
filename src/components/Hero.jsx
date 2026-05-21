import React from 'react';
import heroBg from '../assets/carro-cinza.svg';

export default function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero__content">
        <h1>
          Transparência em cada <strong>PEÇA</strong>,
          compromisso em cada <strong>SERVIÇO!</strong>
        </h1>
        <p>Há mais de 2 décadas cuidando do seu carro</p>
      </div>
    </section>
  );
}