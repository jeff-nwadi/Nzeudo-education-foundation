"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "Community Library",
        category: "Infrastructure",
        image: "https://images.unsplash.com/photo-1529390003361-593652875c74?q=80&w=2069&auto=format&fit=crop",
        size: "large"
    },
    {
        title: "Digital Literacy Program",
        category: "Education",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
        size: "small"
    },
    {
        title: "Scholarship Fund",
        category: "Support",
        image: "https://images.unsplash.com/photo-1489702932289-406b7782113c?q=80&w=2072&auto=format&fit=crop",
        size: "small"
    },
    {
        title: "Rural Outreach",
        category: "Community",
        image: "https://images.unsplash.com/photo-1534958504270-5b29c238b931?q=80&w=2070&auto=format&fit=crop",
        size: "wide"
    }
];

const Gallery = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
        gsap.fromTo(".gallery-item",
            { opacity: 0, scale: 0.9 },
            {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            }
        )
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={containerRef} className="py-24 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Impact in Action</h2>
            <p className="text-gray-500 max-w-xl mx-auto">We don't just talk about change; we make it happen. Explore our recent initiatives.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {projects.map((project, idx) => (
                <div 
                    key={idx} 
                    className={cn(
                        "gallery-item group relative rounded-2xl overflow-hidden cursor-pointer",
                        project.size === "large" && "md:col-span-2 md:row-span-2 md:h-auto",
                        project.size === "wide" && "md:col-span-3",
                        project.size === "small" && "md:col-span-1"
                    )}
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <span className="text-blue-400 text-sm font-medium mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.category}</span>
                        <h3 className="text-white text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{project.title}</h3>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
