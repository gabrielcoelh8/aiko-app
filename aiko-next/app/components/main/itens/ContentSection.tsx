"use client"

import React from 'react';
import { Typography } from "antd";

const { Paragraph } = Typography;

interface ContentSectionProps {
  title: string;
  subtitle: string;
  image: string;
  content: string[];
  textAlignment: 'left' | 'right' | 'center' | 'justify';
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  subtitle,
  image,
  content,
  textAlignment
}) => {
  return (
    <div className="flex-1 flex flex-col gap-6">
      <div className="bg-[#0d0d0d] rounded-lg overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 lg:h-72 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <div className="flex flex-col lg:flex-row lg:items-end gap-2 lg:gap-4">
            <h1 className="text-xl lg:text-2xl font-bold">{title}</h1>
            <p className="text-gray-300 text-sm lg:text-base lg:mb-1">
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-1">
        <div style={{ textAlign: textAlignment }}>
          {content.map((paragrafo: string, index: number) => (
            <Paragraph
              key={index}
              style={{ 
                fontFamily: "Bookerly, serif", // Adicionado fallback
                fontSize: 20, 
                color: "white",
                margin: '1em 0',
                lineHeight: '1.5em'
              }}
            >
              {index === 0 ? (
                <>
                  <span style={{
                    float: 'left',
                    fontSize: '4em',
                    lineHeight: '0.7em',
                    paddingRight: '0.1em',
                    fontFamily: 'Unifraktur, serif' // Adicionado fallback
                  }}>
                    {paragrafo.charAt(0)}
                  </span>
                  {paragrafo.slice(1)}
                </>
              ) : (
                paragrafo
              )}
            </Paragraph>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentSection;