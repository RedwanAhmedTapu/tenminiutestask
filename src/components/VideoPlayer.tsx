import React from 'react';

interface VideoPlayerProps {
  url: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  // Extract YouTube video ID from URL
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeId(url);

  return (
    <div className="aspect-w-16 aspect-h-9 w-full max-w-4xl mx-auto">
      {videoId ? (
        <iframe
          className="w-full h-64 md:h-96 rounded-lg shadow-lg"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <div className="bg-gray-200 w-full h-64 md:h-96 rounded-lg flex items-center justify-center">
          Invalid YouTube URL
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;