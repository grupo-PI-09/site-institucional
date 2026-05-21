import React from 'react';
import cardFreio from '../assets/card-freio.png';
import cardBarulho from '../assets/card-barulho.png';
import cardViagem from '../assets/card-viagem.png';

const cards = [
  {
    img: cardFreio,
    titulo: 'O freio começou a cantar?',
    descricao: 'Barulhos ao frear podem indicar desgaste nas pastilhas ou discos. Não ignore — sua segurança depende disso.',
  },
  {
    img: cardBarulho,
    titulo: 'Sentindo um excesso de barulho?',
    descricao: 'Ruídos estranhos no motor ou suspensão podem ser sinal de peças soltas ou desgastadas. Venha fazer um diagnóstico.',
  },
  {
    img: cardViagem,
    titulo: 'Vai viajar? Tem que verificar!',
    descricao: 'Antes de pegar a estrada, faça uma revisão completa. Checamos freios, óleo, pneus, suspensão e muito mais.',
  },
];

export default function Cards() {
  return (
    <section className="cards">
      <div className="cards__track">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card"
            style={{ backgroundImage: `url(${card.img})` }}
          >
            <div className="card__overlay">
              <h3>{card.titulo}</h3>
              <p className="card__descricao">{card.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}