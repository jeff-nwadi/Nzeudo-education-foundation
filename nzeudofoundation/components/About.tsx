"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nzeudo from "@/images/Engr.-Nze-M.B.C-Osuagwu-e1742480905499.jpeg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".about-reveal",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="about" ref={containerRef} className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto md:px-6 px-3">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/2 relative">
                        <div className="about-reveal relative h-[600px] w-full rounded-2xl overflow-hidden">
                            <Image
                                src={Nzeudo}
                                alt="Engr. Sir Nze M.B.C Osuagwu"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 space-y-8">
                        <span className="about-reveal inline-block py-1 px-3 rounded-full bg-green-100 text-green-600 text-sm font-semibold tracking-wide uppercase">
                            About Us
                        </span>
                        <h2 className="about-reveal heading-text text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            An Enduring Human Capital Development Foundation
                        </h2>
                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p className="about-reveal">
                                Founded by <span className="font-semibold text-green-600">Engr. Sir Nze M.B.C Osuagwu</span>, the Nzeudo Education Foundation is a non-profit platform dedicated to supporting indigent but brilliant children who have lost their family breadwinners.
                            </p>
                            <p className="about-reveal">
                                We believe that education is a harbinger of human capital development. Since 2018, we have been empowering the voiceless and neglected in our communities, guiding them from primary school through to university and vocational skills acquisition.
                            </p>
                        </div>

                        <div className="about-reveal pt-4">
                            <Link href="/about" className="inline-flex items-center gap-2 text-green-600 font-bold hover:text-green-700 hover:gap-3 transition-all">
                                Read Our Full Story <ArrowRight size={20} />
                            </Link>
                        </div>

                        <div className="about-reveal pt-4 flex gap-8 border-t border-gray-200 mt-6">
                            <div>
                                <h4 className="text-3xl heading-text font-bold text-green-600">2018</h4>
                                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Established</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
