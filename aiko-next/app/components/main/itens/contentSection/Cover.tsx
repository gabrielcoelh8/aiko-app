// Cover.tsx
import React from 'react';
import { Bookmark, Star } from 'lucide-react';

interface CoverProps {
  title: string;
  subtitle: string;
  image: string;
  author?: string;
}

const Cover: React.FC<CoverProps> = ({ title, subtitle, image, author = 'Author Name' }) => {
  return (
    <div className="bg-[#0d0d0d] rounded-3xl overflow-hidden relative">
      <img
        src={image}
        alt={title}
        className="w-full h-48 lg:h-52 object-cover grayscale"
      />
      
      <div className="absolute top-4 left-4 flex gap-4">
        {/* Action buttons */}
        <div className="flex flex-col gap-3">
          <button className="text-white hover:text-[#c76e51] transition-colors">
            <Bookmark className="w-6 h-6 fill-transparent hover:fill-current" />
          </button>
          <button className="text-white hover:text-[#c76e51] transition-colors">
            <Star className="w-6 h-6 fill-transparent hover:fill-current" />
          </button>
        </div>
        
        {/* Title and author */}
        <div className="flex flex-col">
          <h1 className="text-2xl lg:text-3xl font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">{title}</h1>
          <span className="text-[#e28465] text-lg drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">{author}</span>
        </div>
      </div>

      {/* Subtitle */}
      <div className="absolute bottom-4 right-4">
        <p className="text-gray-300 text-lg lg:text-xl italic drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
          "{subtitle}"
        </p>
      </div>
    </div>
  );
};

export default Cover;