import React from 'react';

const valores = [
  {
    titulo: 'Transparência e Segurança',
    texto: 'Acreditamos que a confiança é a base de qualquer serviço. Por isso, trabalhamos com total clareza em nossos diagnósticos e orçamentos, explicando cada etapa do processo.',
  },
  {
    titulo: 'Agilidade',
    texto: 'Sabemos que o seu tempo é valioso e que ficar sem o carro é um transtorno. Por isso, otimizamos nossos processos internos para oferecer diagnósticos rápidos e soluções eficientes.',
  },
  {
    titulo: 'Excelência Técnica',
    texto: 'Nossa equipe é altamente capacitada para lidar com os desafios da mecânica moderna, utilizando ferramentas de precisão e peças de alta qualidade.',
  },
  {
    titulo: 'Compromisso',
    texto: 'Seu carro em boas mãos, sua satisfação em primeiro lugar. Nosso compromisso vai além do reparo mecânico; cuidamos do seu patrimônio com zelo e responsabilidade.',
  },
];

const GearIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="4">
    <circle cx="50" cy="50" r="15"/>
    <path d="M50 20a30 30 0 0 1 8 1.5l3-5.2 7 4-3 5.2a30 30 0 0 1 8.5 8.5l5.2-3 4 7-5.2 3A30 30 0 0 1 79 50a30 30 0 0 1-1.5 8l5.2 3-4 7-5.2-3a30 30 0 0 1-8.5 8.5l3 5.2-7 4-3-5.2A30 30 0 0 1 50 79a30 30 0 0 1-8-1.5l-3 5.2-7-4 3-5.2A30 30 0 0 1 26.5 65l-5.2 3-4-7 5.2-3A30 30 0 0 1 21 50a30 30 0 0 1 1.5-8l-5.2-3 4-7 5.2 3a30 30 0 0 1 8.5-8.5l-3-5.2 7-4 3 5.2A30 30 0 0 1 50 20z"/>
  </svg>
);

export default function Valores() {
  return (
    <section className="valores">
      <div className="valores__grid">
        {valores.map((item, index) => (
          <div key={index} className="valor-card">
            <GearIcon className="valor-card__gear1" />
            <GearIcon className="valor-card__gear2" />
            <h3>{item.titulo}</h3>
            <p>{item.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}