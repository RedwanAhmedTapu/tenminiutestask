'use client';

import React, { useState } from 'react';
import { Media, Checklist, CtaText } from '@/types/apiTypes';
import CourseStickyPanel from './CourseStickyPanel';
import CourseMediaPreview from './CourseMediaPreview';

interface Props {
  title: string;
  description: string;
  media: Media[];
  checklist: Checklist[];
  ctaText: CtaText;
  mobileView?: boolean;
}

const CourseOverviewSection: React.FC<Props> = ({
  title,
  description,
  media,
  checklist,
  ctaText,
  mobileView = false
}) => {
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="text-white py-8 md:py-12">
      <div className="container flex flex-col md:flex-row gap-6 md:gap-10 px-0 sm:px-4 relative">
        {/* Mobile Preview */}
        {mobileView && (
          <div className="mb-4">
            <CourseMediaPreview
              media={media}
              selectedMediaIndex={selectedMediaIndex}
              setSelectedMediaIndex={setSelectedMediaIndex}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
            />
          </div>
        )}
        <section className="h-auto md:h-80  md:hidden text-white py-8 md:py-12 px-4 sm:px-6 md:pl-6 lg:pl-24 xl:pl-28 2xl:pl-44 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center h-full z-0"
          style={{
            backgroundImage:
              "url('https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg')",
          }}
        />
        <div className="container  flex flex-col md:flex-row gap-y-6 md:gap-y-10  relative z-10">
          <div className="w-full md:max-w-2xl flex-1">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
             IELTS Course by Munzereen Shahid
            </h1>
            <div className="flex items-center gap-2 text-yellow-400 text-base sm:text-lg mb-2">
              ★★★★★
              <span className="text-white text-xs sm:text-sm">
                (81.8% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
              </span>
            </div>
            <p
              className="text-gray-300 text-sm sm:text-base leading-relaxed"
             >Get complete preparation of Academic IELTS and General Training IELTS in one course! Join our IELTS Course today to achieve your desired band score under the guidance of the best IELTS Instructor in the country.</p>
          </div>
        </div>
      </section>

        {/* Right Sticky Panel */}
        <CourseStickyPanel
          media={media}
          checklist={checklist}
          ctaText={ctaText}
          price={3850}
          originalPrice={5000}
          mobileView={mobileView}
        />
      </div>
    </section>
  );
};

export default CourseOverviewSection;