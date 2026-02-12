'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { servicesData } from '@/lib/servicesData';
import ServiceHeroSection from '../ServiceHeroSection';
import ServiceOverviewSection from '../ServiceOverviewSection';
import ServiceTypesSection from '../ServiceTypesSection';
import type { OverviewCapability } from '../ServiceOverviewSection';
import type { ServiceTypeItem } from '../ServiceTypesSection';

const slug = 'ai-seo-automation';
const service = servicesData[slug];

const capabilities = service.sections.find((s) => s.id === 'ai-seo-capabilities');
const capItems = capabilities?.type === 'list' ? capabilities.items : [];
const overviewCapabilities: OverviewCapability[] = capItems.map((item) => ({ title: item }));
const benefits = service.sections.find((s) => s.id === 'business-benefits');
const start = service.sections.find((s) => s.id === 'start-automation');

const HERO_IMAGE = 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80';
const OVERVIEW_IMAGE = 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80';

const TYPES_ITEMS: ServiceTypeItem[] = [
  { id: 'automation', title: 'Business Workflows', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80', hoverText: 'We automate repetitive tasks and workflows so your team can focus on high-value work. From approval flows to data sync, our solutions reduce errors and save time across HRMS, retail, and more.' },
  { id: 'ai', title: 'AI & SEO', image: 'https://images.unsplash.com/photo-1627398242794-2a7a0b25a61d?w=800&q=80', hoverText: 'AI chatbots, content, and technical SEO that drive visibility and engagement. We implement AI-powered tools and SEO strategies tailored to your industry and goals.' },
  { id: 'analytics', title: 'Analytics & Support', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', hoverText: 'Data-driven reporting and AI-enhanced customer support. We build dashboards, automate insights, and deploy intelligent support tools so you can scale without proportionally scaling headcount.' },
];

const CAP_ICONS = ['🤖', '📝', '🔍', '📊', '📁', '💬'];

export default function AIAutomationLayout() {
  const [bentoVisible, setBentoVisible] = useState(false);
  const bentoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const o = new IntersectionObserver(([e]) => e.isIntersecting && setBentoVisible(true), { threshold: 0.1 });
    if (bentoRef.current) o.observe(bentoRef.current);
    return () => o.disconnect();
  }, []);

  return (
    <>
      <ServiceHeroSection
        image={HERO_IMAGE}
        imageAlt="AI and automation"
        label={service.title}
        title={service.subtitle}
        ctaText="Start automation"
      />
      <ServiceOverviewSection
        intro={service.intro}
        capabilities={overviewCapabilities}
        image={OVERVIEW_IMAGE}
        imageAlt="AI SEO Automation"
        capabilitiesHeading="AI & SEO capabilities:"
      />
      <ServiceTypesSection sectionTitle="What We Automate & Deliver" items={TYPES_ITEMS} />

      <section ref={bentoRef} className="py-28 md:py-36 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0859B2] mb-16">What we offer</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {capItems.map((item, i) => (
              <div
                key={i}
                className={`p-8 rounded-2xl bg-white border-2 border-[#51CFDF]/20 shadow-lg hover:shadow-xl hover:border-[#51CFDF]/50 transition-all duration-300 ${bentoVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="text-3xl mb-4 block">{CAP_ICONS[i % CAP_ICONS.length]}</span>
                <h3 className="font-semibold text-gray-800 text-lg">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-12 md:p-16 rounded-3xl bg-[#0859B2] text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Business benefits</h3>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8">{benefits?.type === 'paragraph' ? benefits.content : ''}</p>
            <p className="text-white/90 mb-8 text-lg">{start?.type === 'paragraph' ? start.content : ''}</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#51CFDF] hover:bg-[#6dd9e8] text-white px-10 py-5 rounded-lg font-semibold text-base">
              Design my strategy
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
