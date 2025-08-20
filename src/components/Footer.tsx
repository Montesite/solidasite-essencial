
import React from 'react';
import { Calculator, Phone, Mail, Instagram, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-primary p-2 rounded-xl">
                <Calculator className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Grupo Sólida</h3>
                <p className="text-white/70">Contabilidade e Assessoria</p>
              </div>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Especialistas em Contabilidade e Assessoria Empresarial, oferecendo soluções 
              completas para que sua empresa cresça de forma segura e organizada.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/Solidagrupo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/5561920172777" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-colors"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6">Nossos Serviços</h4>
            <ul className="space-y-3 text-white/80">
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Contabilidade Completa
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Assessoria Fiscal
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Departamento Pessoal
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Sistema Financeiro
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Assessoria Estratégica
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6">Contato</h4>
            <div className="space-y-4 text-white/80">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 text-secondary" />
                <div className="text-sm">
                  QS 1 BLOCO D SALA 526<br />
                  Águas Claras, Brasília - DF<br />
                  CEP: 71950-550
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary" />
                <a href="tel:+556120172777" className="hover:text-white transition-colors">
                  (61) 2017-2777
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary" />
                <a href="mailto:gruposolidafinanceiro@gmail.com" className="hover:text-white transition-colors">
                  gruposolidafinanceiro@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2024 Grupo Sólida Contabilidade. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-white/60 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
