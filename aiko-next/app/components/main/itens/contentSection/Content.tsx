import React from 'react';
import { Typography } from "antd";

const { Paragraph } = Typography;

interface ContentProps {
  content: string[];
  textAlignment: 'left' | 'right' | 'center' | 'justify';
}

const Content: React.FC<ContentProps> = ({ content, textAlignment }) => {
  return (
    <div className="flex-1 rounded-lg">
      <div className="h-[calc(100vh-29rem)] overflow-y-auto pr-4 custom-scrollbar">
        <div style={{ textAlign: textAlignment }}>
          {content.map((paragrafo: string, index: number) => (
            <Paragraph
              key={index}
              style={{ 
                fontFamily: "Bookerly, serif",
                fontSize: 21, 
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
                    fontFamily: 'Unifraktur, serif'
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

export default Content;