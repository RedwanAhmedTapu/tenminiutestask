import React from 'react';
import CoursePageClient from '@/components/CoursePageClient';

interface PageProps {
  params: {
    lang: string;
  };
}

export default async function ProductPage({ params }: PageProps) {
  // You could preload data here if you want to pass to client
  return <CoursePageClient lang={params.lang} />;
}
