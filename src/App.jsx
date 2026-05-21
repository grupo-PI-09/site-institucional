import React from 'react';
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
  return (
    <>
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