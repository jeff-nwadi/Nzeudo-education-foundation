"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Quote, Target, Lightbulb, Users } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NzeudoLogo from "@/images/Engr.-Nze-M.B.C-Osuagwu-e1742480905499.jpeg";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Parallax
            gsap.to(".hero-img", {
                yPercent: 20,
                ease: "none",
                scrollTrigger: {
                    trigger: ".hero-section",
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });

            // Reveal Sections
            const sections = gsap.utils.toArray(".reveal-section");
            sections.forEach((section: any) => {
                gsap.fromTo(section,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 80%",
                        }
                    }
                );
            });

            // Team Stagger
            gsap.fromTo(".team-card",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".team-grid",
                        start: "top 85%",
                    }
                }
            );

        }, containerRef);
        return () => ctx.revert();
    }, []);

  return (
    <div ref={containerRef} className="bg-white dark:bg-zinc-950 pb-20">
      
      {/* Hero Section */}
      <div className="hero-section relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <Image
            src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop"
            alt="About Hero"
            fill
            className="hero-img object-cover brightness-[0.35]"
            priority
        />
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">About Us</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
                An Enduring Human Capital Development Foundation committed to empowering the next generation.
            </p>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-20 relative z-20 space-y-24">
        
        {/* Founder Section */}
        <div className="reveal-section bg-white dark:bg-zinc-900 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-zinc-800 flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-2/5 shrink-0">
                <div className="relative aspect-3/4 rounded-2xl overflow-hidden shadow-sm border-4 border-white dark:border-zinc-800">
                    <Image 
                         src={NzeudoLogo} 
                         alt="Engr. Sir Nze M.B.C Osuagwu"
                         fill
                         className="object-cover"
                    />
                     <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/90 to-transparent p-6 text-white">
                        <p className="font-bold text-lg">Engr. Sir Nze M.B.C Osuagwu</p>
                        <p className="text-sm opacity-80">Founder & Financier</p>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-3/5">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">The Visionary Behind NEF</h2>
                <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    <p>
                        <strong>Nzeudo Education Foundation</strong> is a non-profit organization founded by <strong className="text-green-600">Engr. Sir Nze M.B.C Osuagwu</strong>, a chartered chemical engineer with deep expertise in the petroleum industry.
                    </p>
                    <p>
                        Beyond his professional accolades, Nze Osuagwu is a dedicated humanitarian who firmly believes that <span className="italic text-gray-900 dark:text-white font-medium">"education is the harbinger of human capital development."</span>
                    </p>
                    <div className="flex items-start gap-4 p-6 bg-green-50 dark:bg-green-900/10 rounded-2xl border border-green-100 dark:border-green-900/30">
                        <Quote className="text-green-600 shrink-0 mt-1" size={24} />
                        <div>
                            <p className="italic text-gray-700 dark:text-gray-200 font-medium mb-3">
                                "I do what I do not because I am wealthy but because I love humanity and am ever willing to give back to the community."
                            </p>
                            <cite className="text-sm font-bold text-green-600 not-italic">— Engr. Sir Nze M.B.C Osuagwu</cite>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="reveal-section grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-zinc-900 p-10 rounded-3xl shadow-sm border border-gray-100 dark:border-zinc-800 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center text-red-600 mb-6">
                    <Target size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    To serve as a platform for supporting <strong className="text-gray-900 dark:text-white">indigent but brilliant children</strong> who have lost their family breadwinner. We focus on the voiceless, the downtrodden, and the neglected, providing them the means to access quality education.
                </p>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-10 rounded-3xl shadow-sm border border-gray-100 dark:border-zinc-800 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 rounded-2xl flex items-center justify-center text-amber-600 mb-6">
                    <Lightbulb size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                     To enhance the development of students who yearn for education, widening their horizon into the world and empowering them to become self-reliant, contributing members of society.
                </p>
            </div>
        </div>

        {/* Impact Journey */}
        <div className="reveal-section max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Journey So Far</h2>
            <div className="bg-gray-50 dark:bg-zinc-900 p-10 rounded-3xl border border-gray-200 dark:border-zinc-800">
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    Since our inception in <strong>2018</strong>, starting with just 6 beneficiaries from <strong className="text-green-600">Umuanu and Umuche communities</strong> in Amaukwu Obollo, we have grown significantly.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left mt-8">
                     <div className="p-4 bg-white dark:bg-black/40 rounded-xl">
                        <div className="text-3xl font-bold text-green-600 mb-1">2+</div>
                        <div className="text-sm text-gray-500 font-semibold">University Graduates</div>
                     </div>
                     <div className="p-4 bg-white dark:bg-black/40 rounded-xl">
                        <div className="text-3xl font-bold text-green-600 mb-1">3+</div>
                        <div className="text-sm text-gray-500 font-semibold">Current Undergrads</div>
                     </div>
                     <div className="p-4 bg-white dark:bg-black/40 rounded-xl">
                        <div className="text-3xl font-bold text-green-600 mb-1">Many</div>
                        <div className="text-sm text-gray-500 font-semibold">Vocational Trainees</div>
                     </div>
                     <div className="p-4 bg-white dark:bg-black/40 rounded-xl">
                        <div className="text-3xl font-bold text-green-600 mb-1">2018</div>
                        <div className="text-sm text-gray-500 font-semibold">Establishment Year</div>
                     </div>
                </div>
            </div>
        </div>

        {/* Board of Coordinators */}
        <div className="reveal-section space-y-12">
            <div className="text-center max-w-2xl mx-auto">
                 <div className="inline-flex items-center gap-2 mb-4 text-green-600 bg-green-50 dark:bg-green-900/20 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
                    <Users size={16} /> OUR LEADERSHIP
                 </div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Meet Our Board</h2>
                <p className="text-gray-500 mt-4 text-lg">The dedicated individuals steering the vision of Nzeudo Education Foundation.</p>
            </div>

            <div className="team-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    { name: "Engr. Sir Nze M.B.C Osuagwu", role: "Founder and Financier" },
                    { name: "Mazi Carmellius Onwuzurike", role: "Board Secretary" },
                    { name: "Mazi Vincent Onwuzurike", role: "Director of Finance" },
                    { name: "Atty Nnamdi Alokalam", role: "Legal Advisor" },
                    { name: "Sir Ken Njoku", role: "Academic Advisor" },
                    { name: "Lolo Ogechukwu Osuagwu", role: "Member" },
                    { name: "Dr. Aloy Duru", role: "NEF Ambassador of Academic Excellence" }
                ].map((member, idx) => (
                    <div key={idx} className="team-card flex items-center p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-sm hover:border-green-200 dark:hover:border-green-900 transition-all duration-300 group">
                        <div className="w-14 h-14 bg-linear-to-br from-green-500 to-green-700 text-white rounded-full flex items-center justify-center font-bold text-xl mr-5 shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                            {member.name[0]}
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-green-600 transition-colors text-lg leading-tight mb-1">{member.name}</h4>
                            <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
}
