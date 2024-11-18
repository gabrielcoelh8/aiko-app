"use client"
import conto_example from "@/app/utils/conto_example.json";
import React, { useState } from 'react';
import { Sun, Moon, Settings, Menu, X, Bell, ChevronLeft, ChevronRight, CircleUser, EllipsisVertical, House, Plus, ALargeSmall, AlignJustify } from 'lucide-react';
import { Typography } from "antd";
const { Paragraph } = Typography;

const Prebuild = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className="min-h-screen bg-black text-white flex flex-col"
      style={{
        fontFamily: "Bookerly, Segoe UI, Roboto, sans-serif",
      }}
    >
      {/* Navbar */}
      <nav className="bg-black px-4 py-3">
        {/* Mobile Menu Button */}
        <div className="flex justify-between items-center lg:hidden">
          <button
            className="p-2 hover:bg-gray-800 rounded"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
          <div className="flex space-x-4">
            <button className="p-2 hover:bg-gray-800 rounded">Profile</button>
            <button className="p-2 hover:bg-gray-800 rounded">
              <Settings className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div
          className={`lg:flex justify-between items-center ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {/* Left buttons */}
          <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 mt-4 lg:mt-0">
            <button className="p-2 hover:bg-gray-800 rounded-full"><ChevronLeft /></button>
            <button className="p-2 hover:bg-gray-800 rounded-full"><ChevronRight /></button>
            <button className="p-2 hover:bg-gray-800 rounded-full"><House /></button>
            <button className="p-2 hover:bg-gray-800 rounded-full"><EllipsisVertical /></button>
          </div>

          {/* Right buttons - hidden on mobile as they're moved to top */}
          <div className="hidden lg:flex space-x-4">
            <button className="p-2 hover:bg-gray-800 rounded-full"><Plus /></button>
            <button className="p-2 hover:bg-gray-800 rounded-full"><Settings /></button>
            <button className="p-2 hover:bg-gray-800 rounded-full"><Bell /></button>
            <button className="p-2 hover:bg-gray-800 rounded-full"><CircleUser /></button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 py-6">
        <div className="flex flex-col lg:flex-row gap-6 px-4 lg:px-6">
          {/* Left Sidebar */}
          <div className="w-full lg:w-64 bg-[#0d0d0d] rounded-lg p-4">
            {/* Content will go here */}
          </div>

          {/* Center Content */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Banner */}
            <div className="bg-[#0d0d0d] rounded-lg overflow-hidden relative">
              <img
                src={conto_example.image}
                alt="Banner"
                className="w-full h-48 lg:h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex flex-col lg:flex-row lg:items-end gap-2 lg:gap-4">
                  <h1 className="text-xl lg:text-2xl font-bold">{conto_example.title}</h1>
                  <p className="text-gray-300 text-sm lg:text-base lg:mb-1">
                  {conto_example.subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Scrollable Content - No background */}
            <div className="h-96 overflow-y-auto px-1">
              <Typography>
                {conto_example.content.map(
                  (paragrafo: string, index: number) => (
                    <Paragraph
                      key={index}
                      style={{ fontFamily: "bookerly", fontSize: 20, color: "white" }}
                    >
                      {paragrafo}
                    </Paragraph>
                  )
                )}
              </Typography>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-64 bg-[#0d0d0d] rounded-lg p-4">
            {/* Content will go here */}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0d0d0d] px-4 py-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400 order-2 lg:order-1">
            © 2024 Perfake Productions. All rights reserved.
          </div>
          <div className="flex items-center space-x-4 order-1 lg:order-2">
            <button className="p-2 hover:bg-gray-800 rounded-full">
            <ALargeSmall />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-full">
            <AlignJustify />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-full">
            <Sun className="h-5 w-5" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Prebuild;