"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

// Import language images
import reactImg from "../assets/languages/react.png";
import typescriptImg from "../assets/languages/TypeScript.png";
import javascriptImg from "../assets/languages/javascript.png";
import pythonImg from "../assets/languages/PYTHON.png";
import djangoImg from "../assets/languages/django.png";
import nodeImg from "../assets/languages/NODE.png";
import vueImg from "../assets/languages/vue.png";
import angularImg from "../assets/languages/anguler.png";
import mongodbImg from "../assets/languages/mongodb.png";
import postgresqlImg from "../assets/languages/Postgresql.png";
import mysqlImg from "../assets/languages/mysql.png";
import redisImg from "../assets/languages/redis.png";
import dockerImg from "../assets/languages/dok.png";
import kubernetesImg from "../assets/languages/Kubernetes.png";
import awsImg from "../assets/languages/aws.png";
import azureImg from "../assets/languages/Azure.png";
import gcpImg from "../assets/languages/gcp.png";
import phpImg from "../assets/languages/php.png";
import mernImg from "../assets/languages/mern.png";

const languages = [
  "React",
  "TypeScript",
  "JavaScript",
  "Python",
  "Django",
  "Node.js",
  "Vue.js",
  "Angular",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "Docker",
  "Kubernetes",
  "AWS",
  "Azure",
  "GCP",
  "PHP",
];

// Map language names to their imported images
const getLanguageImage = (lang: string): any => {
  const imageMap: Record<string, any> = {
    "React": reactImg,
    "TypeScript": typescriptImg,
    "JavaScript": javascriptImg,
    "Python": pythonImg,
    "Django": djangoImg,
    "Node.js": nodeImg,
    "Vue.js": vueImg,
    "Angular": angularImg,
    "MongoDB": mongodbImg,
    "PostgreSQL": postgresqlImg,
    "MySQL": mysqlImg,
    "Redis": redisImg,
    "Docker": dockerImg,
    "Kubernetes": kubernetesImg,
    "AWS": awsImg,
    "Azure": azureImg,
    "GCP": gcpImg,
    "PHP": phpImg,
    "MERN": mernImg,
  };

  return imageMap[lang] || null;
};

