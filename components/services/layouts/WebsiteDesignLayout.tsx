'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { servicesData } from '@/lib/servicesData';
import ServiceHeroSection from '../ServiceHeroSection';
import ServiceOverviewSection from '../ServiceOverviewSection';
import ServiceTypesSection from '../ServiceTypesSection';
import type { OverviewCapability } from '../ServiceOverviewSection';
import type { ServiceTypeItem } from '../ServiceTypesSection';

const slug = 'website-design-development';
const service = servicesData[slug];

const websiteTypes = service.sections.find((s) => s.id === 'website-types');
const typeItems = websiteTypes?.type === 'list' ? websiteTypes.items : [];
const overviewCapabilities: OverviewCapability[] = typeItems.map((item) => ({ title: item }));
const techStack = service.sections.find((s) => s.id === 'tech-stack');
const stackItems = techStack?.type === 'list' ? techStack.items : [];
const seo = service.sections.find((s) => s.id === 'seo-ready');
const viewWork = service.sections.find((s) => s.id === 'view-work');

const HERO_IMAGE = 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1920&q=80';
const OVERVIEW_IMAGE = 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80';

const TYPES_ITEMS: ServiceTypeItem[] = [
  { id: 'corporate', title: 'Corporate Websites', image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80', hoverText: 'Professional corporate sites that represent your brand and convert visitors. We combine clear messaging, modern design, and performance so your company makes a strong first impression.' },
  { id: 'saas', title: 'Product / SaaS Websites', image: 'https://images.unsplash.com/photo-1551431009-a802eeec77b1?w=800&q=80', hoverText: 'Landing and product pages built for conversion. We create fast, SEO-friendly pages that showcase your product and drive sign-ups and demos with clear CTAs and trust elements.' },
  { id: 'cms', title: 'CMS & Landing Pages', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80', hoverText: 'Websites on WordPress or headless CMS that your team can update. We also build standalone landing pages for campaigns, events, and product launches with forms and analytics built in.' },
];

const TYPE_ICONS = [
  <svg key="1" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  <svg key="2" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
  <svg key="3" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" /></svg>,
  <svg key="4" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" /></svg>,
];

export default function WebsiteDesignLayout() {
  const [cardsVisible, setCardsVisible] = useState(false);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const o = new IntersectionObserver(([e]) => e.isIntersecting && setCardsVisible(true), { threshold: 0.1 });
    if (cardsRef.current) o.observe(cardsRef.current);
    return () => o.disconnect();
  }, []);

  return (
    <>
      <ServiceHeroSection
        image={HERO_IMAGE}
        imageAlt="Website design and development"
        label={service.title}
        title={service.subtitle}
        ctaText="Get a quote"
      />
      <ServiceOverviewSection
        intro={service.intro}
        capabilities={overviewCapabilities}
        image={OVERVIEW_IMAGE}
        imageAlt="Website design"
        capabilitiesHeading="Website types we build:"
      />
      <ServiceTypesSection sectionTitle="Website Types We Build" items={TYPES_ITEMS} />

      <section ref={cardsRef} className="py-28 md:py-36 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0859B2] mb-16">What we offer</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {typeItems.map((item, i) => (
              <div
                key={i}
                className={`p-8 rounded-2xl bg-white border-2 border-[#51CFDF]/20 shadow-lg hover:shadow-xl hover:border-[#51CFDF]/40 transition-all duration-300 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-16 h-16 rounded-xl bg-[#0859B2]/10 text-[#0859B2] flex items-center justify-center mb-6">
                  {TYPE_ICONS[i % TYPE_ICONS.length]}
                </div>
                <h3 className="font-semibold text-gray-800 text-lg">{item}</h3>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-4">
            {stackItems.map((tech, i) => (
              <span key={i} className="px-6 py-3 rounded-lg bg-[#0859B2] text-white text-base font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-12 md:p-16 rounded-3xl border-2 border-[#51CFDF]/30 bg-gray-50">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0859B2] mb-6">SEO ready</h3>
            <p className="text-gray-600 leading-relaxed text-lg">{seo?.type === 'paragraph' ? seo.content : ''}</p>
          </div>
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">{viewWork?.type === 'paragraph' ? viewWork.content : ''}</p>
            <Link href="/success-stories" className="inline-flex items-center gap-2 bg-[#51CFDF] hover:bg-[#6dd9e8] text-white px-10 py-5 rounded-lg font-semibold text-base">
              View our work
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
