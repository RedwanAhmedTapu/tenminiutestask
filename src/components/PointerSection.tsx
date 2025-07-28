import React from 'react';
import { Check } from 'lucide-react';

interface Pointer {
  text: string;
  color?: string;
  icon?: string;
  id?: string;
}

interface PointersSectionProps {
  title: string;
  pointers: Pointer[];
}

const PointersSection: React.FC<PointersSectionProps> = ({ title, pointers }) => {
  return (
    <div className="w-full md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
      <h2 className="text-xl sm:text-2xl text-start text-gray-900 font-bold mb-6 sm:mb-8">{title}</h2>
      <div className="bg-white border border-gray-300 rounded-lg p-4 sm:p-6 md:p-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {pointers.map((item, index) => (
            <div key={item.id || index} className="flex items-start gap-2 sm:gap-3">
              <div className="mt-1 text-blue-600">
                <Check className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <p className="text-base sm:text-lg text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PointersSection;