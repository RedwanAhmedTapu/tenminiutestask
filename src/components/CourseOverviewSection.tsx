'use client';

import React, { useState } from 'react';
import { Media, Checklist, CtaText } from '@/types/apiTypes';
import CourseStickyPanel from './CourseStickyPanel';
import CourseMediaPreview from './CoursemediaPreview';

interface Props {
  title: string;
  description: string;
  media: Media[];
  checklist: Checklist[];
  ctaText: CtaText;
}

const CourseOverviewSection: React.FC<Props> = ({
  title,
  description,
  media,
  checklist,
  ctaText,
}) => {
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className=" text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row gap-10 px-4 relative">
        {/* Left Content */}
        <div className="md:max-w-[calc(100%-400px)] flex-1">
          {/* Preview for mobile */}
          <div className="block md:hidden mb-6">
            <CourseMediaPreview
              media={media}
              selectedMediaIndex={selectedMediaIndex}
              setSelectedMediaIndex={setSelectedMediaIndex}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
            />
          </div>

        
        </div>

        {/* Right Sticky Panel */}
        <CourseStickyPanel
          media={media}
          checklist={checklist}
          ctaText={ctaText}
          price={3850}
          originalPrice={5000}
        />
      </div>
    </section>
  );
};

export default CourseOverviewSection;
