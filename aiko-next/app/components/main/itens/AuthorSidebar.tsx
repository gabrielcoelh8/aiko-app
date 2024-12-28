import { useState } from 'react';
import { CircleUser, Bell, BookOpen } from 'lucide-react';

const AuthorSidebar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <>
      {/* Author Info Section */}
      <div className="w-full lg:w-64 bg-[#0a0a0a] rounded-lg p-4 flex flex-col gap-4 h-full">
        {/* Author Header */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-lg font-semibold">Machado de Assis</h2>
            <p className="text-sm text-gray-400">1.000 leitores mensais</p>
          </div>
          <button 
            className="p-2 hover:bg-gray-800 rounded-full"
            aria-label="Perfil do autor"
          >
            <CircleUser className="w-6 h-6" />
          </button>
        </div>

        {/* Author Image Container */}
        <div className="w-full aspect-[3/2] relative">
          <img
            src="https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg"
            alt="Foto do autor"
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Follow Button */}
        <button 
          className="flex items-center gap-2 text-gray-400 hover:text-gray-300"
          onClick={() => setIsFollowing(!isFollowing)}
        >
          <Bell 
            className={`w-5 h-5 ${isFollowing ? 'fill-current text-white' : ''}`}
          />
          <span>{isFollowing ? 'Inscrito' : 'Inscrever-se'}</span>
        </button>

        {/* Recommended Section */}
        <div className="bg-[#1a1a1a] rounded-lg p-3 flex-grow">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-4 h-4" />
            <span className="font-medium">Recomendados</span>
          </div>

          {/* Recommended Item */}
          <div 
            className={`flex gap-3 p-2 rounded-lg cursor-pointer transition-colors ${
              selectedItem === 0 ? 'bg-[#2a2a2a]' : 'hover:bg-[#252525]'
            }`}
            onClick={() => setSelectedItem(0)}
          >
            <img
              src="https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg"
              alt="Capa do livro"
              className="w-[60px] h-[60px] object-cover rounded"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-sm font-medium">Dom Casmurro</h3>
              <p className="text-sm text-gray-400">Romance</p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default AuthorSidebar;