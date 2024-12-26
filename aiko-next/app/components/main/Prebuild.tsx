"use client"

import conto_example from "@/app/utils/conto_example.json";
import LibrarySidebar from "./itens/LibrarySidebar";
import AuthorSidebar from "./itens/AuthorSidebar";
import MusicPlayer from "./itens/MusicPlayer";
import Navbar from "./itens/Navbar";
import React, { useState, useEffect } from 'react';
import ContentSection from "./itens/ContentSection";

type TextAlignType = 'left' | 'right' | 'center' | 'justify';

const Prebuild = () => {
  // Use useEffect to handle client-side state initialization
  const [mounted, setMounted] = useState(false);
  const [textAlignment, setTextAlignment] = useState<TextAlignType>('justify');

  // Handle client-side mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything until mounted
  if (!mounted) {
    return null;
  }

  return (
    <div className="h-screen flex flex-col bg-black text-white">
      {/* Navbar Section */}
      <Navbar 
        textAlignment={textAlignment} 
        setTextAlignment={setTextAlignment}
      />

      {/* Content Section */}
      <main className="flex-1 overflow-y-auto pt-[4.5rem] pb-[4.5rem]">
        <div className="flex flex-col lg:flex-row gap-6 px-4 lg:px-6 h-full">
          {/* Left Content Section */}
          <LibrarySidebar />
          
          {/* Mid Content Section */}
          <ContentSection 
            title={conto_example.title}
            subtitle={conto_example.subtitle}
            image={conto_example.image}
            content={conto_example.content}
            textAlignment={textAlignment}
          />

          {/* Right Content Section */}
          <div className="w-full lg:w-64 flex flex-col gap-4">
            <AuthorSidebar />
            <MusicPlayer 
              title="Dom Casmurro - Cap. 1"
              subtitle="Audiobook"
              coverUrl="https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg"
              duration="2:11"
            />
          </div>
        </div>
      </main>
      {/* Footer Section */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 bg-[#0d0d0d] px-4 py-3">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400 order-2 lg:order-1">
            © 2024 Perfake Productions. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Prebuild;