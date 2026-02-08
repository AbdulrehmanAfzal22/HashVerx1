"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import codaImage from "../assets/projects/Coda.png";
import dramaPopImage from "../assets/projects/DramaPop.png";
import healthTapImage from "../assets/projects/HealthTap.png";
import mahbubiImage from "../assets/projects/Mahbubi.png";
import roadTrippersImage from "../assets/projects/RoadTrippers.png";
import snoonuImage from "../assets/projects/Snoonu.png";
import telegraphyImage from "../assets/projects/Telegraphy.png";
import wishImage from "../assets/projects/Wish.png";
import zedImage from "../assets/projects/Zed.png";

interface Project {
  id: string;
  name: string;
  description: string;
  image: any;
  type: string;
  features: string[];
  hasDarkOverlay?: boolean;
}

const projects: Project[] = [
  {
    id: "Yunuak",
    name: "Yunuak",
    description:
      "A powerful document collaboration platform that combines documents, spreadsheets, and applications into one unified workspace. We delivered a seamless user experience with real-time collaboration, advanced automation, and intuitive design that transforms how teams work together.",
    image: codaImage,
    type: "Productivity",
    features: [
      "Real-time Collaboration",
      "Document Management",
      "Advanced Automation",
      "Unified Workspace"
    ]
  },
  {
    id: "Forward-Thinking-Fitness",
    name: "Forward Thinking Fitness",
    description:
      "An immersive entertainment platform bringing the best of drama and pop culture to audiences worldwide. We built a streaming solution with personalized recommendations, social features, and seamless playback across all devices, creating an engaging viewing experience.",
    image: dramaPopImage,
    type: "Entertainment",
    features: [
      "Streaming Platform",
      "Personalized Recommendations",
      "Social Features",
      "Multi-device Playback"
    ]
  },
  {
    id: "Hammers-Tounges",
    name: "Hammers & Tounges",
    description:
      "A comprehensive telemedicine platform connecting patients with healthcare providers. We developed a robust system featuring video consultations, health records management, prescription services, and AI-powered symptom checking to make healthcare accessible and convenient.",
    image: healthTapImage,
    type: "Healthcare",
    features: [
      "Video Consultations",
      "Health Records Management",
      "Prescription Services",
      "AI Symptom Checking"
    ]
  },
  {
    id: "Liberty91",
    name: "Hospitality Proquotes",
    description:
      "A modern social platform designed to connect communities and foster meaningful relationships. We created an engaging user experience with real-time messaging, content sharing, and community features that bring people together in innovative ways.",
    image: mahbubiImage,
    type: "Social",
    features: [
      "Real-time Messaging",
      "Content Sharing",
      "Community Features",
      "Social Networking"
    ],
    hasDarkOverlay: true
  },
  {
    id: "Spectra-Solar",
    name: "Spectra Solar",
    description:
      "The ultimate road trip planning platform that helps travelers discover amazing places along their route. We built an intuitive mapping system with route optimization, point-of-interest discovery, and trip planning tools that make every journey unforgettable.",
    image: roadTrippersImage,
    type: "Travel",
    features: [
      "Route Optimization",
      "Point of Interest Discovery",
      "Trip Planning Tools",
      "Interactive Maps"
    ]
  },
  {
    id: "Luminary-Health",
    name: "Luminary Health",
    description:
      "A comprehensive delivery and logistics platform serving multiple markets. We developed a scalable solution with real-time tracking, multi-vendor support, payment integration, and efficient routing algorithms that ensure fast and reliable deliveries.",
    image: snoonuImage,
    type: "Logistics",
    features: [
      "Real-time Tracking",
      "Multi-vendor Support",
      "Payment Integration",
      "Route Optimization"
    ]
  },
  {
    id: "Palplug",
    name: "Palplug",
    description:
      "A modern communication platform revolutionizing how teams collaborate and share information. We created a secure messaging system with end-to-end encryption, file sharing, video calls, and team management features that keep organizations connected.",
    image: telegraphyImage,
    type: "Communication",
    features: [
      "End-to-end Encryption",
      "File Sharing",
      "Video Calls",
      "Team Management"
    ]
  },
  {
    id: "Dillon",
    name: "Dillon",
    description:
      "An innovative e-commerce platform that makes shopping fun and affordable. We built a mobile-first marketplace with personalized product discovery, social shopping features, and seamless checkout experiences that delight millions of users worldwide.",
    image: wishImage,
    type: "E-commerce",
    features: [
      "Mobile-first Marketplace",
      "Product Discovery",
      "Social Shopping",
      "Seamless Checkout"
    ]
  },
  {
    id: "Low-Coder",
    name: "Low Coder",
    description:
      "A next-generation code editor built for performance and collaboration. We developed a lightning-fast editor with real-time collaboration, AI-powered code assistance, and seamless Git integration that empowers developers to code more efficiently.",
    image: zedImage,
    type: "Developer Tools",
    features: [
      "Real-time Collaboration",
      "AI Code Assistance",
      "Git Integration",
      "High Performance"
    ]
  }
];

export default function LatestProjects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === "right" ? scrollAmount : -scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth"
      });
    }
  };

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    return () => window.removeEventListener("resize", checkScrollability);
  }, []);

  return (
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Latest{" "}
          <span className="bg-gradient-to-r from-[#51CFDF] via-[#6dd9e8] to-[#51CFDF] bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
      </div>

      {/* Full Width Slider Section */}
      <div className="relative w-full flex items-center">
        {/* Navigation Button - Left */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-4 sm:left-6 lg:left-8 xl:left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-900 flex items-center justify-center transition-all shadow-lg"
            aria-label="Scroll left"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 15L7.5 10L12.5 5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}

        {/* Scrollable Container - Shows exactly 4 cards */}
        <div className="w-full overflow-hidden">
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollability}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth px-16 sm:px-20 lg:px-24 xl:px-28"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none"
            }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex-shrink-0 rounded-lg p-8 flex flex-col justify-between relative text-white"
                style={{
                  minHeight: "400px",
                  width: "300px",
                  flexShrink: 0
                }}
              >
                {/* Background Image for all cards */}
                <div className="absolute inset-0 rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                </div>

                {/* Dark overlay for all cards */}
                <div className="absolute inset-0 rounded-lg bg-gray-800/50"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-3xl font-bold mb-6 text-white">
                      {project.name}
                    </h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="text-base text-white">
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="mt-8 w-full bg-gray-800 hover:bg-gray-700 text-white rounded-full py-3 px-6 flex items-center justify-center gap-2 transition-all group">
                    <span className="text-sm font-medium">Explore More</span>
                    <div className="w-8 h-8 rounded-full bg-[#51CFDF] flex items-center justify-center group-hover:bg-[#6dd9e8] transition-colors">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.5 9L7.5 6L4.5 3"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Button - Right */}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-4 sm:right-6 lg:right-8 xl:right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-900 flex items-center justify-center transition-all shadow-lg"
            aria-label="Scroll right"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 15L12.5 10L7.5 5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
