
import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

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
            <span className="block gradient-text">seu negócio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa equipe está pronta para ajudar sua empresa a crescer. Entre em contato e descubra 
            como podemos simplificar sua gestão contábil e financeira.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="card-elevated p-8">
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
                    >
                      @Solidagrupo
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-elevated p-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Horário de Atendimento</h3>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Segunda a Sexta: 8h às 18h</span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-8">
            <div className="card-elevated p-8 text-center">
              <div className="bg-gradient-primary p-6 rounded-2xl mb-6">
                <Phone className="h-12 w-12 text-white mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Solicite um Orçamento
              </h3>
              <p className="text-muted-foreground mb-8">
                Entre em contato conosco pelo WhatsApp e receba um atendimento personalizado. 
                Nossa equipe está pronta para entender suas necessidades e apresentar a melhor solução.
              </p>
              <a 
                href="https://wa.me/5561920172777" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary text-lg w-full justify-center"
              >
                Falar no WhatsApp
              </a>
            </div>

            {/* Map placeholder */}
            <div className="card-elevated p-0 overflow-hidden">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-foreground mb-2">Águas Claras - DF</h4>
                  <p className="text-muted-foreground">Localização privilegiada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
