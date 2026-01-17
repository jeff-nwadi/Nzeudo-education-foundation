"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";

const Donate = () => {
  return (
    <section id="donate" className="py-24 relative overflow-hidden bg-green-600 flex items-center justify-center text-center">
       {/* Abstract Background pattern */}
       <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white via-transparent to-transparent scale-150"></div>
       
       <div className="container mx-auto px-6 relative z-10 text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-8 border border-white/20">
                <Heart className="fill-red-500 text-red-500 w-4 h-4" />
                <span className="text-sm font-medium">Join 2,000+ Donors</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl heading-text font-bold mb-6 tracking-tight">
                Be the Reason Someone <br /> Smiles Today
            </h2>
            <p className="text-xl md:text-2xl text-green-100 max-w-2xl mx-auto mb-10 font-light">
                Your contribution can provide textbooks, uniforms, and scholarships to children who dream of a better future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                    href="#" 
                    className="px-8 py-5 bg-white text-green-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-sm flex items-center justify-center gap-2"
                >
                    Donate Now <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                    href="#contact" 
                    className="px-8 py-5 bg-green-700/50 text-white border border-green-400/30 rounded-full font-bold text-lg hover:bg-green-700 transition-all backdrop-blur-sm"
                >
                    Become a Partner
                </Link>
            </div>
       </div>
    </section>
  );
};

export default Donate;
