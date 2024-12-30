import React from 'react';
import Cover from './contentSection/Cover';
import Content from './contentSection/Content';

interface ContentSectionProps {
  title: string;
  subtitle: string;
  image: string;
  content: string[];
  textAlignment: 'left' | 'right' | 'center' | 'justify';
}

const ContentSection: React.FC<ContentSectionProps> = (props) => {
  return (
    <div className="flex-1 flex flex-col gap-6">
      <Cover 
        title={props.title} 
        subtitle={props.subtitle} 
        image={props.image} 
        />
      <Content 
        content={props.content} 
        textAlignment={props.textAlignment} 
        />
    </div>
  );
};

export default ContentSection;