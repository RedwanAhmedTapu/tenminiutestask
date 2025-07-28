"use client";

import { Section } from "@/types/apiTypes";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

interface Props {
  sections: Section[];
}

const CourseHeader = ({ sections }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string, idx: number) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveIdx(idx);
    }
  };

  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  // Mobile tabs version
  if (isMobile) {
    return (
      <div className="md:hidden w-full overflow-x-auto no-scrollbar px-4 py-2 bg-white sticky top-0 z-30 border-b">
        <div className="flex gap-4 min-w-max">
          {sections.map((sec, idx) => (
            <button
              key={sec.order_idx}
              onClick={() => scrollToSection(`section-${sec.order_idx}`, idx)}
              className={`px-3 py-1 rounded-full text-sm transition-all ${
                activeIdx === idx
                  ? "bg-green-600 text-white font-medium"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {sec.name}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Desktop version
  return (
    <div className="hidden md:flex items-center w-full md:max-w-xl lg:max-w-2xl xl:max-w-3xl  px-4 relative">
      {/* Left Arrow Button - only show when needed */}
      {showLeftArrow && (
        <button
          onClick={scrollLeft}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 mr-2 shrink-0"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
      )}

      {/* Scrollable Section Tabs */}
      <div
        ref={containerRef}
        className="flex-1 overflow-x-auto no-scrollbar px-2 border-b border-gray-200 mt-2"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="flex gap-4 lg:gap-8">
          {sections.map((sec, idx) => (
            <button
              key={sec.order_idx}
              onClick={() => scrollToSection(`section-${sec.order_idx}`, idx)}
              className={`pb-2 px-1 border-b-2 transition-all whitespace-nowrap text-sm sm:text-base ${
                activeIdx === idx
                  ? "text-green-600 border-green-600 font-semibold"
                  : "text-gray-600 border-transparent hover:text-gray-800"
              }`}
            >
              {sec.name}
            </button>
          ))}
        </div>
      </div>

      {/* Right Arrow Button - only show when needed */}
      {showRightArrow && (
        <button
          onClick={scrollRight}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 ml-2 shrink-0"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      )}
    </div>
  );
};

export default CourseHeader;