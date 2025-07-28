'use client';

import React, { useEffect, useState } from 'react';
import CourseHeader from '@/components/CourseHeader';
import InstructorSection from '@/components/InstructorSection';
import FeaturesSection from '@/components/FeaturesSection';
import PointersSection from '@/components/PointerSection';
import FeatureExplanationSection from '@/components/FeatureExplanation';
import CourseOverviewSection from '@/components/CourseOverviewSection';
import { fetchProductData } from '@/utils/api';
import DOMPurify from 'isomorphic-dompurify';

export default function CoursePageClient({ lang }: { lang: string }) {
  const [isSticky, setIsSticky] = useState(false);
  const [productData, setProductData] = useState<any>(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchProductData(lang);
      setProductData(data);
    };
    loadData();
  }, [lang]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const triggerPoint = window.innerHeight * 0.8;
      setIsSticky(scrolled > triggerPoint);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!productData) return null;

  const instructorSection = productData.sections.find(
    (s: any) => s.type === 'instructors'
  );
  const featuresSection = productData.sections.find(
    (s: any) => s.type === 'features'
  );
  const pointersSection = productData.sections.find(
    (s: any) => s.type === 'pointers'
  );
  const featureExplanationsSection = productData.sections.find(
    (s: any) => s.type === 'feature_explanations'
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 scroll-smooth relative">
      {/* Hero Section */}
      <section className="h-80 text-white py-12 lg:pl-44 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center h-80 z-0"
          style={{
            backgroundImage:
              "url('https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg')",
          }}
        />
        <div className="container mx-auto flex flex-col md:flex-row gap-10 px-4 relative z-10">
          <div className="md:max-w-2xl flex-1">
            <h1 className="text-2xl md:text-4xl font-bold mb-3">
              {productData.title}
            </h1>
            <div className="flex items-center gap-2 text-yellow-400 text-lg mb-2">
              ★★★★★
              <span className="text-white text-sm">
                (81.8% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
              </span>
            </div>
            <div
              className="text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(productData.description),
              }}
            />
          </div>
        </div>
      </section>

      {/* Sticky Overview Section */}
      <div
        className={`${
          isSticky ? 'sticky top-0 -ml-44 xl:-ml-32' : 'absolute top-20 right-24'
        } z-40 w-full transition-all duration-300`}
      >
        <CourseOverviewSection
          title={productData.title}
          description={productData.description}
          media={productData.media}
          checklist={productData.checklist}
          ctaText={productData.cta_text}
        />
      </div>

      {/* Section Header Tabs */}
      <div className="bg-white max-w-3xl sticky top-0 z-30 ml-20 mb-4">
        <CourseHeader sections={productData.sections} />
      </div>

      {/* Main Content */}
      <main className="flex-1 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
          <div className="space-y-8">
            {instructorSection && (
              <div id={`section-${instructorSection.order_idx}`}>
                <InstructorSection
                  title={instructorSection.name || 'Course Instructor'}
                  instructors={instructorSection.values || []}
                />
              </div>
            )}

            {featuresSection && (
              <div id={`section-${featuresSection.order_idx}`}>
                <FeaturesSection
                  title={featuresSection.name || 'How the Course is Laid Out'}
                  features={featuresSection.values || []}
                />
              </div>
            )}

            {pointersSection && (
              <div id={`section-${pointersSection.order_idx}`}>
                <PointersSection
                  title={pointersSection.name || 'What You Will Learn'}
                  pointers={pointersSection.values || []}
                />
              </div>
            )}

            {featureExplanationsSection && (
              <div id={`section-${featureExplanationsSection.order_idx}`}>
                <FeatureExplanationSection
                  title={
                    featureExplanationsSection.name || 'Course Exclusive Feature'
                  }
                  features={featureExplanationsSection.values || []}
                />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
