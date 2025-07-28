"use client";

import React, { useState, useEffect } from "react";
import { Media, Checklist, CtaText } from "@/types/apiTypes";
import Image from "next/image";
import CourseMediaPreview from "./CoursemediaPreview";

interface Props {
  media: Media[];
  checklist: Checklist[];
  ctaText?: CtaText;
  price?: number;
  originalPrice?: number;
}

const CourseStickyPanel: React.FC<Props> = ({
  media,
  checklist,
  ctaText,
  price = 3850,
  originalPrice = 5000,
}) => {
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMediaPreview, setShowMediaPreview] = useState(true);

  const discount = originalPrice - price;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // If scrolled more than 80vh, hide preview
      setShowMediaPreview(scrollY < windowHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
        <div className="w-full md:max-w-[330px] lg:max-w-[400px] bg-white shadow-lg text-black p-[5px] z-10">

      {/* Media Preview - only visible when showMediaPreview is true */}
      {showMediaPreview && (
        <div className="hidden md:block transition-opacity duration-300">
          <CourseMediaPreview
            media={media}
            selectedMediaIndex={selectedMediaIndex}
            setSelectedMediaIndex={setSelectedMediaIndex}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
        </div>
      )}

      {/* Price */}
      <div className="text-xl font-bold text-green-600 mb-2 px-3 py-2 bg-gray-50 rounded-lg">
        ৳{price.toLocaleString()}
        {originalPrice > price && (
          <>
            <span className="text-sm line-through text-gray-500 ml-2">
              ৳{originalPrice.toLocaleString()}
            </span>
            <span className="bg-red-100 text-red-700 text-xs ml-2 px-2 py-1 rounded">
              {discount.toLocaleString()}৳ ছাড়
            </span>
          </>
        )}
      </div>

      {/* CTA */}
     <div className="px-4">
  <button
    className="bg-green-600 hover:bg-green-700 mx-auto text-white font-medium py-3 px-4 rounded-lg w-full transition-colors mb-4 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)]"
  >
    {ctaText?.value || "Enroll Now"}
  </button>
</div>


      {/* Checklist */}
      <div className="px-4 py-2 bg-gray-50 rounded-lg">
        <h4 className="text-lg font-semibold mb-2">এই কোর্সে যা থাকছে</h4>
        <ul className="space-y-3">
          {checklist.map((item) => (
            <li key={item.id} className="flex items-start gap-2">
              <Image
                src={item.icon || "/default-icon.svg"}
                alt=""
                width={20}
                height={20}
                className="mt-0.5"
              />
              <span className="text-sm text-gray-700">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseStickyPanel;
