import React, { useState } from 'react';
import videoThumb from '../assets/Thumb.png';


const VideoSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlay = () => {
    setShowVideo(true);
  };

  return (
    <section className="relative bg-white py-12 px-4 flex justify-center items-center">
      {!showVideo ? (
        <div className="relative w-full max-w-8xl h-[400px] overflow-hidden  shadow-lg cursor-pointer" onClick={handlePlay}>
          <img
            src={videoThumb} 
            alt="video thumbnail"
            className="w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-20 h-20 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:scale-105 transition-transform">
              <svg className="w-10 h-10 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-6xl aspect-video">
          <iframe
            className="w-full h-full "
            src="https://www.youtube.com/embed/up68UAfH0d0?autoplay=1"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </section>
  );
};

export default VideoSection;