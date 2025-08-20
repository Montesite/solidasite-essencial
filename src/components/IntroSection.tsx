
import React from 'react';
import { CheckCircle, Users, Shield, TrendingUp, Clock } from 'lucide-react';

const IntroSection = () => {
  const highlights = [
    {
      icon: Shield,
      title: 'Conformidade Total',
      description: 'Garantimos que sua empresa esteja sempre em dia com a legislação'
    },
    {
      icon: TrendingUp,
      title: 'Sistema Financeiro',
      description: 'Plataforma moderna para controle total em tempo real'
    },
    {
      icon: Users,
      title: 'Assessoria Estratégica',
      description: 'Consultoria especializada para melhorar seus resultados'
    },
    {
      icon: Clock,
      title: 'Acesso 24h',
      description: 'Sistema online disponível a qualquer hora'
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-background to-muted/50">
      <div className="max-w-7xl mx-auto">
        {/* Main Intro */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            Especialistas em Contabilidade e 
            <span className="block text-primary">Assessoria Empresarial</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
            <p>
              Somos especialistas em Contabilidade e Assessoria Empresarial, oferecendo soluções 
              completas para que sua empresa cresça de forma segura e organizada.
            </p>
            <p>
              Com uma equipe experiente e comprometida, cuidamos de toda a parte contábil, 
              fiscal e trabalhista, garantindo conformidade com a legislação e informações 
              precisas para a tomada de decisões.
            </p>
            <p>
              Além disso, disponibilizamos um Sistema Financeiro moderno para controle total 
              do seu fluxo de caixa, despesas, receitas e indicadores de desempenho, tudo em 
              tempo real e com acesso online.
            </p>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div 
                key={index} 
                className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300 text-center"
              >
                <div className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl w-fit mx-auto mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </div>
            );
          })}
        </div>

        {/* Key Benefits */}
        <div className="bg-card rounded-2xl border border-border shadow-lg p-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Nosso Objetivo
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Simplificar a gestão do seu negócio, oferecendo assessoria estratégica para 
                melhorar resultados, reduzir custos e aumentar a lucratividade.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-muted-foreground">Conformidade com a legislação vigente</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-muted-foreground">Informações precisas para tomada de decisões</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-muted-foreground">Sistema financeiro em tempo real</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-muted-foreground">Assessoria estratégica personalizada</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-primary to-secondary p-4 rounded-2xl w-fit mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-4 text-foreground">
                  Equipe Experiente
                </h4>
                <p className="text-muted-foreground mb-6">
                  Nossa equipe é formada por profissionais experientes e comprometidos, 
                  sempre atualizados com as últimas mudanças na legislação.
                </p>
                <a 
                  href="https://wa.me/556120172777" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                  aria-label="Falar com nossa equipe via WhatsApp"
                >
                  Falar com Nossa Equipe
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
