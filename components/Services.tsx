"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import blockchainImage from "../assets/stories/blockchain.png";
import fintechImage from "../assets/stories/fintech.png";
import healthcareImage from "../assets/stories/Healthcare.png";
import gamingImage from "../assets/stories/gaming.png";
import edTechImage from "../assets/stories/ed-tech.png";
import realEstateImage from "../assets/stories/realEstate.png";
import ecommerceImage from "../assets/stories/e-commerce.png";
import onDemandImage from "../assets/stories/onDemand.png";

const solutions = [
  { title: "Blockchain Solutions", image: blockchainImage },
  { title: "Gaming Solutions", image: gamingImage },
  { title: "Fintech Solutions", image: fintechImage },
  { title: "Ed-Tech Solutions", image: edTechImage },
  { title: "E-commerce Solutions", image: ecommerceImage },
  { title: "Healthcare Solutions", image: healthcareImage },
  { title: "Real Estate Solutions", image: realEstateImage },
  { title: "On Demand Solutions", image: onDemandImage }
];

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => new Set([...prev, index]));
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px"
        }
      );

      observer.observe(card);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="py-20 bg-white relative">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left Side - Text Content */}
          <div className="space-y-6 md:col-span-1 lg:col-span-2">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Featured Insights
            </p>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Stories of our transformations across{" "}
              <span className="text-[#51CFDF]">Services</span> and{" "}
              <span className="text-[#51CFDF]">Industries</span>
            </h3>
            <p className="text-lg md:text-xl text-gray-600">
              From Concept to Completion.
            </p>
            <Link
              href="/success-stories"
              className="inline-flex items-center space-x-2 bg-[#51CFDF] hover:bg-[#6dd9e8] text-white px-8 py-4 rounded-lg font-semibold text-sm transition-all shadow-lg hover:shadow-xl hover:scale-105 transform uppercase tracking-wide"
            >
              <span>Explore More</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {/* Right Side - Solution Cards Grid (3 columns) */}
          <div className="md:col-span-1 lg:col-span-3 grid grid-cols-3 gap-4">
            {/* Column 1: First 2 items */}
            <div className="flex flex-col gap-4">
              {solutions.slice(0, 2).map((solution, index) => (
                <div
                  key={index}
                  ref={(el: any) => (cardRefs.current[index] = el)}
                  className={`group relative aspect-square rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 ${
                    visibleCards.has(index)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                    transitionDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="absolute inset-0">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 20vw"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-end p-4 ">
                    <h4 className="text-white font-bold text-base md:text-lg leading-tight drop-shadow">
                      {solution.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            {/* Column 2: Next 3 items */}
            <div className="flex flex-col gap-4">
              {solutions.slice(2, 5).map((solution, index) => {
                const actualIndex = index + 2;
                return (
                  <div
                    key={actualIndex}
                    ref={(el: any) => (cardRefs.current[actualIndex] = el)}
                    className={`group relative aspect-square rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 ${
                      visibleCards.has(actualIndex)
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{
                      transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                      transitionDelay: `${actualIndex * 0.1}s`
                    }}
                  >
                    <div className="absolute inset-0">
                      <Image
                        src={solution.image}
                        alt={solution.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 20vw"
                      />
                    </div>
                    <div className="absolute inset-0 flex items-end p-4 ">
                      <h4 className="text-white font-bold text-base md:text-lg leading-tight drop-shadow">
                        {solution.title}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Column 3: Last 3 items */}
            <div className="flex flex-col gap-4">
              {solutions.slice(5, 8).map((solution, index) => {
                const actualIndex = index + 5;
                return (
                  <div
                    key={actualIndex}
                    ref={(el: any) => (cardRefs.current[actualIndex] = el)}
                    className={`group relative aspect-square rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 ${
                      visibleCards.has(actualIndex)
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{
                      transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                      transitionDelay: `${actualIndex * 0.1}s`
                    }}
                  >
                    <div className="absolute inset-0">
                      <Image
                        src={solution.image}
                        alt={solution.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 20vw"
                      />
                    </div>
                    <div className="absolute inset-0 flex items-end p-4 ">
                      <h4 className="text-white font-bold text-base md:text-lg leading-tight drop-shadow">
                        {solution.title}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
