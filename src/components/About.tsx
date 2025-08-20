
import React from 'react';
import { Award, Target, Users, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excelência',
      description: 'Compromisso com a qualidade e precisão em todos os nossos serviços.'
    },
    {
      icon: Target,
      title: 'Resultados',
      description: 'Focamos no crescimento e sucesso sustentável dos nossos clientes.'
    },
    {
      icon: Users,
      title: 'Parceria',
      description: 'Construímos relacionamentos duradouros baseados na confiança.'
    },
    {
      icon: Zap,
      title: 'Inovação',
      description: 'Utilizamos tecnologia moderna para otimizar processos.'
    }
  ];

  return (
    <section id="sobre" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center bg-secondary/10 text-secondary rounded-full px-4 py-2 text-sm font-medium mb-6">
                <Users className="h-4 w-4 mr-2" />
                Sobre Nós
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                Sua parceira em
                <span className="block gradient-text">crescimento</span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Com uma equipe experiente e comprometida, cuidamos de toda a parte contábil, 
                  fiscal e trabalhista, garantindo conformidade com a legislação e informações 
                  precisas para a tomada de decisões.
                </p>
                <p>
                  Disponibilizamos um Sistema Financeiro moderno para controle total do seu 
                  fluxo de caixa, despesas, receitas e indicadores de desempenho, tudo em 
                  tempo real e com acesso online.
                </p>
                <p>
                  Nosso objetivo é simplificar a gestão do seu negócio, oferecendo assessoria 
                  estratégica para melhorar resultados, reduzir custos e aumentar a lucratividade.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/5561920172777" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Fale com Nossa Equipe
              </a>
              <button 
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline"
              >
                Conhecer Serviços
              </button>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="card-elevated p-6 text-center opacity-0 animate-fade-in-up" style={{ animationDelay: `${(index % 2 + 1) * 0.2}s` }}>
                  <div className="bg-gradient-secondary p-4 rounded-2xl w-fit mx-auto mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 py-16 bg-gradient-primary rounded-3xl text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="opacity-0 animate-fade-in-up">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-white/80">Empresas Atendidas</div>
            </div>
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-white/80">Anos de Mercado</div>
            </div>
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-white/80">Satisfação</div>
            </div>
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-4xl font-bold mb-2">24h</div>
              <div className="text-white/80">Suporte</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
