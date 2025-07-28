import Header from "@/components/Header";
import CourseHeader from "@/components/CourseHeader";
import InstructorSection from "@/components/InstructorSection";
import FeaturesSection from "@/components/FeaturesSection";
import PointersSection from "@/components/PointerSection";
import FeatureExplanationSection from "@/components/FeatureExplanation";
import CourseOverviewSection from "@/components/CourseOverviewSection";
import { fetchProductData } from "@/utils/api";
import DOMPurify from "isomorphic-dompurify";

interface PageProps {
  params: {
    lang: string;
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { lang } = params;
  const productData = await fetchProductData(lang);

  const instructorSection = productData.sections.find(
    (s) => s.type === "instructors"
  );
  const featuresSection = productData.sections.find(
    (s) => s.type === "features"
  );
  const pointersSection = productData.sections.find(
    (s) => s.type === "pointers"
  );
  const featureExplanationsSection = productData.sections.find(
    (s) => s.type === "feature_explanations"
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 scroll-smooth">
      <Header lang={lang} />

      {/* Hero Section */}
      <section className="h-80 bg-gradient-to-r from-slate-900 to-gray-900 text-white py-12 pl-24">
        <div className="container mx-auto flex flex-col md:flex-row gap-10 px-4 relative">
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

      {/* Section Tabs */}
      <div className="bg-white sticky top-0 z-30">
        <CourseHeader sections={productData.sections} />
      </div>

      {/* Main Content */}
      <main className="flex-1 px-4 ">
        <div className="max-w-5xl ml-24 grid grid-cols-1 lg:grid-cols-3 gap-2">

          {/* LEFT COLUMN: Course Sections */}
          <div className="space-y-8 lg:col-span-2">
            {instructorSection && (
              <div id={`section-${instructorSection.order_idx}`}>
                <InstructorSection
                  title={instructorSection.name || "Course Instructor"}
                  instructors={instructorSection.values || []}
                />
              </div>
            )}

            {featuresSection && (
              <div id={`section-${featuresSection.order_idx}`}>
                <FeaturesSection
                  title={featuresSection.name || "How the Course is Laid Out"}
                  features={featuresSection.values || []}
                />
              </div>
            )}

            {pointersSection && (
              <div id={`section-${pointersSection.order_idx}`}>
                <PointersSection
                  title={pointersSection.name || "What You Will Learn"}
                  pointers={pointersSection.values || []}
                />
              </div>
            )}

            {featureExplanationsSection && (
              <div id={`section-${featureExplanationsSection.order_idx}`}>
                <FeatureExplanationSection
                  title={
                    featureExplanationsSection.name ||
                    "Course Exclusive Feature"
                  }
                  features={featureExplanationsSection.values || []}
                />
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Overview */}
          <div className="space-y-8 absolute top-20 right-52">
            <CourseOverviewSection
              title={productData.title}
              description={productData.description}
              media={productData.media}
              checklist={productData.checklist}
              ctaText={productData.cta_text}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
