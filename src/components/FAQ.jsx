import React, { useState } from 'react';

const perguntas = [
  {
    pergunta: 'Preciso agendar um horário ou posso levar o carro direto?',
    resposta: 'Recomendamos agendar um horário para garantir um atendimento mais ágil e personalizado. Entre em contato pelo WhatsApp ou telefone.',
  },
  {
    pergunta: 'Quais tipos de serviços vocês realizam?',
    resposta: 'Realizamos revisões preventivas, freios, suspensão, injeção eletrônica, motor, câmbio e elétrica automotiva.',
  },
  {
    pergunta: 'Posso levar as peças para o conserto?',
    resposta: 'Sim, aceitamos peças trazidas pelo cliente. Porém, a garantia do serviço se aplica apenas às peças fornecidas por nós.',
  },
  {
    pergunta: 'Qual o horário de funcionamento?',
    resposta: 'Funcionamos de segunda a sexta das 8h às 18h.',
  },
  {
    pergunta: 'Quais são as formas de pagamento aceitas?',
    resposta: 'Aceitamos dinheiro, PIX, cartão de débito e crédito.',
  },
  {
    pergunta: 'Como sei que está na hora de fazer uma revisão preventiva?',
    resposta: 'Recomendamos revisões a cada 10.000 km ou 6 meses, o que ocorrer primeiro. Fique atento também a ruídos, vibrações ou alertas no painel.',
  },
];

export default function FAQ() {
  const [aberto, setAberto] = useState(null);

  const toggle = (index) => setAberto(aberto === index ? null : index);

  return (
    <section className="faq">
      <div className="container">
        <h2>Perguntas Frequentes:</h2>
        <ul className="faq__list">
          {perguntas.map((item, index) => (
            <li key={index} className={`faq__item ${aberto === index ? 'faq__item--open' : ''}`}>
              <button className="faq__pergunta" onClick={() => toggle(index)}>
                {item.pergunta}
                <span>{aberto === index ? '▲' : '▼'}</span>
              </button>
              {aberto === index && (
                <p className="faq__resposta">{item.resposta}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}