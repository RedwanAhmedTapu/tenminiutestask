import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

interface Instructor {
  name: string;
  short_description: string;
  description: string;
  image: string;
  slug?: string;
  has_instructor_page?: boolean;
}

interface InstructorSectionProps {
  title: string;
  instructors: Instructor[];
}

const InstructorSection: React.FC<InstructorSectionProps> = ({ title, instructors }) => {
  const instructor = instructors[0];

  return (
    <div className="w-full md:max-w-xl lg:max-w-2xl xl:max-w-3xl ">
      <h2 className="text-xl sm:text-2xl text-gray-900 font-semibold mb-4">{title}</h2>
      <div className="bg-white border border-gray-300 rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
        <div className="w-16 h-16 sm:w-20 sm:h-20 relative rounded-full overflow-hidden shrink-0 mx-auto sm:mx-0">
          <Image
            src={instructor.image}
            alt={instructor.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="text-center sm:text-left">
          <h3 className="text-base sm:text-lg font-bold text-gray-900 hover:text-green-500 flex items-center justify-center sm:justify-start gap-1">
            {instructor.name}
            {instructor.has_instructor_page && (
              <span className="text-sm text-gray-500"><ChevronRight size={16}/></span>
            )}
          </h3>
          <p className="text-xs sm:text-sm text-gray-700 mb-1">{instructor.short_description}</p>
          <div
            className="text-xs sm:text-sm text-gray-600"
            dangerouslySetInnerHTML={{ __html: instructor.description }}
          />
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;