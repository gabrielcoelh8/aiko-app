import { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Music } from 'lucide-react';

type MusicPlayerProps = {
  title: string;
  subtitle: string;
  coverUrl: string;
  duration: string;
};

const MusicPlayer = ({ title, subtitle, coverUrl, duration }: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full bg-[#0d0d0d] rounded-lg p-4 mt-6">
      <div className="grid grid-cols-3 gap-4">
        
        {/* Cover and Title Section */}
        <div className="flex items-center gap-3">
          <img
            src={coverUrl}
            alt="Album cover"
            className="w-12 h-12 rounded"
          />
          <div className="flex flex-col">
            <span className="font-medium text-sm">{title}</span>
            <span className="text-xs text-gray-400">{subtitle}</span>
          </div>
        </div>

        {/* Player Controls Section */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-4">
            <button className="p-1 hover:bg-gray-800 rounded-full">
              <SkipBack className="w-4 h-4" />
            </button>
            <button 
              className="p-2 hover:bg-gray-800 rounded-full"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6" />
              )}
            </button>
            <button className="p-1 hover:bg-gray-800 rounded-full">
              <SkipForward className="w-4 h-4" />
            </button>
          </div>
          <div className="w-full flex flex-col gap-1">
            <div className="relative w-full h-1 bg-gray-800 rounded">
              <div className="absolute left-0 h-full w-1/3 bg-white rounded" />
            </div>
            <div className="flex justify-between text-xs text-gray-400">
              <span>0:00</span>
              <span>{duration}</span>
            </div>
          </div>
        </div>

        {/* Music Icon Section */}
        <div className="flex justify-end items-center">
          <button className="p-2 hover:bg-gray-800 rounded-full">
            <Music className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default MusicPlayer;