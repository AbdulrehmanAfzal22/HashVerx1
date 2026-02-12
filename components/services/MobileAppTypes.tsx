'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import businessAppsImg from '../../assets/appDevelopment/BusinessApps.jpeg';
import marketplaceImg from '../../assets/appDevelopment/market.jpeg';
import erpImg from '../../assets/appDevelopment/ERP.jpeg';

const appTypes = [
  {
    id: 'business',
    title: 'Business Apps',
    image: businessAppsImg,
    hoverText:
      'We design and develop scalable business apps that streamline operations, improve productivity, and drive digital transformation. Our custom business application development services include CRM systems, workflow automation, analytics dashboards, and enterprise mobility solutions. Built with secure architecture and modern technologies, our business apps help organizations optimize processes, reduce costs, and enable data-driven decision-making across web and mobile platforms.',
  },
  {
    id: 'marketplace',
    title: 'Marketplace Apps',
    image: marketplaceImg,
    hoverText:
      'Our marketplace app development services help businesses build feature-rich, scalable, and secure multi-vendor platforms. We create custom marketplace apps with vendor management, product listings, payment gateway integration, order tracking, and real-time analytics. Designed for high performance and user engagement, our marketplace solutions support eCommerce growth, seamless transactions, and efficient buyer-seller interactions across web and mobile ecosystems.',
  },
  {
    id: 'erp',
    title: 'ERP-Integrated Apps',
    image: erpImg,
    hoverText:
      'We develop ERP-integrated apps that seamlessly connect with systems like SAP, Oracle, Microsoft Dynamics, and Odoo. Our ERP application integration services enable real-time data synchronization, process automation, and unified reporting across departments. By integrating mobile and web apps with ERP platforms, we help businesses improve operational efficiency, data accuracy, and scalability while maintaining security and compliance.',
  },
];

export default function MobileAppTypes() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-28 md:py-36 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
          Enterprise App Development Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {appTypes.map((item) => {
            const isHovered = hoveredId === item.id;
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden border border-[#51CFDF]/30 bg-gray-900 min-h-[420px]"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="absolute inset-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300" />
                </div>
                <div
                  className={`absolute inset-0 p-5 flex flex-col justify-between bg-black/85 pt-14 pb-20 transition-all duration-500 ease-out ${
                    isHovered
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4 pointer-events-none'
                  }`}
                >
                  <p className="text-white text-sm leading-relaxed overflow-y-auto flex-1">
                    {item.hoverText}
                  </p>
                </div>
                <div className="absolute top-0 left-0 right-0 p-5 z-10">
                  <h3 className="text-xl font-bold text-white drop-shadow-md">{item.title}</h3>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 flex justify-center z-10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#51CFDF] hover:bg-[#6dd9e8] text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all"
                  >
                    Get in Touch
                  </Link>
                </div>
                {isHovered && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#51CFDF] z-10" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
