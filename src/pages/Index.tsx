
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import IntroSection from '../components/IntroSection';

const Index = () => {
  useEffect(() => {
    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Observe all fade-in elements
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Grupo Sólida - Contabilidade e Sistema Financeiro em Brasília</title>
        <meta name="description" content="Especialistas em Contabilidade e Assessoria Empresarial em Brasília. Sistema financeiro moderno, conformidade total e assessoria estratégica para sua empresa crescer." />
        <meta name="keywords" content="contabilidade brasília, sistema financeiro, assessoria empresarial, águas claras, departamento pessoal, planejamento tributário" />
        <meta name="author" content="Grupo Sólida Contabilidade e Assessoria Empresarial" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.gruposolidacontabilidade.com.br" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Grupo Sólida - Contabilidade e Sistema Financeiro em Brasília" />
        <meta property="og:description" content="Especialistas em Contabilidade e Assessoria Empresarial em Brasília. Sistema financeiro moderno, conformidade total e assessoria estratégica para sua empresa crescer." />
        <meta property="og:image" content="/lovable-uploads/5aa1d763-fa32-43b0-a697-b2377df3cd1e.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.gruposolidacontabilidade.com.br" />
        <meta property="og:site_name" content="Grupo Sólida" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Grupo Sólida - Contabilidade e Sistema Financeiro em Brasília" />
        <meta name="twitter:description" content="Especialistas em Contabilidade e Assessoria Empresarial em Brasília. Sistema financeiro moderno, conformidade total e assessoria estratégica para sua empresa crescer." />
        <meta name="twitter:image" content="/lovable-uploads/5aa1d763-fa32-43b0-a697-b2377df3cd1e.png" />
        
        {/* Additional SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="pt-br" />
        <meta name="theme-color" content="#2563eb" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <IntroSection />
          <About />
          <Services />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
