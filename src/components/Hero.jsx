import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4 animate-fade-in-up">
          Create Your Professional Website
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          With the Website.com builder, it's easy to create a website, blog, or online store. No technical skills required.
        </p>
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <img 
                src="https://placehold.co/1200x600/E2E8F0/4A5568?text=Website+Builder+Showcase" 
                alt="Website Builder Showcase" 
                className="rounded-lg shadow-2xl mx-auto"
            />
        </div>
      </div>
    </section>
  );
};

export default Hero;