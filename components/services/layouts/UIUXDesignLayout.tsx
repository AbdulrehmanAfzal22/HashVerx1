'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { servicesData } from '@/lib/servicesData';
import ServiceHeroSection from '../ServiceHeroSection';
import ServiceOverviewSection from '../ServiceOverviewSection';
import ServiceTypesSection from '../ServiceTypesSection';
import type { OverviewCapability } from '../ServiceOverviewSection';
import type { ServiceTypeItem } from '../ServiceTypesSection';

const slug = 'ui-ux-graphic-video-design';
const service = servicesData[slug];

const designServices = service.sections.find((s) => s.id === 'design-services');
const designItems = designServices?.type === 'list' ? designServices.items : [];
const videoServices = service.sections.find((s) => s.id === 'video-services');
const videoItems = videoServices?.type === 'list' ? videoServices.items : [];
const overviewCapabilities: OverviewCapability[] = [...designItems.map((item) => ({ title: item })), ...videoItems.map((item) => ({ title: item }))];
const portfolio = service.sections.find((s) => s.id === 'portfolio');
const contact = service.sections.find((s) => s.id === 'contact');

const HERO_IMAGE = 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&q=80';
const OVERVIEW_IMAGE = 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80';

const TYPES_ITEMS: ServiceTypeItem[] = [
  { id: 'uiux', title: 'UI/UX Design', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80', hoverText: 'User-centered interface and experience design that aligns with your product and brand. We deliver wireframes, prototypes, and high-fidelity designs so development builds the right experience from the start.' },
  { id: 'branding', title: 'Branding & Creatives', image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80', hoverText: 'Brand identity and marketing creatives that stand out. From logos and guidelines to social and campaign assets, we create a consistent visual language that engages and converts your audience.' },
  { id: 'video', title: 'Video & Motion', image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80', hoverText: 'Explainer videos, promos, and motion graphics that communicate your message clearly. We script, storyboard, and produce video content that fits your brand and performs across channels.' },
];

export default function UIUXDesignLayout() {
  const [colsVisible, setColsVisible] = useState(false);
  const colsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const o = new IntersectionObserver(([e]) => e.isIntersecting && setColsVisible(true), { threshold: 0.1 });
    if (colsRef.current) o.observe(colsRef.current);
    return () => o.disconnect();
  }, []);

  return (
    <>
      <ServiceHeroSection
        image={HERO_IMAGE}
        imageAlt="UI UX and design"
        label={service.title}
        title={service.subtitle}
        ctaText="Start a project"
      />
      <ServiceOverviewSection
        intro={service.intro}
        capabilities={overviewCapabilities}
        image={OVERVIEW_IMAGE}
        imageAlt="Design and video"
        capabilitiesHeading="Our services:"
      />
      <ServiceTypesSection sectionTitle="Design & Video Services" items={TYPES_ITEMS} />

      <section ref={colsRef} className="py-28 md:py-36 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid md:grid-cols-2 gap-10 transition-all duration-700 ${colsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="p-12 rounded-3xl bg-white border-2 border-[#51CFDF]/20 shadow-xl">
              <div className="w-16 h-16 rounded-2xl bg-[#0859B2]/10 flex items-center justify-center mb-8">
                <svg className="w-10 h-10 text-[#0859B2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4m0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Design services</h2>
              <ul className="space-y-5">
                {designItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="w-3 h-3 rounded-full bg-[#51CFDF]" />
                    <span className="font-medium text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-12 rounded-3xl bg-[#0859B2] text-white">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-8">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Video services</h2>
              <ul className="space-y-5">
                {videoItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="w-3 h-3 rounded-full bg-[#51CFDF]" />
                    <span className="text-white/90 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={`mt-20 text-center p-12 md:p-16 rounded-3xl bg-white border-2 border-[#51CFDF]/20 transition-all duration-700 delay-200 ${colsVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">See our work</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-lg">{portfolio?.type === 'paragraph' ? portfolio.content : ''}</p>
            <p className="text-gray-600 mb-8 text-lg">{contact?.type === 'paragraph' ? contact.content : ''}</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#51CFDF] hover:bg-[#6dd9e8] text-white px-10 py-5 rounded-lg font-semibold text-base">
              Get in touch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
