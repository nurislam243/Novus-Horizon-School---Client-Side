import React, { useState } from 'react';
import { FaPlay, FaTimes, FaGlobeAmericas } from 'react-icons/fa';

const VirtualTour = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoId = "YOUR_YOUTUBE_VIDEO_ID"; 

  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        
        {/* Header Content */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold tracking-wide">
            <FaGlobeAmericas /> VIRTUAL EXPERIENCE
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-base-content uppercase">
            Explore Our <span className="text-primary">Campus</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base-content/70 text-lg font-medium">
            Take a digital walk through our modern classrooms, advanced laboratories, and vibrant sports facilities before visiting us in person.
          </p>
        </div>

        {/* Video Thumbnail */}
        <div className="relative max-w-5xl mx-auto group">
          <div className="absolute -inset-4 bg-primary/20 rounded-[3rem] blur-2xl group-hover:bg-primary/30 transition duration-500"></div>
          
          <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800 cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1523050853051-be991f85a6ad?q=80&w=2000" 
              alt="Campus Tour" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div 
              onClick={() => setIsVideoOpen(true)}
              className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all duration-300"
            >
              <div className="relative flex items-center justify-center">
                <div className="absolute w-24 h-24 bg-primary/50 rounded-full animate-ping"></div>
                <button className="relative w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                  <FaPlay className="ml-1 text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[2000] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md">
          <button 
            onClick={() => setIsVideoOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-primary transition-colors z-50 p-2 bg-white/10 rounded-full"
          >
            <FaTimes size={30} />
          </button>
          <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl relative">
            <iframe 
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="Campus Virtual Tour"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default VirtualTour;