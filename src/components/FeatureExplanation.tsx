'use client';

import Image from 'next/image';

interface FeatureBlock {
  id: string;
  title: string;
  checklist: string[];
  file_url: string;
}

interface FeatureExplanationSectionProps {
  title: string;
  features: FeatureBlock[];
}

const FeatureExplanationSection: React.FC<FeatureExplanationSectionProps> = ({
  title,
  features,
}) => {
  return (
      <div className="container md:max-w-xl lg:max-w-2xl xl:max-w-3xl px-4 ">
        <h2 className="text-2xl text-gray-800 font-bold mb-2 ">{title}</h2>

        <div className="border border-gray-300 rounded-lg overflow-hidden">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`flex flex-col md:flex-row justify-between items-start gap-6 p-6 md:p-8 ${
                index !== features.length - 1 ? 'border-b' : ''
              }`}
            >
              {/* Text + checklist */}
              <div className="flex-1 space-y-4">
                <h3 className="text-sm text-gray-800 font-semibold">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.checklist.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-800">
                      <span className="text-blue-500 mt-1">✔️</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="w-full md:w-56 shrink-0">
                <Image
                  src={feature.file_url}
                  alt={feature.title}
                  width={300}
                  height={300}
                  className=" w-full h-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default FeatureExplanationSection;
