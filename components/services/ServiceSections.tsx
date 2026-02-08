'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import type { ServiceSection as ServiceSectionType } from '@/lib/servicesData';

interface ServiceSectionsProps {
  sections: ServiceSectionType[];
}

export default function ServiceSections({ sections }: ServiceSectionsProps) {
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach((section, index) => {
      const el = sectionRefs.current[section.id];
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, index]));
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid lg:grid-cols-[200px_1fr] gap-12 items-start">
          {/* Sections nav */}
          <div className="lg:sticky lg:top-24">
            <p className="text-sm font-semibold text-[#0859B2] uppercase tracking-wider mb-4">Sections</p>
            <nav className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-sm text-gray-600 hover:text-[#51CFDF] transition-colors py-1"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Section content */}
          <div className="space-y-20">
            {sections.map((section, index) => (
              <div
                key={section.id}
                id={section.id}
                ref={(el) => {
                  sectionRefs.current[section.id] = el;
                }}
                className={`scroll-mt-28 transition-all duration-700 ${
                  visibleSections.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#0859B2] mb-6">
                  {section.title}
                </h2>

                {section.type === 'overview' && (
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl">
                    {section.content}
                  </p>
                )}

                {section.type === 'paragraph' && (
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl">
                    {section.content}
                  </p>
                )}

                {section.type === 'list' && (
                  <ul className="grid sm:grid-cols-2 gap-3 list-none">
                    {section.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[#0859B2] font-medium"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#51CFDF] mt-2.5 flex-shrink-0" />
                        <span className="text-gray-700 font-normal">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#51CFDF] hover:bg-[#6dd9e8] text-white px-8 py-4 rounded-lg font-semibold text-sm transition-all shadow-lg hover:shadow-xl hover:scale-105 transform uppercase tracking-wide"
          >
            <span>Contact</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
