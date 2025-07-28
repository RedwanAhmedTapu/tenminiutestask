'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Media } from '@/types/apiTypes';

const PlayIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" fill="#E5E7EB" />
    <circle cx="32" cy="32" r="22" fill="#1F2937" />
    <polygon points="26,20 46,32 26,44" fill="white" />
  </svg>
);

interface Props {
  media: Media[];
  selectedMediaIndex: number;
  setSelectedMediaIndex: (index: number) => void;
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

const YOUTUBE_EMBED_BASE = 'https://www.youtube.com/embed/';

const CourseMediaPreview: React.FC<Props> = ({
  media,
  selectedMediaIndex,
  setSelectedMediaIndex,
  isPlaying,
  setIsPlaying,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [thumbnailUrls, setThumbnailUrls] = useState<string[]>([]);

  const selectedMedia = media[selectedMediaIndex];

  useEffect(() => {
    const urls = media.map((item) => {
      if (item.thumbnail_url) return item.thumbnail_url;
      if (item.resource_type === 'image') return item.resource_value;
      return '/placeholder-thumbnail.jpg';
    });

    setThumbnailUrls(urls);
  }, [media]);

  const scrollToThumbnail = (index: number) => {
    if (sliderRef.current) {
      const thumbnails = sliderRef.current.children;
      if (thumbnails[index]) {
        (thumbnails[index] as HTMLElement).scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
    }
  };

  const handlePlayClick = () => setIsPlaying(true);

  const handleThumbnailClick = (index: number) => {
    setSelectedMediaIndex(index);
    setIsPlaying(false);
    scrollToThumbnail(index);
  };

  const handlePrevClick = () => {
    const newIndex = (selectedMediaIndex - 1 + media.length) % media.length;
    setSelectedMediaIndex(newIndex);
    setIsPlaying(false);
    scrollToThumbnail(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = (selectedMediaIndex + 1) % media.length;
    setSelectedMediaIndex(newIndex);
    setIsPlaying(false);
    scrollToThumbnail(newIndex);
  };

  return (
    <>
      {/* Preview */}
      <div className="relative mb-4 aspect-video bg-black rounded-lg overflow-hidden group">
        {media.length > 1 && (
          <>
            <button
              onClick={handlePrevClick}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Previous media"
            >
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={handleNextClick}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Next media"
            >
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {!isPlaying ? (
          <>
            <Image
              src={thumbnailUrls[selectedMediaIndex] || '/placeholder-course.jpg'}
              alt="Course preview"
              width={400}
              height={225}
              className="w-full h-full object-cover"
              priority
            />
            {selectedMedia.resource_type === 'video' && (
              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={handlePlayClick}
              >
                <button aria-label="Play preview video" className="rounded-full p-1" type="button">
                  <PlayIcon />
                </button>
              </div>
            )}
          </>
        ) : (
          <iframe
            width="100%"
            height="100%"
            src={`${YOUTUBE_EMBED_BASE}${selectedMedia.resource_value}?autoplay=1&rel=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        )}
      </div>

      {/* Thumbnail Slider */}
      <div className="relative mb-1 p-3 bg-gray-50 rounded-lg">
        <div
          ref={sliderRef}
          className="flex gap-3 overflow-x-auto no-scrollbar pb-2 scroll-smooth snap-x snap-mandatory"
        >
          {media.map((m, idx) => (
            <div
              key={idx}
              className={`relative flex-shrink-0 w-16 h-10 rounded-md overflow-hidden border-2 cursor-pointer snap-start ${
                idx === selectedMediaIndex ? 'border-green-500' : 'border-gray-200'
              }`}
              onClick={() => handleThumbnailClick(idx)}
            >
              <Image
                src={thumbnailUrls[idx] || '/placeholder-thumbnail.jpg'}
                alt={`Thumbnail ${idx + 1}`}
                width={96}
                height={64}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {m.resource_type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CourseMediaPreview;
