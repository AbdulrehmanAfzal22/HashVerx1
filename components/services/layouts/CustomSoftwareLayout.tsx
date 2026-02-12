'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { servicesData } from '@/lib/servicesData';
import ServiceHeroSection from '../ServiceHeroSection';
import ServiceOverviewSection from '../ServiceOverviewSection';
import ServiceTypesSection from '../ServiceTypesSection';
import type { OverviewCapability } from '../ServiceOverviewSection';
import type { ServiceTypeItem } from '../ServiceTypesSection';
import ServiceTechStack from '../ServiceTechStack';

const slug = 'custom-software-development';
const service = servicesData[slug];

const whatWeBuild = service.sections.find((s) => s.id === 'what-we-build');
const buildItems = whatWeBuild?.type === 'list' ? whatWeBuild.items : [];
const overviewCapabilities: OverviewCapability[] = buildItems.map((item) => ({ title: item }));
const whyUs = service.sections.find((s) => s.id === 'why-us');
const contact = service.sections.find((s) => s.id === 'contact');

const HERO_IMAGE = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80';
const OVERVIEW_IMAGE = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80';

const TYPES_ITEMS: ServiceTypeItem[] = [
  { id: 'web', title: 'Web Applications', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', hoverText: 'We build custom web applications tailored to your business. From responsive front-ends to scalable back-ends, our solutions drive growth and efficiency with modern technologies and best practices.' },
  { id: 'saas', title: 'SaaS Platforms', image: 'https://images.unsplash.com/photo-1551431009-a802eeec77b1?w=800&q=80', hoverText: 'Scalable SaaS products that grow with your users. We deliver multi-tenant architecture, subscription management, and analytics so you can focus on your customers and product.' },
  { id: 'business', title: 'Business Systems', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80', hoverText: 'Internal tools and business systems that streamline operations. We integrate with your existing stack and deliver secure, maintainable software that your team will rely on every day.' },
];

export default function CustomSoftwareLayout() {
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const o = new IntersectionObserver(([e]) => e.isIntersecting && setSectionVisible(true), { threshold: 0.1 });
    if (sectionRef.current) o.observe(sectionRef.current);
    return () => o.disconnect();
  }, []);

  return (
    <>
      <ServiceHeroSection
        image={HERO_IMAGE}
        imageAlt="Custom software development"
        label={service.title}
        title={service.subtitle}
        ctaText="Start a project"
      />
      <ServiceOverviewSection
        intro={service.intro}
        capabilities={overviewCapabilities}
        image={OVERVIEW_IMAGE}
        imageAlt="Custom software development"
        capabilitiesHeading="What we build:"
      />
      <ServiceTypesSection sectionTitle="What We Build" items={TYPES_ITEMS} />

      <section ref={sectionRef} className="py-28 md:py-36 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {buildItems.map((item, i) => (
              <div key={i} className="p-6 md:p-8 rounded-2xl border-2 border-[#0859B2]/10 bg-white hover:border-[#51CFDF]/40 transition-colors flex items-center gap-4">
                <span className="w-14 h-14 rounded-xl bg-[#0859B2] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">{i + 1}</span>
                <span className="font-semibold text-gray-800 text-lg">{item}</span>
              </div>
            ))}
          </div>

          <div className={`mt-20 rounded-3xl border-2 border-[#51CFDF]/25 bg-white p-10 md:p-14 shadow-lg transition-all duration-700 delay-100 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <ServiceTechStack />
          </div>

          <div className={`mt-20 grid md:grid-cols-2 gap-10 transition-all duration-700 delay-200 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="p-10 md:p-12 rounded-3xl bg-[#0859B2] text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Why us</h3>
              <p className="text-white/90 leading-relaxed text-lg">{whyUs?.type === 'paragraph' ? whyUs.content : ''}</p>
            </div>
            <div className="p-10 md:p-12 rounded-3xl border-2 border-[#51CFDF]/30 bg-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0859B2] mb-6">Get started</h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-8">{contact?.type === 'paragraph' ? contact.content : ''}</p>
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#51CFDF] hover:bg-[#6dd9e8] text-white px-8 py-4 rounded-lg font-semibold text-base w-fit">
                Book a consultation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
