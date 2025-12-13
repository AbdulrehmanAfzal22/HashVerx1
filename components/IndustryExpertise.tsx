"use client";

import { useState } from "react";
import Image from "next/image";
import educationImage from "../assets/Industries/education.png";
import bankingImage from "../assets/Industries/Banking.png";
import ecommerceImage from "../assets/Industries/ecommerce.png";
import healthcareImage from "../assets/Industries/Healthcare.png";
import travelImage from "../assets/Industries/Travel.png";

const industries = [
  {
    number: "01",
    title: "Education",
    description:
      "We build comprehensive learning management systems, school classroom platforms, and digital assessment tools, seamlessly integrating with ParentSquare, Canvas, Google Classroom, and more.",
    image: educationImage
  },

  {
    number: "02",
    title: "Banking & Fintech",
    description:
      "Our expertise spans digital banking apps, payment gateways, blockchain solutions, lending platforms, and custom fintech software that drive financial innovation.",
    image: bankingImage
  },
  {
    number: "03",
    title: "Retail & E-commerce",
    description:
      "From e-commerce websites to inventory management systems, CRM, ERP solutions, and AI-based communication tools, we power modern retail operations.",
    image: ecommerceImage
  },
  {
    number: "04",
    title: "Healthcare",
    description:
      "We develop cutting-edge healthcare solutions including EHR/EMR systems, telemedicine applications, and patient engagement platforms that improve care delivery and patient outcomes.",
    image: healthcareImage
  },

  {
    number: "05",
    title: "Travel & Hospitality",
    description:
      "We create custom booking engines, hotel management systems, and travel applications with seamless integration to GDS, payment gateways, and airline ticketing platforms.",
    image: travelImage
  }
];

export default function IndustryExpertise() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const activeIndustry = industries[activeTab];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Where We Exceed{" "}
          <span className="bg-gradient-to-r from-[#51CFDF] via-[#6dd9e8] to-[#51CFDF] bg-clip-text text-transparent">
            Customers' Expectations
          </span>
        </h2>
        
        <div className="max-w-6xl mx-auto">
          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 pb-6 md:pb-8">
            {industries.map((industry, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 md:px-6 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-[#0859B2] to-[#51CFDF] text-white shadow-lg shadow-[#51CFDF]/30"
                      : "bg-white text-[#0859B2] border border-[#51CFDF]/60 hover:bg-[#51CFDF]/10 hover:border-[#51CFDF]/70"
                  }`}
                >
                  {industry.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      {/* Full-width border line */}
      <div className="border-b border-[#51CFDF]/60 w-full mb-8"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Tab Content */}
          <div className="mt-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div className="relative">
                <div className="bg-white border border-[#51CFDF]/60 rounded-xl overflow-hidden aspect-video relative">
                  <Image
                    src={activeIndustry.image}
                    alt={activeIndustry.title}
                    fill
                    className="object-cover transition-opacity duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
              </div>
              
              {/* Description */}
              <div>
                <h3 className="text-3xl font-bold text-[#0859B2] mb-4">
                  {activeIndustry.title}
                </h3>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  {activeIndustry.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
