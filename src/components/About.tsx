
import React from 'react';
import { Users, Award, TrendingUp, Shield, Calculator, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Conformidade Total',
      description: 'Garantimos que sua empresa esteja sempre em dia com a legislação vigente.'
    },
    {
      icon: Calculator,
      title: 'Sistema Financeiro Moderno',
      description: 'Plataforma online para controle total do fluxo de caixa e indicadores.'
    },
    {
      icon: TrendingUp,
      title: 'Assessoria Estratégica',
      description: 'Consultoria para melhorar resultados e aumentar a lucratividade.'
    },
    {
      icon: Clock,
      title: 'Acesso 24h',
      description: 'Sistema online disponível a qualquer hora, em qualquer lugar.'
    }
  ];

  return (
    <section id="sobre" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Users className="h-4 w-4 mr-2" />
            Sobre Nós
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Grupo Sólida Contabilidade
            <span className="block text-primary">e Assessoria Empresarial</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Somos especialistas em Contabilidade e Assessoria Empresarial, oferecendo soluções 
            completas para que sua empresa cresça de forma segura e organizada.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Comprometimento e Experiência
            </h3>
            <div className="space-y-6 text-muted-foreground">
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
              <p>
                Nosso objetivo é simplificar a gestão do seu negócio, oferecendo assessoria 
                estratégica para melhorar resultados, reduzir custos e aumentar a lucratividade.
              </p>
            </div>

            <div className="mt-8">
              <a 
                href="https://wa.me/556120172777" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary text-lg"
                aria-label="Falar conosco via WhatsApp"
              >
                Fale Conosco
              </a>
            </div>
          </div>

          {/* Stats and Features */}
          <div className="space-y-8">
            {/* Stats */}
            <div className="bg-muted/50 rounded-2xl p-8">
              <h4 className="text-xl font-semibold mb-6 text-foreground">Nossos Números</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Anos no Mercado</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Empresas Atendidas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Conformidade</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">24h</div>
                  <div className="text-sm text-muted-foreground">Suporte Online</div>
                </div>
              </div>
            </div>

            {/* Awards */}
            <div className="flex items-center space-x-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6">
              <div className="bg-primary p-3 rounded-xl">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Certificações</h4>
                <p className="text-sm text-muted-foreground">
                  Profissionais certificados e atualizados com a legislação
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-primary to-secondary p-4 rounded-2xl w-fit mx-auto mb-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
