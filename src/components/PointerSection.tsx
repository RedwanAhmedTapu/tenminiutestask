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
      <div className="container mx-auto px-4">
        <h2 className="text-2xl text-start text-gray-900 font-bold  mb-10">{title}</h2>
        <div className="bg-white border border-gray-300 rounded-lg  p-6 md:p-10 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pointers.map((item, index) => (
              <div key={item.id || index} className="flex items-start gap-3">
                <div className="mt-1 text-blue-600">
                  <Check className="w-5 h-5" />
                </div>
                <p className="text-xl text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default PointersSection;
