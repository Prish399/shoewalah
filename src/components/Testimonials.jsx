import React from 'react';

const TestimonialCard = ({ quote, author, role, avatar }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
    <img src={avatar} alt={author} className="w-20 h-20 rounded-full mb-4 border-4 border-blue-100" />
    <p className="text-gray-600 italic mb-6">"{quote}"</p>
    <div className="font-bold text-gray-900">{author}</div>
    <div className="text-sm text-gray-500">{role}</div>
  </div>
);

const Testimonials = () => {
  const testimonialsData = [
    {
      quote: 'The website builder is incredibly easy to use. I had my new site up and running in just a few hours. Highly recommended!',
      author: 'Sarah Johnson',
      role: 'Small Business Owner',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    {
      quote: 'I needed a professional portfolio to showcase my work, and Website.com delivered. The templates are beautiful and modern.',
      author: 'David Chen',
      role: 'Freelance Photographer',
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
    {
      quote: 'Our online store has seen a significant boost in sales since we switched. The ecommerce tools are powerful and intuitive.',
      author: 'Maria Garcia',
      role: 'E-commerce Manager',
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Loved by Creators Everywhere</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">See what our customers are saying about their experience.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;