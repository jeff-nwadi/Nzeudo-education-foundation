"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Users, BookOpen, School, Trophy, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ImpactPage() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Stat counter animation
            gsap.utils.toArray(".stat-card").forEach((box: any) => {
                const valueEl = box.querySelector(".stat-value");
                const finalValueText = valueEl.getAttribute("data-value");
                // Extract number and suffix (like "500" and "+")
                const match = finalValueText.match(/(\d+)(.*)/);
                if (match) {
                    const endVal = parseInt(match[1]);
                    const suffix = match[2];

                    gsap.fromTo(valueEl,
                        { innerText: 0 },
                        {
                            innerText: endVal,
                            duration: 2,
                            ease: "power2.out",
                            snap: { innerText: 1 },
                            scrollTrigger: {
                                trigger: box,
                                start: "top 85%",
                            },
                            onUpdate: function () {
                                valueEl.innerText = Math.ceil(this.targets()[0].innerText) + suffix;
                            }
                        }
                    );
                }
            });

            // Story Image Parallax
            gsap.to(".story-img", {
                yPercent: 10,
                ease: "none",
                scrollTrigger: {
                    trigger: ".story-section",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="bg-white pb-20">

            {/* Hero */}
            <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1974&auto=format&fit=crop"
                    alt="Impact Hero"
                    fill
                    className="object-cover brightness-[0.35]"
                    priority
                />
                <div className="relative z-10 container mx-auto px-6 text-center text-white">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 heading-text tracking-tight">Our Impact</h1>
                    <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light">
                        Measuring success by the lives we touch, the students we empower, and the futures we build together.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 -mt-24 relative z-20">

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
                    {[
                        { label: "Students Supported", value: "500+", icon: Users, color: "text-green-500", bg: "bg-green-500/10" },
                        { label: "Scholarships Awarded", value: "120+", icon: Trophy, color: "text-yellow-500", bg: "bg-yellow-500/10" },
                        { label: "Books Distributed", value: "5000+", icon: BookOpen, color: "text-green-500", bg: "bg-green-500/10" },
                        { label: "Schools Partnered", value: "50+", icon: School, color: "text-purple-500", bg: "bg-purple-500/10" },
                    ].map((stat, idx) => (
                        <div key={idx} className="stat-card bg-white md:p-8 p-2 rounded-3xl text-center shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
                            <div className={`mx-auto ${stat.color} ${stat.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                                <stat.icon size={32} />
                            </div>
                            <h3 data-value={stat.value} className="stat-value md:text-5xl text-2xl font-bold text-gray-900 mb-2 font-mono tracking-tighter">0</h3>
                            <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Story Section */}
                <div className="story-section flex flex-col lg:flex-row items-center gap-16 mb-24">
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-sm">
                            <Image
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2034&auto=format&fit=crop"
                                alt="Impact Story"
                                fill
                                className="story-img object-cover scale-110" // Initial scale for parallax
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-8">
                                <div className="flex gap-2 text-white/90 text-sm font-medium items-center">
                                    <span className="bg-green-600 px-2 py-1 rounded-sm text-white text-xs uppercase tracking-wider">Success Story</span>
                                    <span>Class of 2021</span>
                                </div>
                            </div>
                        </div>
                        {/* Floating quote card */}
                        <div className="hidden lg:block absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 max-w-xs">
                            <p className="text-gray-600 italic text-sm mb-4">"NEF didn't just pay my fees; they gave me the confidence to dream bigger than my circumstances."</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative">
                                    <Image
                                        src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1887&auto=format&fit=crop"
                                        alt="Chike"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 text-sm">Chike A.</p>
                                    <p className="text-xs text-gray-500">Software Engineer</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <span className="text-green-600 font-bold tracking-wide uppercase text-sm mb-4 block">Real Lives, Real Change</span>
                        <h2 className="text-4xl lg:text-5xl font-bold heading-text text-gray-900 mb-6 leading-tight">From Classroom <br />to Career</h2>
                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                One of our earliest beneficiaries, Chike, was on the verge of dropping out due to lack of funds. His father had passed away, and his mother struggled to make ends meet.
                            </p>
                            <p>
                                Through NEF's intervention, he completed his secondary education and went on to study Computer Science on a full scholarship.
                            </p>
                            <p>
                                Today, Chike is a software developer giving back to his community by teaching code to younger students on weekends. This cycle of empowerment is exactly what we strive for.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
