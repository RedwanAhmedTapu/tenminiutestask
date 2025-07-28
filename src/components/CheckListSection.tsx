import React from 'react';
import Image from 'next/image';

interface ChecklistItem {
  icon: string;
  text: string;
  color?: string;
}

interface ChecklistSectionProps {
  items: ChecklistItem[];
  ctaText: string;
}

const ChecklistSection: React.FC<ChecklistSectionProps> = ({ items, ctaText }) => {
  return (
    <section className="py-12 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {items.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <Image 
                    src={item.icon} 
                    alt="" 
                    width={24} 
                    height={24} 
                    className="h-6 w-6 object-contain"
                  />
                </div>
                <span className="text-lg">{item.text}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg transition duration-200">
              {ctaText} - ৳1000
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChecklistSection;