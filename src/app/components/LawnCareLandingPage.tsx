import React from 'react';
import {Button} from '@/components/ui/button';
import TestimonialCard from '@/components/TestimonialCard';

const ModernLawnCareLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-green-950 to-black text-white font-inter">
      <header className="container mx-auto px-8 py-4">
        {/* ... Header Content */}
      </header>
      {/* The rest of your component */}
      <section className="flex flex-col items-center justify-center py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          The Modern Lawn Care Business
        </h1>
        <p className="max-w-2xl text-lg md:text-xl mb-8">
          We're a web agency that revolutionizes your business to achieve better results, increase ROI, and boost sales.
          Our innovative approach combines cutting-edge technology with proven strategies to transform your online presence.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <Button className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-lg">
            Learn More
          </Button>
          <Button className="bg-transparent border border-pink-500 hover:bg-pink-500 text-white py-3 px-6 rounded-lg">
            Testimonials
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TestimonialCard
            name="John Doe"
            role="E-commerce Owner"
            content="LawnLogic transformed our online presence! Their innovative approach and use of technology made the entire process seamless and effective."
            rating={5}
          />
          <TestimonialCard
            name="Jane Smith"
            role="Small Business Owner"
            content="We saw an immediate increase in our website traffic and leads after working with LawnLogic. Their expertise is unmatched!"
            rating={5}
          />
        </div>
      </section>
    </div>
  );
};

export default ModernLawnCareLanding;
