import React from 'react';
import Image from 'next/image';

interface Feature {
  icon: string;
  title: string;
  subtitle: string;
}

interface FeaturesSectionProps {
  title: string;
  features: Feature[];
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ title, features }) => {
  return (
      <div className="mx-auto px-4">
        <h2 className="text-2xl text-gray-900 font-semibold mb-4">{title}</h2>
        <div className="bg-[#0F172A] text-white rounded-xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4"
            >
              <div className="min-w-[40px] mt-1">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm  text-gray-400 text-opacity-80">{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default FeaturesSection;
