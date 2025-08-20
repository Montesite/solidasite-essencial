
import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Phone className="h-4 w-4 mr-2" />
            Entre em Contato
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Vamos conversar sobre
            <span className="block text-primary">seu negócio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa equipe está pronta para ajudar sua empresa a crescer. Entre em contato e descubra 
            como podemos simplificar sua gestão contábil e financeira.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl border border-border shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Endereço</h4>
                    <p className="text-muted-foreground">
                      QS 1 BLOCO D SALA 526<br />
                      Águas Claras, Brasília - DF<br />
                      CEP: 71950-550
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Telefone</h4>
                    <a 
                      href="tel:+556120172777" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Ligar para Grupo Sólida"
                    >
                      (61) 2017-2777
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">E-mail</h4>
                    <a 
                      href="mailto:gruposolidafinanceiro@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Enviar e-mail para Grupo Sólida"
                    >
                      gruposolidafinanceiro@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Instagram className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Instagram</h4>
                    <a 
                      href="https://instagram.com/Solidagrupo" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Seguir no Instagram"
                    >
                      @Solidagrupo
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Horário de Atendimento</h3>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Segunda a Sexta: 8h às 18h</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Sistema Financeiro disponível 24h online
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white shadow-2xl">
              <div className="text-center">
                <div className="bg-white/20 p-6 rounded-2xl mb-6 w-fit mx-auto">
                  <MessageCircle className="h-12 w-12 text-white mx-auto" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">
                  Solicite um Orçamento
                </h3>
                <p className="text-white/90 mb-8">
                  Entre em contato conosco pelo WhatsApp e receba um atendimento personalizado. 
                  Nossa equipe está pronta para entender suas necessidades e apresentar a melhor solução.
                </p>
                <a 
                  href="https://wa.me/556120172777" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 w-full justify-center"
                  aria-label="Falar no WhatsApp com Grupo Sólida"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Falar no WhatsApp
                </a>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 h-64 flex items-center justify-center relative">
                <div className="text-center z-10">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-foreground mb-2">Águas Claras - DF</h4>
                  <p className="text-muted-foreground mb-4">Localização privilegiada em Brasília</p>
                  <a 
                    href="https://maps.google.com/?q=QS+1+BLOCO+D+SALA+526+Águas+Claras+Brasília+DF" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors"
                    aria-label="Ver no Google Maps"
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    Ver no Google Maps →
                  </a>
                </div>
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full bg-gradient-to-br from-primary to-secondary"></div>
                </div>
              </div>
            </div>

            {/* Additional CTA */}
            <div className="bg-secondary/10 rounded-2xl p-6 border border-secondary/20">
              <h4 className="font-semibold text-foreground mb-2">Sistema Financeiro Moderno</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Agende uma demonstração do nosso sistema financeiro e veja como podemos 
                simplificar a gestão da sua empresa.
              </p>
              <a 
                href="https://wa.me/556120172777" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-secondary hover:text-secondary-dark font-medium transition-colors text-sm"
                aria-label="Agendar demonstração via WhatsApp"
              >
                Agendar Demonstração →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
