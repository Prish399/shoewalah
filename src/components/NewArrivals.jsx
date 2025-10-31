import React from 'react';

const TemplateCard = ({ imgSrc, title, category }) => (
  <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
    <img src={imgSrc} alt={title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
    <div className="p-6 bg-white">
      <p className="text-sm text-blue-600 font-semibold mb-1">{category}</p>
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
    </div>
  </div>
);

const NewArrivals = () => {
    const templates = [
        { imgSrc: 'https://placehold.co/400x300/3B82F6/FFFFFF?text=Portfolio', title: 'Modern Portfolio', category: 'Portfolio & CV' },
        { imgSrc: 'https://placehold.co/400x300/10B981/FFFFFF?text=eCommerce', title: 'Minimalist Store', category: 'Online Store' },
        { imgSrc: 'https://placehold.co/400x300/F59E0B/FFFFFF?text=Blog', title: 'Lifestyle Blog', category: 'Blog' },
        { imgSrc: 'https://placehold.co/400x300/EF4444/FFFFFF?text=Restaurant', title: 'Urban Restaurant', category: 'Business' },
    ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Start with a Professional Template</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Choose from hundreds of designer-made templates for every industry.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {templates.map((template, index) => (
            <TemplateCard key={index} {...template} />
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#" className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Browse All Templates
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;