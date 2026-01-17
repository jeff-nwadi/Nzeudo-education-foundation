"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Linkedin, Twitter } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
    {
        name: "Engr. Sir Nze M.B.C Osuagwu",
        role: "Founder & Financier",
        image: "https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=1887&auto=format&fit=crop",
        bio: "A chartered chemical engineer and lover of humanity, dedicated to giving back through enduring human capital development."
    },
    {
        name: "Mazi Carmellius Onwuzurike",
        role: "Board Secretary",
        image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=1935&auto=format&fit=crop",
        bio: "Ensuring effective governance and smooth administrative operations for the foundation."
    },
    {
        name: "Mazi Vincent Onwuzurike",
        role: "Director of Finance",
        image: "https://images.unsplash.com/photo-1516726817505-f5ed8259bcc9?q=80&w=1887&auto=format&fit=crop",
        bio: "Managing the foundation's financial resources to maximize impact and reach."
    }
];

const Team = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".team-card",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="team" ref={containerRef} className="py-24 bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Our Leadership</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4 heading-text text-gray-900">Meet the Coordinators</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">Driven by passion, guided by experience. Our team is dedicated to making education accessible to all.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {teamMembers.map((member, idx) => (
                        <div key={idx} className="team-card group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-sm transition-all duration-300 border border-gray-100">
                            <div className="relative h-80 w-full overflow-hidden">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                                    <a href="#" className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-blue-600 transition-colors">
                                        <Linkedin size={20} />
                                    </a>
                                </div>
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold heading-text text-gray-900 mb-1">{member.name}</h3>
                                <p className="text-blue-600 text-sm font-medium mb-3">{member.role}</p>
                                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
