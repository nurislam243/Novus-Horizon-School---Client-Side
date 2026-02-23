import React, { useState } from 'react';
import { FaExpandAlt, FaTimes } from 'react-icons/fa';

const PhotoGallery = () => {
  const [filter, setFilter] = useState('all');
  const [selectedImg, setSelectedImg] = useState(null); // Full-screen image er jonno state

  const categories = ['all', 'campus', 'academic', 'sports', 'events'];
  
  const photos = [
    { id: 1, cat: 'academic', url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7', title: 'Smart Classroom' },
    { id: 2, cat: 'academic', url: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120', title: 'Modern Science Lab' },
    { id: 3, cat: 'academic', url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6', title: 'Central Library' },
    { id: 4, cat: 'campus', url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1', title: 'Main Campus Building' },
    { id: 5, cat: 'campus', url: 'https://images.unsplash.com/photo-1541339906194-e1620f95f6ad', title: 'Garden Area' },
    { id: 6, cat: 'sports', url: 'https://images.unsplash.com/photo-1517649763962-0c623066013b', title: 'Annual Athletics' },
    { id: 7, cat: 'sports', url: 'https://images.unsplash.com/photo-1526676037777-05a232554f77', title: 'Football Tournament' },
    { id: 8, cat: 'sports', url: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018', title: 'Indoor Games' },
    { id: 9, cat: 'events', url: 'https://images.unsplash.com/photo-1511578314322-379afb476865', title: 'Cultural Festival' },
    { id: 10, cat: 'events', url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', title: 'Prize Giving Day' },
    { id: 11, cat: 'events', url: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4', title: 'Victory Day Celebration' },
    { id: 12, cat: 'campus', url: 'https://images.unsplash.com/photo-1562774053-701939374585', title: 'Campus Night View' }
  ];

  const filteredPhotos = filter === 'all' ? photos : photos.filter(p => p.cat === filter);

  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        
        {/* --- Tab Filter --- */}
        <div className="flex justify-center mb-12">
          <div className="tabs tabs-boxed bg-base-200 p-2 rounded-2xl shadow-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`tab tab-lg font-bold transition-all duration-300 uppercase text-[10px] tracking-widest px-8
                ${filter === cat ? 'tab-active !bg-primary !text-white shadow-lg' : 'hover:text-primary'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --- Standard Grid (3 Columns) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPhotos.map((photo) => (
            <div 
              key={photo.id} 
              onClick={() => setSelectedImg(photo)} // Click korle state set hobe
              className="group relative h-80 overflow-hidden rounded-[2.5rem] shadow-xl bg-base-300 cursor-pointer border-4 border-transparent hover:border-primary transition-all duration-500"
            >
              <img 
                src={photo.url} 
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Premium Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center">
                 <div className="bg-white/20 backdrop-blur-md p-4 rounded-full text-white mb-4 scale-50 group-hover:scale-100 transition-transform duration-500">
                    <FaExpandAlt size={24} />
                 </div>
                 <h3 className="text-white text-xl font-black uppercase tracking-tight">{photo.title}</h3>
                 <span className="text-primary font-bold text-xs uppercase tracking-widest mt-2">{photo.cat}</span>
              </div>
            </div>
          ))}
        </div>

        {/* --- Full-Screen Lightbox Modal --- */}
        {selectedImg && (
          <div className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedImg(null)}
              className="absolute top-8 right-8 text-white hover:text-primary transition-colors z-[1000] bg-white/10 p-3 rounded-full backdrop-blur-md"
            >
              <FaTimes size={30} />
            </button>

            {/* Full Image */}
            <div className="relative max-w-5xl w-full h-full flex flex-col justify-center items-center">
              <img 
                src={selectedImg.url} 
                className="max-w-full max-h-[80vh] rounded-2xl shadow-2xl object-contain border-2 border-white/10"
                alt={selectedImg.title}
              />
              <div className="mt-6 text-center">
                <h2 className="text-3xl font-black text-white uppercase tracking-tighter">{selectedImg.title}</h2>
                <p className="text-primary font-bold uppercase tracking-widest mt-2">{selectedImg.cat} Moments</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default PhotoGallery;