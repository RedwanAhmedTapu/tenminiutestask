import CoursePageClient from '@/components/CoursePageClient';
import React from 'react';

export default function ProductPage({ params }: { params: { lang: string } }) {
  return <CoursePageClient lang={params.lang} />;
}