export default function TechStack() {
  const column1Ref = useRef<HTMLDivElement>(null);
  const column2Ref = useRef<HTMLDivElement>(null);
  const column3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const itemHeight = 100; // Height of each item including gap (increased for larger icons)
    const speed1 = 25; // pixels per second - upward
    const speed2 = 30; // pixels per second - downward
    const speed3 = 20; // pixels per second - upward (slower)
    const totalHeight = languages.length * itemHeight;

    // Column 1 - slides upward
    const animateColumn1 = () => {
      const column = column1Ref.current;
      if (!column) return;

      let position1 = 0;
      let lastTime1 = performance.now();
      let animationId1: number;

      const animate1 = (currentTime: number) => {
        const deltaTime = (currentTime - lastTime1) / 1000;
        lastTime1 = currentTime;

        position1 -= speed1 * deltaTime; // Negative for upward

        // Seamless loop: when we've scrolled one full set, reset to continue seamlessly
        if (position1 <= -totalHeight) {
          position1 += totalHeight; // Add back one set height for seamless loop
        }

        column.style.transform = `translateY(${position1}px)`;
        animationId1 = requestAnimationFrame(animate1);
      };

      const startDelay1 = setTimeout(() => {
        animationId1 = requestAnimationFrame(animate1);
      }, 500);

      return () => {
        clearTimeout(startDelay1);
        if (animationId1) {
          cancelAnimationFrame(animationId1);
        }
      };
    };

    // Column 2 - slides downward
    const animateColumn2 = () => {
      const column = column2Ref.current;
      if (!column) return;

      // Start from negative position so items are positioned above and can scroll down from top
      let position2 = -totalHeight;
      let lastTime2 = performance.now();
      let animationId2: number;

      const animate2 = (currentTime: number) => {
        const deltaTime = (currentTime - lastTime2) / 1000;
        lastTime2 = currentTime;

        position2 += speed2 * deltaTime; // Positive for downward

        // Seamless loop: when we've scrolled past 0 (one full set), reset to continue seamlessly
        // This ensures items continuously appear from the top as they scroll down
        if (position2 >= 0) {
          position2 -= totalHeight; // Reset back to negative position for seamless loop
        }

        column.style.transform = `translateY(${position2}px)`;
        animationId2 = requestAnimationFrame(animate2);
      };

      const startDelay2 = setTimeout(() => {
        animationId2 = requestAnimationFrame(animate2);
      }, 1000);

      return () => {
        clearTimeout(startDelay2);
        if (animationId2) {
          cancelAnimationFrame(animationId2);
        }
      };
    };

    // Column 3 - slides upward (slower)
    const animateColumn3 = () => {
      const column = column3Ref.current;
      if (!column) return;

      let position3 = 0;
      let lastTime3 = performance.now();
      let animationId3: number;

      const animate3 = (currentTime: number) => {
        const deltaTime = (currentTime - lastTime3) / 1000;
        lastTime3 = currentTime;

        position3 -= speed3 * deltaTime; // Negative for upward

        // Seamless loop: when we've scrolled one full set, reset to continue seamlessly
        if (position3 <= -totalHeight) {
          position3 += totalHeight; // Add back one set height for seamless loop
        }

        column.style.transform = `translateY(${position3}px)`;
        animationId3 = requestAnimationFrame(animate3);
      };

      const startDelay3 = setTimeout(() => {
        animationId3 = requestAnimationFrame(animate3);
      }, 1500);

      return () => {
        clearTimeout(startDelay3);
        if (animationId3) {
          cancelAnimationFrame(animationId3);
        }
      };
    };

    const cleanup1 = animateColumn1();
    const cleanup2 = animateColumn2();
    const cleanup3 = animateColumn3();

    return () => {
      if (cleanup1) cleanup1();
      if (cleanup2) cleanup2();
      if (cleanup3) cleanup3();
    };
  }, []);

  // Create three completely different arrangements for each column
  // Column 1: Original order
  const column1Languages = languages;
  
  // Column 2: Completely different arrangement
  const column2Languages = [
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "GCP",
    "PHP",
    "React",
    "TypeScript",
    "JavaScript",
    "Python",
    "Django",
    "Node.js",
    "Vue.js",
    "Angular",
  ];
  
  // Column 3: Another completely different arrangement
  const column3Languages = [
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "GCP",
    "PHP",
    "Angular",
    "Vue.js",
    "Node.js",
    "Django",
    "Python",
    "JavaScript",
    "TypeScript",
    "React",
    "Redis",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
  ];

  // Duplicate arrays for seamless scrolling
  const duplicatedLanguages1 = [...column1Languages, ...column1Languages, ...column1Languages, ...column1Languages];
  const duplicatedLanguages2 = [...column2Languages, ...column2Languages, ...column2Languages, ...column2Languages];
  const duplicatedLanguages3 = [...column3Languages, ...column3Languages, ...column3Languages, ...column3Languages];

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Sliding Columns */}
          <div className="relative order-2 lg:order-1">
            <div 
              className="bg-white border border-[#51CFDF]/40 rounded-2xl p-6 lg:p-8 overflow-hidden h-[500px] relative"
              style={{
                boxShadow: "0 4px 12px rgba(81, 207, 223, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
              }}
            >
              <div className="absolute inset-0 flex gap-4 justify-center items-start pt-2">
                {/* Column 1 - Upward */}
                <div className="relative w-full max-w-[120px] overflow-hidden">
                  <div
                    ref={column1Ref}
                    className="flex flex-col gap-4"
                    style={{
                      willChange: 'transform',
                    }}
                  >
                    {duplicatedLanguages1.map((lang, index) => {
                      const imagePath = getLanguageImage(lang);
                      return (
                        <div
                          key={`col1-${index}`}
                          className="flex-shrink-0 bg-white border border-[#51CFDF]/50 rounded-lg px-4 py-4 text-center hover:border-[#51CFDF] hover:shadow-lg hover:shadow-[#51CFDF]/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                          style={{
                            boxShadow: "0 2px 8px rgba(81, 207, 223, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.03)"
                          }}
                        >
                          {imagePath && (
                            <div className="relative w-16 h-16">
                              <Image
                                src={imagePath}
                                alt={lang}
                                fill
                                className="object-contain"
                                sizes="64px"
                              />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Column 2 - Downward */}
                <div className="relative w-full max-w-[120px] overflow-hidden">
                  <div
                    ref={column2Ref}
                    className="flex flex-col gap-4"
                    style={{
                      willChange: 'transform',
                    }}
                  >
                    {duplicatedLanguages2.map((lang, index) => {
                      const imagePath = getLanguageImage(lang);
                      return (
                        <div
                          key={`col2-${index}`}
                          className="flex-shrink-0 bg-white border border-[#51CFDF]/50 rounded-lg px-4 py-4 text-center hover:border-[#51CFDF] hover:shadow-lg hover:shadow-[#51CFDF]/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                          style={{
                            boxShadow: "0 2px 8px rgba(81, 207, 223, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.03)"
                          }}
                        >
                          {imagePath && (
                            <div className="relative w-16 h-16">
                              <Image
                                src={imagePath}
                                alt={lang}
                                fill
                                className="object-contain"
                                sizes="64px"
                              />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Column 3 - Upward (slower) */}
                <div className="relative w-full max-w-[120px] overflow-hidden">
                  <div
                    ref={column3Ref}
                    className="flex flex-col gap-4"
                    style={{
                      willChange: 'transform',
                    }}
                  >
                    {duplicatedLanguages3.map((lang, index) => {
                      const imagePath = getLanguageImage(lang);
                      return (
                        <div
                          key={`col3-${index}`}
                          className="flex-shrink-0 bg-white border border-[#51CFDF]/50 rounded-lg px-4 py-4 text-center hover:border-[#51CFDF] hover:shadow-lg hover:shadow-[#51CFDF]/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                          style={{
                            boxShadow: "0 2px 8px rgba(81, 207, 223, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.03)"
                          }}
                        >
                          {imagePath && (
                            <div className="relative w-16 h-16">
                              <Image
                                src={imagePath}
                                alt={lang}
                                fill
                                className="object-contain"
                                sizes="64px"
                              />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Our Software Company Helps you Achieve{" "}
              <span className="bg-gradient-to-r from-[#51CFDF] via-[#6dd9e8] to-[#51CFDF] bg-clip-text text-transparent">
                3X Growth
              </span>
            </h2>
            <p className="text-base md:text-lg text-gray-400 mb-6 leading-relaxed">
              We help you become a truly{" "}
              <span className="underline decoration-[#51CFDF] underline-offset-4 text-[#0859B2]">
                data-driven organization
              </span>
              . Our{" "}
              <span className="underline decoration-[#51CFDF] underline-offset-4 text-[#0859B2]">
                AI-powered solutions
              </span>{" "}
              drive smarter decisions and support the cultural change needed for
              modern analytics.
            </p>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed">
              We design and implement{" "}
              <span className="underline decoration-[#51CFDF] underline-offset-4 text-[#0859B2]">
                smart data solutions
              </span>{" "}
              that drive smarter decision-making while supporting the cultural
              and organizational changes necessary for adopting advanced data
              technologies across your enterprise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
