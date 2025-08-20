
import React from 'react';
import { ArrowRight, Shield, TrendingUp, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"7\" cy=\"7\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="mb-6 opacity-0 animate-fade-in-up">
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
                Somos especialistas em Contabilidade e Assessoria Empresarial, oferecendo soluções completas para que sua empresa cresça de forma segura e organizada.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <a 
                href="https://wa.me/5561920172777" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <button 
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                Nossos Serviços
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
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

          {/* Visual Elements */}
          <div className="relative">
            <div className="relative z-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              {/* Main Card */}
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-primary p-3 rounded-xl mr-4">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Sistema Financeiro</h3>
                    <p className="text-gray-600 text-sm">Controle total em tempo real</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Receitas</span>
                    <span className="font-semibold text-secondary">R$ 125.430</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Despesas</span>
                    <span className="font-semibold text-gray-900">R$ 87.250</span>
                  </div>
                  <div className="h-px bg-gray-200"></div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">Lucro Líquido</span>
                    <span className="font-bold text-secondary text-lg">R$ 38.180</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-secondary text-white p-4 rounded-2xl shadow-lg animate-float">
                <Clock className="h-6 w-6" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-xs text-gray-500 mb-1">Conformidade</div>
                <div className="font-semibold text-secondary">100%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
