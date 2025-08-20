
import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/556120172777"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse"
      aria-label="Falar no WhatsApp com Grupo Sólida"
      title="Falar no WhatsApp"
    >
      <img 
        src="/lovable-uploads/98775bde-1b81-4581-835c-4dd98565b85e.png" 
        alt="WhatsApp" 
        className="h-8 w-8"
      />
    </a>
  );
};

export default WhatsAppButton;
