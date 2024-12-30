import { useState } from 'react';
import { Search, Heart, LibraryBig } from 'lucide-react';

const LibrarySidebar = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  return (
    <div className="w-full lg:w-64 bg-[#0a0a0a] rounded-3xl p-4 flex flex-col gap-4 h-full">
      {/* Top header */}
      <div className="flex items-center relative">
        <button 
          type="button"
          className="p-2 hover:bg-gray-800 rounded-full absolute left-0"
          aria-label="Back"
        >
          <LibraryBig className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-semibold w-full text-center">Biblioteca</h2>
      </div>

      {/* Navigation and Search */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-400">
          <Heart className="w-4 h-4" />
          <span>Favoritos</span>
        </div>
        
        {isSearching ? (
          <input
            type="text"
            placeholder="Pesquisar..."
            className="bg-[#1a1a1a] rounded-lg px-3 py-1 text-sm text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-700"
            autoFocus
            onBlur={() => setIsSearching(false)}
          />
        ) : (
          <button
            type="button"
            className="flex items-center gap-2 text-gray-400 hover:text-gray-300"
            onClick={() => setIsSearching(true)}
          >
            <Search className="w-4 h-4" />
            <span>Pesquisar</span>
          </button>
        )}
      </div>

      {/* Library items container - now fills remaining height */}
      <div className="bg-[#1a1a1a] rounded-lg p-3 flex flex-col gap-4 flex-grow overflow-y-auto">
        {/* Example item 1 */}
        <div 
          className={`flex gap-3 p-2 rounded-lg cursor-pointer transition-colors ${
            selectedItem === 0 ? 'bg-[#2a2a2a]' : 'hover:bg-[#252525]'
          }`}
          onClick={() => setSelectedItem(0)}
        >
          <img
            src="https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg"
            alt="Book cover"
            className="w-[60px] h-[60px] object-cover rounded"
          />
          <div className="flex flex-col justify-center">
            <h3 className="text-sm font-medium">O Príncipe</h3>
            <p className="text-sm text-gray-400">Nicolau Maquiavel</p>
          </div>
        </div>

        {/* Example item 2 */}
        <div 
          className={`flex gap-3 p-2 rounded-lg cursor-pointer transition-colors ${
            selectedItem === 1 ? 'bg-[#2a2a2a]' : 'hover:bg-[#252525]'
          }`}
          onClick={() => setSelectedItem(1)}
        >
          <img
            src="https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg"
            alt="Book cover"
            className="w-[60px] h-[60px] object-cover rounded"
          />
          <div className="flex flex-col justify-center">
            <h3 className="text-sm font-medium">1984</h3>
            <p className="text-sm text-gray-400">George Orwell</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibrarySidebar;