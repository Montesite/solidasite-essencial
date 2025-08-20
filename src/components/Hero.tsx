
import React from 'react';
import { ArrowRight, Shield, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/4d05229b-b8f2-4724-bf7f-bae867d4e62a.png')`
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary-light/85 to-secondary/90"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-20">
        <div className="flex items-center justify-center">
          {/* Content - Centralizado */}
          <div className="text-white text-center max-w-4xl">
            <div className="mb-8">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-6">
                <Shield className="h-4 w-4 mr-2" />
                Especialistas em Contabilidade
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Sua empresa em{' '}
                <span className="block text-secondary-light">
                  mãos seguras
                </span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
                Somos especialistas em Contabilidade e Assessoria Empresarial, oferecendo soluções 
                completas para que sua empresa cresça de forma segura e organizada.
              </p>
            </div>

            {/* Diferenciais */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-secondary-light" />
                <span className="text-white/90">Sistema Financeiro Moderno</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-secondary-light" />
                <span className="text-white/90">Conformidade Total</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-secondary-light" />
                <span className="text-white/90">Assessoria Estratégica</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-secondary-light" />
                <span className="text-white/90">Acesso Online 24h</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
              <a 
                href="https://wa.me/556120172777" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                aria-label="Solicitar orçamento via WhatsApp"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <button 
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                aria-label="Ver nossos serviços"
              >
                Nossos Serviços
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">10+</div>
                <div className="text-white/80 text-sm">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-white/80 text-sm">Empresas Atendidas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24h</div>
                <div className="text-white/80 text-sm">Suporte Online</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
