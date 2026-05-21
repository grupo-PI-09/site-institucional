import React from 'react';

const lista = [
  'Revisões Preventivas: Troca de óleo, filtros e correias.',
  'Sistemas de Freios: Manutenção e troca de pastilhas e discos.',
  'Suspensão e Direção: Amortecedores, buchas e alinhamento.',
  'Injeção Eletrônica: Diagnóstico via scanner e limpeza de bicos.',
  'Motores e Câmbio: Reparos completos em mecânica pesada.',
  'Elétrica Automotiva: Baterias, alternadores e iluminação.',
];

const GearBg = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fillRule="evenodd" d="M50 20a30 30 0 0 1 8 1.5l3-5.2 7 4-3 5.2a30 30 0 0 1 8.5 8.5l5.2-3 4 7-5.2 3A30 30 0 0 1 79 50a30 30 0 0 1-1.5 8l5.2 3-4 7-5.2-3a30 30 0 0 1-8.5 8.5l3 5.2-7 4-3-5.2A30 30 0 0 1 50 79a30 30 0 0 1-8-1.5l-3 5.2-7-4 3-5.2A30 30 0 0 1 26.5 65l-5.2 3-4-7 5.2-3A30 30 0 0 1 21 50a30 30 0 0 1 1.5-8l-5.2-3 4-7 5.2 3a30 30 0 0 1 8.5-8.5l-3-5.2 7-4 3 5.2A30 30 0 0 1 50 20z M50 35a15 15 0 1 0 0 30 15 15 0 0 0 0-30z"/>
  </svg>
);

export default function Servicos() {
  return (
    <section className="servicos" id="servicos">
      <div className="servicos__inner">
        <div className="servicos__text">
          <GearBg className="servicos__gear servicos__gear--big" />
          <GearBg className="servicos__gear servicos__gear--small" />
          <h2>
            Compromisso com a qualidade:<br />
            Todos os nossos serviços possuem 3 meses de{' '}
            <strong>GARANTIA.</strong>
          </h2>
          <a
            href="https://wa.me/5511987644323"
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary"
          >
            AGENDAR REVISÃO AGORA
          </a>
        </div>
        <ul className="servicos__list">
          {lista.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}