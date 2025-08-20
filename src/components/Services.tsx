
import React from 'react';
import { Calculator, BarChart3, FileText, Users, Shield, Smartphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: 'Contabilidade Completa',
      description: 'Serviços contábeis completos com conformidade total à legislação vigente.',
      features: ['Escrituração Contábil', 'Balanços e Demonstrações', 'Análise Contábil', 'Consultoria Fiscal']
    },
    {
      icon: FileText,
      title: 'Assessoria Fiscal',
      description: 'Gestão completa das obrigações fiscais e trabalhistas da sua empresa.',
      features: ['Apuração de Impostos', 'SPED Fiscal', 'Obrigações Acessórias', 'Planejamento Tributário']
    },
    {
      icon: Users,
      title: 'Departamento Pessoal',
      description: 'Cuidamos de toda gestão trabalhista e previdenciária dos seus colaboradores.',
      features: ['Folha de Pagamento', 'eSocial', 'Rescisões', 'Benefícios']
    },
    {
      icon: Smartphone,
      title: 'Sistema Financeiro',
      description: 'Plataforma moderna para controle total do fluxo de caixa e indicadores.',
      features: ['Controle de Fluxo de Caixa', 'Relatórios em Tempo Real', 'Dashboard Executivo', 'Acesso Online']
    },
    {
      icon: BarChart3,
      title: 'Assessoria Estratégica',
      description: 'Consultoria para melhorar resultados e aumentar a lucratividade.',
      features: ['Análise de Performance', 'Redução de Custos', 'Planejamento Estratégico', 'Indicadores de Gestão']
    },
    {
      icon: Shield,
      title: 'Conformidade Legal',
      description: 'Garantimos que sua empresa esteja sempre em dia com todas as obrigações.',
      features: ['Compliance Tributário', 'Adequação Legal', 'Auditoria Preventiva', 'Regularização']
    }
  ];

  return (
    <section id="servicos" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Shield className="h-4 w-4 mr-2" />
            Nossos Serviços
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Soluções Completas para
            <span className="block gradient-text">Sua Empresa</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos um portfólio completo de serviços contábeis e financeiros para empresas de todos os portes, 
            sempre com foco na qualidade e conformidade legal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className={`card-service fade-in fade-in-delay-${index % 3 + 1}`}>
                <div className="mb-6">
                  <div className="bg-gradient-primary p-4 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                </div>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <a 
                    href="https://wa.me/556120172777" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors duration-200"
                  >
                    Saiba mais →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <a 
            href="https://wa.me/556120172777" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary text-lg"
          >
            Solicitar Orçamento Personalizado
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
