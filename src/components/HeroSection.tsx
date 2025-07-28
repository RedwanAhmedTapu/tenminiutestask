import React from 'react';
import { CtaText } from '@/types/apiTypes';

interface HeroSectionProps {
  title: string;
  description: string;
  ctaText: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description, ctaText }) => {
  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <div 
            className="prose prose-lg text-white mb-6" 
            dangerouslySetInnerHTML={{ __html: description }} 
          />
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition duration-200">
            {ctaText} - ৳1000
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="bg-gray-200 w-full h-64 md:h-96 rounded-lg flex items-center justify-center text-gray-500">
            Course Thumbnail Placeholder
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;