
import React, { useState, useEffect } from 'react';
import { Menu, X, Calculator, Users, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`nav-fixed transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white/90'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-primary p-2 rounded-xl shadow-md">
              <Calculator className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Grupo Sólida</h1>
              <p className="text-sm text-muted-foreground">Contabilidade</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Contato
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">(61) 2017-2777</span>
            </div>
            <a 
              href="https://wa.me/556120172777" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              Fale Conosco
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Contato
              </button>
              <div className="pt-4 border-t border-border">
                <div className="flex items-center space-x-2 text-sm mb-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>(61) 2017-2777</span>
                </div>
                <a 
                  href="https://wa.me/556120172777" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary text-sm inline-block"
                >
                  Fale Conosco
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
