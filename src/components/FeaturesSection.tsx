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
    <div className="md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
      <h2 className="text-xl sm:text-2xl text-gray-900 font-semibold mb-4">{title}</h2>
      <div className="bg-[#0F172A] text-white rounded-xl p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start gap-3 sm:gap-4"
          >
            <div className="min-w-[32px] sm:min-w-[40px] mt-1">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={32}
                height={32}
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-1">{feature.title}</h3>
              <p className="text-xs sm:text-sm text-gray-400 text-opacity-80">{feature.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;