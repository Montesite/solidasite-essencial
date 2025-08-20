
import React from 'react';
import { Calculator, BarChart3, FileText, Users, Shield, Smartphone, TrendingUp, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: 'Contabilidade Completa',
      description: 'Serviços contábeis completos com conformidade total à legislação vigente.',
      features: ['Escrituração Contábil', 'Balanços e Demonstrações', 'Análise Contábil', 'Consultoria Fiscal'],
      highlight: false
    },
    {
      icon: Smartphone,
      title: 'Sistema Financeiro',
      description: 'Plataforma moderna para controle total do fluxo de caixa e indicadores em tempo real.',
      features: ['Controle de Fluxo de Caixa', 'Relatórios em Tempo Real', 'Dashboard Executivo', 'Acesso Online 24h'],
      highlight: true
    },
    {
      icon: FileText,
      title: 'Assessoria Fiscal',
      description: 'Gestão completa das obrigações fiscais e trabalhistas da sua empresa.',
      features: ['Apuração de Impostos', 'SPED Fiscal', 'Obrigações Acessórias', 'Planejamento Tributário'],
      highlight: false
    },
    {
      icon: Users,
      title: 'Departamento Pessoal',
      description: 'Cuidamos de toda gestão trabalhista e previdenciária dos seus colaboradores.',
      features: ['Folha de Pagamento', 'eSocial', 'Rescisões', 'Benefícios'],
      highlight: false
    },
    {
      icon: TrendingUp,
      title: 'Assessoria Estratégica',
      description: 'Consultoria para melhorar resultados, reduzir custos e aumentar a lucratividade.',
      features: ['Análise de Performance', 'Redução de Custos', 'Planejamento Estratégico', 'Indicadores de Gestão'],
      highlight: false
    },
    {
      icon: Shield,
      title: 'Conformidade Legal',
      description: 'Garantimos que sua empresa esteja sempre em dia com todas as obrigações.',
      features: ['Compliance Tributário', 'Adequação Legal', 'Auditoria Preventiva', 'Regularização'],
      highlight: false
    }
  ];

  return (
    <section id="servicos" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Shield className="h-4 w-4 mr-2" />
            Nossos Serviços
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Soluções Completas em
            <span className="block text-primary">Contabilidade e Sistema Financeiro</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos um portfólio completo de serviços contábeis e sistema financeiro moderno 
            para empresas de todos os portes, sempre com foco na qualidade e conformidade legal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className={`relative p-8 rounded-2xl border shadow-md hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${
                  service.highlight 
                    ? 'bg-gradient-to-br from-primary to-secondary text-white border-primary' 
                    : 'bg-card border-border'
                }`}
              >
                {service.highlight && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-secondary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Destaque
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <div className={`p-4 rounded-2xl w-fit mb-4 ${
                    service.highlight 
                      ? 'bg-white/20' 
                      : 'bg-gradient-to-r from-primary to-secondary'
                  }`}>
                    <Icon className={`h-8 w-8 ${service.highlight ? 'text-white' : 'text-white'}`} />
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 ${
                    service.highlight ? 'text-white' : 'text-foreground'
                  }`}>
                    {service.title}
                  </h3>
                  <p className={`mb-6 ${
                    service.highlight ? 'text-white/90' : 'text-muted-foreground'
                  }`}>
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className={`w-2 h-2 rounded-full mr-3 ${
                        service.highlight ? 'bg-white' : 'bg-secondary'
                      }`}></div>
                      <span className={service.highlight ? 'text-white/90' : 'text-muted-foreground'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <a 
                    href="https://wa.me/556120172777" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`inline-flex items-center font-medium transition-colors duration-200 ${
                      service.highlight 
                        ? 'text-white hover:text-white/80' 
                        : 'text-primary hover:text-primary-dark'
                    }`}
                    aria-label={`Saiba mais sobre ${service.title}`}
                  >
                    Saiba mais →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <Clock className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">
              Sistema Financeiro Moderno
            </h3>
            <p className="mb-6 text-white/90 max-w-2xl mx-auto">
              Tenha controle total do seu fluxo de caixa, despesas, receitas e indicadores de 
              desempenho, tudo em tempo real e com acesso online 24 horas por dia.
            </p>
            <a 
              href="https://wa.me/556120172777" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              aria-label="Solicitar demonstração do sistema financeiro"
            >
              Solicitar Demonstração
              <BarChart3 className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
