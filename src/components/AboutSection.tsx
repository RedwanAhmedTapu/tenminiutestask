import React from 'react';

interface AboutSectionProps {
  title: string;
  content: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ title, content }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
        <div 
          className="prose prose-lg max-w-4xl mx-auto"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </section>
  );
};

export default AboutSection;