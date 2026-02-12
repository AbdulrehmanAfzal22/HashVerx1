'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { servicesData } from '@/lib/servicesData';
import ServiceHeroSection from '../ServiceHeroSection';
import ServiceOverviewSection from '../ServiceOverviewSection';
import ServiceTypesSection from '../ServiceTypesSection';
import type { OverviewCapability } from '../ServiceOverviewSection';
import type { ServiceTypeItem } from '../ServiceTypesSection';

const slug = 'odoo-erp-services';
const service = servicesData[slug];

const odooServices = service.sections.find((s) => s.id === 'odoo-services');
const serviceItems = odooServices?.type === 'list' ? odooServices.items : [];
const overviewCapabilities: OverviewCapability[] = serviceItems.map((item) => ({ title: item }));
const industry = service.sections.find((s) => s.id === 'industry-solutions');
const support = service.sections.find((s) => s.id === 'support-migration');
const book = service.sections.find((s) => s.id === 'book-consultation');

const HERO_IMAGE = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80';
const OVERVIEW_IMAGE = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80';

const TYPES_ITEMS: ServiceTypeItem[] = [
  { id: 'impl', title: 'Implementation & Customization', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', hoverText: 'We implement Odoo from the ground up and customize it to fit your processes. Our experts ensure a smooth rollout, user training, and adoption so you get value from day one.' },
  { id: 'modules', title: 'Custom Modules', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80', hoverText: 'Extend Odoo with custom modules built for your industry and workflows. We develop and integrate modules that align with your business rules and reporting needs.' },
  { id: 'integrations', title: 'Integrations & AMC', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80', hoverText: 'Connect Odoo to your existing systems and keep it running with upgrades and AMC. We handle integrations, data migration, and ongoing support so your ERP stays current and reliable.' },
];

const MODULE_ICONS = [
  <svg key="1" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
  <svg key="2" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>,
  <svg key="3" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>,
  <svg key="4" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
];

export default function OdooLayout() {
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
        imageAlt="Odoo ERP services"
        label={service.title}
        title={service.subtitle}
        ctaText="Book consultation"
      />
      <ServiceOverviewSection
        intro={service.intro}
        capabilities={overviewCapabilities}
        image={OVERVIEW_IMAGE}
        imageAlt="Odoo ERP"
        capabilitiesHeading="Our Odoo services:"
      />
      <ServiceTypesSection sectionTitle="Our Odoo Services" items={TYPES_ITEMS} />

      <section ref={cardsRef} className="py-28 md:py-36 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0859B2] mb-16">What we offer</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceItems.map((item, i) => (
              <div
                key={i}
                className={`p-8 rounded-2xl bg-white border-2 border-[#51CFDF]/20 shadow-lg hover:shadow-xl hover:border-[#51CFDF]/50 transition-all duration-300 flex flex-col items-center text-center ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-16 h-16 rounded-xl bg-[#0859B2]/10 text-[#0859B2] flex items-center justify-center mb-6">
                  {MODULE_ICONS[i % MODULE_ICONS.length]}
                </div>
                <h3 className="font-semibold text-gray-900 text-lg">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-10 md:p-14 rounded-3xl bg-[#0859B2] text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Industry solutions</h3>
              <p className="text-white/90 leading-relaxed text-lg">{industry?.type === 'paragraph' ? industry.content : ''}</p>
            </div>
            <div className="p-10 md:p-14 rounded-3xl border-2 border-[#51CFDF]/30 bg-gray-50">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0859B2] mb-6">Support & migration</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{support?.type === 'paragraph' ? support.content : ''}</p>
            </div>
          </div>

          <div className="mt-20 text-center p-12 md:p-16 rounded-3xl bg-gray-50 border-2 border-[#51CFDF]/20">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Ready to streamline with Odoo?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">{book?.type === 'paragraph' ? book.content : ''}</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#51CFDF] hover:bg-[#6dd9e8] text-white px-10 py-5 rounded-lg font-semibold text-base">
              Schedule free consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
