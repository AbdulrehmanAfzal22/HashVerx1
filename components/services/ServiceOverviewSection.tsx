'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export interface OverviewCapability {
  title: string;
  description?: string;
}

interface ServiceOverviewSectionProps {
  intro: string;
  capabilities: OverviewCapability[];
  image: string;
  imageAlt: string;
  capabilitiesHeading?: string;
}

export default function ServiceOverviewSection({
  intro,
  capabilities,
  image,
  imageAlt,
  capabilitiesHeading = 'What we are good at:',
}: ServiceOverviewSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current!); };
  }, []);

  return (
    <section className="py-28 md:py-36 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div ref={ref} className="grid md:grid-cols-12 gap-14 lg:gap-20 items-center">
          <div
            className={`md:col-span-5 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
            }`}
          >
            <p className="text-[#51CFDF] text-sm font-semibold uppercase tracking-wider mb-5">
              Overview
            </p>
            <p className="text-lg md:text-xl text-gray-900 leading-relaxed mb-10">
              {intro}
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">{capabilitiesHeading}</h3>
            <ul className="space-y-4">
              {capabilities.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#51CFDF] mt-2.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">{item.title}</span>
                    {item.description != null && item.description !== '' && (
                      <>: <span className="text-gray-700">{item.description}</span></>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`md:col-span-7 relative aspect-[4/3] md:aspect-[16/10] min-h-[320px] rounded-2xl overflow-hidden border border-[#51CFDF]/30 shadow-xl transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
            }`}
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 58vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
