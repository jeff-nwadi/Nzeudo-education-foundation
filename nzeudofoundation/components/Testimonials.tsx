"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        quote: "The scholarship from Nzeudo Foundation changed my life. I was about to drop out, but now I'm studying Engineering at the university.",
        author: "Emmanuel Okafor",
        role: "Scholarship Recipient"
    },
    {
        quote: "Their support in renovating our school library has reignited the reading culture among our students. It's a blessing to our community.",
        author: "Mrs. Grace Adebayo",
        role: "School Principal"
    },
    {
        quote: "I volunteer with them because I see the transparency and the direct impact of every donation. They are truly committed.",
        author: "Chinedu Ibe",
        role: "Volunteer"
    }
];

const Testimonials = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".testimonial-card",
                { x: 50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out",
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
    <section id="impact" ref={containerRef} className="py-24 bg-zinc-900 text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-green-600/10 -skew-x-12 transform translate-x-20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
            <h2 className="text-3xl md:text-4xl heading-text font-bold mb-4">Voices of Change</h2>
            <div className="h-1 w-20 bg-green-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => (
                <div key={idx} className="testimonial-card bg-zinc-800/50 backdrop-blur-sm p-8 rounded-2xl border border-zinc-700 hover:border-green-500/50 transition-colors">
                    <Quote className="text-green-500 mb-6 w-10 h-10 opacity-50" />
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed italic">"{item.quote}"</p>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center text-xl font-bold text-gray-400">
                            {item.author[0]}
                        </div>
                        <div>
                            <h4 className="font-bold heading-text text-white">{item.author}</h4>
                            <p className="text-sm text-green-400">{item.role}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
