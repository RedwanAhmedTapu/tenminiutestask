import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

interface Instructor {
  name: string;
  short_description: string;
  description: string; // HTML string
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
      <div className="w-full mx-auto px-4 ">
        <h2 className="text-2xl text-gray-900 font-semibold mb-4">{title}</h2>

        <div className="bg-white border border-gray-300 rounded-lg  p-4 flex items-start gap-6">
          <div className="w-20 h-20 relative rounded-full overflow-hidden shrink-0">
            <Image
              src={instructor.image}
              alt={instructor.name}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 hover:text-green-500 flex items-center gap-1">
              {instructor.name}
              {instructor.has_instructor_page && (
                <span className="text-sm text-gray-500"><ChevronRight/></span>
              )}
            </h3>

            <p className="text-sm text-gray-700 mb-1">{instructor.short_description}</p>

            <div
              className="text-sm text-gray-600"
              dangerouslySetInnerHTML={{ __html: instructor.description }}
            />
          </div>
        </div>
      </div>
  );
};

export default InstructorSection;
