import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import NewArrivals from './components/NewArrivals';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <main>
        <Hero />
        <Features />
        <NewArrivals />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;