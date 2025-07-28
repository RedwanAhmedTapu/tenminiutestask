'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface SectionValue {
  id: string;
  title: string;
  description: string;
}

interface CourseDetailsProps {
  title: string;
  values: SectionValue[];
}

const CourseDetails: React.FC<CourseDetailsProps> = ({ title, values }) => {
  const [openIndex, setOpenIndex] = useState<number>(0); // First section is open by default

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? -1 : index));
  };

  return (
    <div className="w-full md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      <div className="border border-gray-200 rounded-lg bg-white divide-y">
        {values.map((item, index) => (
          <div key={item.id} className="group">
            {/* Accordion Header */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-5 py-4 text-left hover:bg-gray-50 focus:outline-none"
            >
              <div
                className=" text-gray-700 text-base sm:text-lg"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
              <span className="text-gray-500">
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </span>
            </button>

            {/* Accordion Content */}
            {openIndex === index && (
              <div className="px-5 pb-5 text-gray-700 text-base leading-relaxed">
                <div
                  className="space-y-4"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
