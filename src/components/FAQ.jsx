import React, { useState, useRef } from 'react';

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

function FAQItem({ item, isOpen, onToggle }) {
  const contentRef = useRef(null);

  return (
    <li className="faq__item">
      <button className="faq__pergunta" onClick={onToggle}>
        {item.pergunta}
        <span className={`faq__icon ${isOpen ? 'faq__icon--open' : ''}`}>▼</span>
      </button>
      <div
        className="faq__resposta-wrapper"
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight + 'px' : '0px',
        }}
        ref={contentRef}
      >
        <p className="faq__resposta">{item.resposta}</p>
      </div>
    </li>
  );
}

export default function FAQ() {
  const [aberto, setAberto] = useState(null);

  const toggle = (index) => setAberto(aberto === index ? null : index);

  return (
    <section className="faq">
      <div className="container">
        <h2>Perguntas Frequentes:</h2>
        <ul className="faq__list">
          {perguntas.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={aberto === index}
              onToggle={() => toggle(index)}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}