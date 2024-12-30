import React, { useState } from 'react';
import { Sun, Moon, Type, Music, Music2, AlignJustify, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';

interface FormattingControlsProps {
  textAlignment: 'left' | 'right' | 'center' | 'justify';
  setTextAlignment: (alignment: 'left' | 'right' | 'center' | 'justify') => void;
}

const FormattingControls: React.FC<FormattingControlsProps> = ({ textAlignment, setTextAlignment }) => {
  const [fontSize, setFontSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMusicOn, setIsMusicOn] = useState(false);

  const handleFontSizeClick = () => {
    const sizes: ('small' | 'medium' | 'large')[] = ['small', 'medium', 'large'];
    const currentIndex = sizes.indexOf(fontSize);
    const nextIndex = (currentIndex + 1) % sizes.length;
    setFontSize(sizes[nextIndex]);
  };

  const getNextAlignment = () => {
    const alignments: ('left' | 'center' | 'right' | 'justify')[] = ['left', 'center', 'right', 'justify'];
    const currentIndex = alignments.indexOf(textAlignment);
    return alignments[(currentIndex + 1) % alignments.length];
  };

  const getAlignmentIcon = () => {
    switch (textAlignment) {
      case 'left': return <AlignLeft className="h-6 w-6" />;
      case 'center': return <AlignCenter className="h-6 w-6" />;
      case 'right': return <AlignRight className="h-6 w-6" />;
      case 'justify': return <AlignJustify className="h-6 w-6" />;
    }
  };

  return (
    <div className="flex justify-center items-center gap-4 p-4 mb-3 bg-[#0a0a0a] rounded-3xl">
      <button
        onClick={handleFontSizeClick}
        className="p-2 hover:bg-gray-800 rounded-3xl transition-colors"
        aria-label={`Current font size: ${fontSize}`}
      >
        <Type className="h-6 w-6" />
        <span className="sr-only">{fontSize}</span>
      </button>

      <button
        onClick={() => setTextAlignment(getNextAlignment())}
        className="p-2 hover:bg-gray-800 rounded-3xl transition-colors"
        aria-label={`Current alignment: ${textAlignment}`}
      >
        {getAlignmentIcon()}
      </button>

      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="p-2 hover:bg-gray-800 rounded-3xl transition-colors"
        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      >
        {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
      </button>

      <button
        onClick={() => setIsMusicOn(!isMusicOn)}
        className="p-2 hover:bg-gray-800 rounded-3xl transition-colors"
        aria-label={`Turn music ${isMusicOn ? 'off' : 'on'}`}
      >
        {isMusicOn ? <Music2 className="h-6 w-6" /> : <Music className="h-6 w-6" />}
      </button>
    </div>
  );
};

export default FormattingControls;