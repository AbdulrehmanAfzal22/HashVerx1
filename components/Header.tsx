"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { servicesList } from "@/lib/servicesData";

const DROPDOWN_CLOSE_DELAY_MS = 50;

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleServicesEnter = () => {
    clearCloseTimeout();
    setIsServicesOpen(true);
  };

  const handleServicesLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
      closeTimeoutRef.current = null;
    }, DROPDOWN_CLOSE_DELAY_MS);
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="relative z-50 backdrop-blur-2xl">
      <div
        className="absolute inset-0"
        style={{
          background:
            "rgba(255, 255, 255, 0.95)",
        }}
      ></div>
      <nav className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="HashVerx Logo"
              width={56}
              height={56}
              className="object-contain"
            />
            <span className="text-[#0859B2] text-xl font-bold">HashVerx</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className={`font-semibold text-sm transition-colors ${
                isActive("/") ? "text-[#51CFDF]" : "text-[#0859B2] hover:text-[#51CFDF]"
              }`}
            >
              Home
            </Link>
            <div
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button
                className={`font-semibold text-sm transition-colors flex items-center space-x-1 ${
                  isServicesOpen || isActive("/services")
                    ? "text-[#51CFDF]"
                    : "text-[#0859B2] hover:text-[#51CFDF]"
                }`}
              >
                <span>Expertise</span>
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-xl border border-[#51CFDF]/30 rounded-lg shadow-2xl py-3 transition-opacity duration-100"
                  style={{
                    boxShadow:
                      "0 8px 32px rgba(81, 207, 223, 0.1), 0 0 0 1px rgba(81, 207, 223, 0.2)",
                  }}
                >
                  {servicesList.map((service, index) => (
                    <Link
                      key={index}
                      href={`/services/${service.slug}`}
                      className="block px-4 py-2.5 text-[#0859B2] text-sm hover:bg-[#51CFDF]/10 hover:text-[#51CFDF] transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {/* <Link
              href="/success-stories"
              className={`font-semibold text-sm transition-colors ${
                isActive("/success-stories")
                  ? "text-[#51CFDF]"
                  : "text-[#0859B2] hover:text-[#51CFDF]"
              }`}
            >
              Case Studies
            </Link> */}
            <Link
              href="/careers"
              className={`font-semibold text-sm transition-colors ${
                isActive("/careers")
                  ? "text-[#51CFDF]"
                  : "text-[#0859B2] hover:text-[#51CFDF]"
              }`}
            >
              Join Our Team
            </Link>
          </div>

          {/* CTA Button */}
          {pathname === "/contact" ? null : pathname.startsWith("/careers") ? (
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#0859B2] to-[#51CFDF] hover:from-[#51CFDF] hover:to-[#6dd9e8] text-white px-5 py-2 rounded-lg font-medium text-sm transition-all flex items-center space-x-1.5 shadow-lg shadow-[#51CFDF]/20 hover:shadow-xl hover:shadow-[#51CFDF]/30 hover:scale-105 transform"
            >
              <span>APPLY</span>
              <svg
                className="w-3.5 h-3.5"
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
          ) : pathname === "/" ? (
            <button
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="bg-gradient-to-r from-[#0859B2] to-[#51CFDF] hover:from-[#51CFDF] hover:to-[#6dd9e8] text-white px-5 py-2 rounded-lg font-medium text-sm transition-all flex items-center space-x-1.5 shadow-lg shadow-[#51CFDF]/20 hover:shadow-xl hover:shadow-[#51CFDF]/30 hover:scale-105 transform"
            >
              <span>CONTACT US</span>
              <svg
                className="w-3.5 h-3.5"
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
            </button>
          ) : (
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#0859B2] to-[#51CFDF] hover:from-[#51CFDF] hover:to-[#6dd9e8] text-white px-5 py-2 rounded-lg font-medium text-sm transition-all flex items-center space-x-1.5 shadow-lg shadow-[#51CFDF]/20 hover:shadow-xl hover:shadow-[#51CFDF]/30 hover:scale-105 transform"
            >
              <span>CONTACT US</span>
              <svg
                className="w-3.5 h-3.5"
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
          )}
        </div>
      </nav>
    </header>
  );
}
