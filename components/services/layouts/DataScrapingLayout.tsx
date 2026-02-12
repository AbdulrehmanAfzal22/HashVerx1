'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { servicesData } from '@/lib/servicesData';
import ServiceHeroSection from '../ServiceHeroSection';
import ServiceOverviewSection from '../ServiceOverviewSection';
import ServiceTypesSection from '../ServiceTypesSection';
import type { OverviewCapability } from '../ServiceOverviewSection';
import type { ServiceTypeItem } from '../ServiceTypesSection';

const slug = 'data-scraping-web-crawling';
const service = servicesData[slug];

const sources = service.sections.find((s) => s.id === 'data-sources');
const sourceItems = sources?.type === 'list' ? sources.items : [];
const deliverables = service.sections.find((s) => s.id === 'deliverables');
const deliverItems = deliverables?.type === 'list' ? deliverables.items : [];
const overviewCapabilities: OverviewCapability[] = sourceItems.map((item) => ({ title: item }));
const automation = service.sections.find((s) => s.id === 'automation');
const request = service.sections.find((s) => s.id === 'request-sample');

const HERO_IMAGE = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80';
const OVERVIEW_IMAGE = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80';

const TYPES_ITEMS: ServiceTypeItem[] = [
  { id: 'websites', title: 'Websites', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', hoverText: 'We collect and structure data from websites at scale. Whether you need product data, pricing, or content, we deliver clean, reliable datasets on a schedule that fits your workflow.' },
  { id: 'marketplaces', title: 'Marketplaces', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80', hoverText: 'Marketplace and e-commerce data for competitive intelligence and pricing. We handle complex structures and anti-scraping measures so you get the data you need in CSV, JSON, or via API.' },
  { id: 'platforms', title: 'Public Platforms', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', hoverText: 'Structured data from public platforms and directories. We design crawlers that respect terms of use and deliver normalized data ready for analytics, ML, or integration into your applications.' },
];

export default function DataScrapingLayout() {
  const [pipelineVisible, setPipelineVisible] = useState(false);
  const pipelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const o = new IntersectionObserver(([e]) => e.isIntersecting && setPipelineVisible(true), { threshold: 0.1 });
    if (pipelineRef.current) o.observe(pipelineRef.current);
    return () => o.disconnect();
  }, []);

  return (
    <>
      <ServiceHeroSection
        image={HERO_IMAGE}
        imageAlt="Data scraping and web crawling"
        label={service.title}
        title={service.subtitle}
        ctaText="Request sample"
      />
      <ServiceOverviewSection
        intro={service.intro}
        capabilities={overviewCapabilities}
        image={OVERVIEW_IMAGE}
        imageAlt="Data pipeline"
        capabilitiesHeading="Data sources:"
      />
      <ServiceTypesSection sectionTitle="Data Sources We Handle" items={TYPES_ITEMS} />

      <section ref={pipelineRef} className="py-28 md:py-36 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid md:grid-cols-3 gap-10 items-center transition-all duration-700 ${pipelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="p-8 md:p-10 rounded-2xl border-2 border-[#51CFDF]/30 bg-white">
              <p className="text-[#51CFDF] text-sm font-semibold uppercase tracking-widest mb-6">01 · Sources</p>
              <ul className="space-y-3">
                {sourceItems.map((item, i) => (
                  <li key={i} className="text-gray-700 font-medium">→ {item}</li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full border-2 border-[#0859B2] flex items-center justify-center text-[#0859B2]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </div>
            </div>
            <div className="p-8 md:p-10 rounded-2xl border-2 border-[#51CFDF]/30 bg-white">
              <p className="text-[#51CFDF] text-sm font-semibold uppercase tracking-widest mb-6">02 · Deliverables</p>
              <ul className="space-y-3">
                {deliverItems.map((item, i) => (
                  <li key={i} className="text-gray-700 font-medium">→ {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={`mt-20 p-10 md:p-12 rounded-2xl border-2 border-[#51CFDF]/20 bg-white transition-all duration-700 delay-200 ${pipelineVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-[#0859B2] text-lg font-bold uppercase tracking-widest mb-4">Automation</h3>
            <p className="text-gray-600 leading-relaxed text-lg">{automation?.type === 'paragraph' ? automation.content : ''}</p>
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">{request?.type === 'paragraph' ? request.content : ''}</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#51CFDF] hover:bg-[#6dd9e8] text-white px-10 py-5 rounded-lg font-semibold text-base">
              Request sample dataset
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
