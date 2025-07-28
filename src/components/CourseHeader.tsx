"use client";

import { Section } from "@/types/apiTypes";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

interface Props {
  sections: Section[];
}

const CourseHeader = ({ sections }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const scrollToSection = (id: string, idx: number) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveIdx(idx);
    }
  };

  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="max-w-3xl relative flex items-center  ml-24 mt-4">
      {/* Left Arrow Button */}
      <button
        onClick={scrollLeft}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-400/80 hover:bg-gray-300 mr-2"
      >
        <span className="text-gray-700 text-sm"><ChevronLeft/></span>
      </button>

      {/* Scrollable Section Tabs */}
      <div
        ref={containerRef}
        className="flex-1 overflow-x-auto no-scrollbar  px-2 border-b"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="flex gap-8 min-w-max">
          {sections.map((sec, idx) => (
            <button
              key={sec.order_idx}
              onClick={() => scrollToSection(`section-${sec.order_idx}`, idx)}
              className={`pb-2 border-b-2 transition-all whitespace-nowrap ${
                activeIdx === idx
                  ? "text-green-600 border-green-600 font-medium"
                  : "text-gray-600 border-transparent"
              }`}
            >
              {sec.name}
            </button>
          ))}
        </div>
      </div>

      {/* Right Arrow Button */}
      <button
        onClick={scrollRight}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-400/80 hover:bg-gray-300 ml-2"
      >
        <span className="text-gray-700 text-sm"><ChevronRight/></span>
      </button>
    </div>
  );
};

export default CourseHeader;
