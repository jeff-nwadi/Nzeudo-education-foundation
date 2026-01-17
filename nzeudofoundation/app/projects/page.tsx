"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "Community Library Restoration",
        category: "Infrastructure",
        description: "Renovating and stocking the local community library to provide a conducive learning environment for over 500 students.",
        image: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1974&auto=format&fit=crop",
        status: "Completed"
    },
    {
        title: "Digital Literacy for All",
        category: "Education",
        description: "A 6-month intensive program teaching basic computer skills, coding, and digital safety to students in rural areas.",
        image: "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?q=80&w=2070&auto=format&fit=crop",
        status: "Ongoing"
    },
    {
        title: "Annual Scholarship Fund",
        category: "Support",
        description: "Providing full tuition and learning materials for 50 high-achieving student from indigent backgrounds.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2072&auto=format&fit=crop",
        status: "Yearly"
    },
    {
        title: "Rural Medical Outreach",
        category: "Healthcare",
        description: "Partnering with volunteer doctors to provide free health checks and basic medication to student families.",
        image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=2070&auto=format&fit=crop",
        status: "Upcoming"
    },
     {
        title: "Skill Acquisition Workshop",
        category: "Vocational",
        description: "Teaching practical skills like tailoring, carpentry, and soap making to ensure economic self-reliance.",
        image: "https://images.unsplash.com/photo-1628147667232-95df876b509e?q=80&w=2069&auto=format&fit=crop",
        status: "Ongoing"
    },
     {
        title: "Clean Water Initiative",
        category: "Infrastructure",
        description: "Installing solar-powered boreholes in 3 schools to ensure access to clean and safe drinking water.",
        image: "https://images.unsplash.com/photo-1566373738870-13f6d0a7900b?q=80&w=2069&auto=format&fit=crop",
        status: "Planning"
    }
];

export default function ProjectsPage() {
    const containerRef = useRef(null);
    const heroRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Animation
            gsap.fromTo(heroRef.current, 
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
            );

            // Projects Stagger
            gsap.fromTo(".project-card",
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".projects-grid",
                        start: "top 80%",
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

  return (
    <div ref={containerRef} className="bg-white dark:bg-zinc-950 pb-20">
      
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <Image
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
            alt="Projects Hero"
            fill
            className="object-cover brightness-[0.4]"
            priority
        />
        <div ref={heroRef} className="relative z-10 container mx-auto px-6 text-center text-white">
            <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-sm font-medium tracking-wider uppercase mb-6 backdrop-blur-md bg-white/10">Our Initiatives</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 heading-text tracking-tight">Meaningful Projects.<br/>Lasting Change.</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light">
                Explore how we are transforming lives and communities through tangible, sustainable actions.
            </p>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-20 relative z-20">
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
                <div key={idx} className="project-card group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-sm transition-all duration-300 border border-gray-100 dark:border-zinc-800 flex flex-col h-full">
                    <div className="relative h-64 w-full overflow-hidden">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                         <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-green-600 shadow-sm">
                            {project.status}
                        </div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                         <span className="text-green-500 text-sm font-semibold mb-3">{project.category}</span>
                        <h3 className="text-2xl font-bold heading-text text-gray-900 dark:text-white mb-4 group-hover:text-green-600 transition-colors">{project.title}</h3>
                        <p className="text-gray-500 text-base leading-relaxed mb-6 flex-1">{project.description}</p>
                        
                        <Link href="/contact" className="inline-flex items-center text-green-600 font-bold hover:gap-3 transition-all mt-auto group/link">
                            Partner on this <ArrowRight size={18} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-24 text-center bg-green-600 rounded-3xl p-16 relative overflow-hidden shadow-sm">
             {/* decorative */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
            
            <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl heading-text font-bold text-white mb-6">Have a project in mind?</h2>
                <p className="text-green-100 mb-10 max-w-2xl mx-auto text-lg">We are always looking for new ways to make an impact. We welcome proposals and partnership opportunities from individuals and organizations.</p>
                <Link 
                    href="/contact" 
                    className="inline-block px-10 py-5 bg-white text-green-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-sm hover:shadow-sm hover:-translate-y-1 transform duration-300"
                >
                    Submit a Proposal
                </Link>
            </div>
        </div>

      </div>
    </div>
  );
}
