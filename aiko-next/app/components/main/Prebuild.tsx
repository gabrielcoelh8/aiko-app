"use client"

import conto_example from "@/app/utils/conto_example.json";
import LibrarySidebar from "./itens/LibrarySidebar";
import AuthorSidebar from "./itens/AuthorSidebar";
import MusicPlayer from "./itens/MusicPlayer";
import Navbar from "./itens/Navbar";
import React, { useState, useEffect } from 'react';
import ContentSection from "./itens/ContentSection";
import FormattingControls from "./itens/FormattingControls";

type TextAlignType = 'left' | 'right' | 'center' | 'justify';

const Prebuild = () => {
  const [mounted, setMounted] = useState(false);
  const [textAlignment, setTextAlignment] = useState<TextAlignType>('justify');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="h-screen flex flex-col bg-black text-white">
      <Navbar 
        textAlignment={textAlignment} 
        setTextAlignment={setTextAlignment}
      />

      <main className="flex-1 overflow-y-auto pt-[4.5rem] pb-[1.5rem]">
        <div className="flex flex-col lg:flex-row gap-6 px-4 lg:px-6 h-full">
          <div className="flex flex-col w-full lg:w-64">
            <LibrarySidebar />
          </div>
          <div className="flex-1 flex flex-col">
            <ContentSection 
              title={conto_example.title}
              subtitle={conto_example.subtitle}
              image={conto_example.image}
              content={conto_example.content}
              textAlignment={textAlignment}
            />
            <MusicPlayer 
              title="Dom Casmurro - Cap. 1"
              subtitle="Audiobook"
              coverUrl="https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg"
              duration="2:11"
            />
          </div>

          <div className="flex flex-col w-full lg:w-64">
            <FormattingControls 
              setTextAlignment={setTextAlignment} 
              textAlignment={textAlignment}
              />
            <AuthorSidebar />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Prebuild;