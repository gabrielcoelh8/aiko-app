import React, { useState } from 'react';
import { Sun, Settings, AlignJustify, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';

interface SettingsPopupProps {
  textAlignment: 'left' | 'right' | 'center' | 'justify';
  setTextAlignment: (alignment: 'left' | 'right' | 'center' | 'justify') => void;
}

const SettingsPopup: React.FC<SettingsPopupProps> = ({ textAlignment, setTextAlignment }) => {
  const [isOpen, setIsOpen] = useState(false);

  const getAlignmentIcon = (alignment: 'left' | 'right' | 'center' | 'justify') => {
    switch (alignment) {
      case 'left':
        return <AlignLeft className="h-5 w-5" />;
      case 'center':
        return <AlignCenter className="h-5 w-5" />;
      case 'right':
        return <AlignRight className="h-5 w-5" />;
      case 'justify':
        return <AlignJustify className="h-5 w-5" />;
    }
  };

  const alignmentOptions: ('left' | 'right' | 'center' | 'justify')[] = ['left', 'center', 'right', 'justify'];

  return (
    <div className="relative">
      <button
        type="button"
        className="p-2 hover:bg-gray-800 rounded-full"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open settings"
      >
        <Settings className="h-5 w-5" />
      </button>

      {isOpen && (
        <>
          {/* Overlay to close popup when clicking outside */}
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Popup Menu */}
          <div className="absolute right-0 mt-2 w-48 bg-[#1a1a1a] rounded-lg shadow-lg z-50">
            <div className="p-2">
              <div className="space-y-2">
                {/* Font Size Controls */}
                <div className="px-3 py-2">
                  <p className="text-sm text-gray-400 mb-2">Font Size</p>
                  <div className="flex items-center justify-between">
                    <button
                      className="p-1.5 hover:bg-gray-800 rounded"
                      aria-label="Decrease font size"
                    >
                      <Settings className="h-4 w-4" />
                    </button>
                    <span className="text-sm">100%</span>
                  </div>
                </div>

                {/* Text Alignment Controls */}
                <div className="px-3 py-2">
                  <p className="text-sm text-gray-400 mb-2">Text Alignment</p>
                  <div className="grid grid-cols-4 gap-1">
                    {alignmentOptions.map((alignment) => (
                      <button
                        key={alignment}
                        className={`p-1.5 rounded ${
                          textAlignment === alignment ? 'bg-gray-700' : 'hover:bg-gray-800'
                        }`}
                        onClick={() => {
                          setTextAlignment(alignment);
                          setIsOpen(false);
                        }}
                        aria-label={`Align text ${alignment}`}
                      >
                        {getAlignmentIcon(alignment)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Theme Toggle */}
                <div className="px-3 py-2">
                  <p className="text-sm text-gray-400 mb-2">Theme</p>
                  <button
                    className="w-full flex items-center justify-between p-1.5 hover:bg-gray-800 rounded"
                    aria-label="Toggle theme"
                  >
                    <span className="text-sm">Dark Mode</span>
                    <Sun className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SettingsPopup;