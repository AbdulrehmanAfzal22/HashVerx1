'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ServiceHeroSectionProps {
  image: string;
  imageAlt: string;
  label: string;
  title: string;
  ctaText: string;
}

export default function ServiceHeroSection({ image, imageAlt, label, title, ctaText }: ServiceHeroSectionProps) {
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
    <section className="relative min-h-[90vh] flex items-end justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div
        ref={ref}
        className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24"
      >
        <div
          className={`rounded-2xl bg-black/50 backdrop-blur-sm px-6 py-8 md:px-10 md:py-10 max-w-2xl transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-[#51CFDF] text-sm font-semibold uppercase tracking-widest mb-2">
            {label}
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#51CFDF] hover:bg-[#6dd9e8] text-white px-8 py-4 rounded-lg font-semibold text-sm transition-all shadow-lg hover:shadow-xl hover:scale-105 transform uppercase tracking-wide"
          >
            <span>{ctaText}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
