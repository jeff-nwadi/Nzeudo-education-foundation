"use client";
import React from "react";
import Image from "next/image";
import { CheckCircle2, CreditCard, Landmark, Phone, Heart } from "lucide-react";

export default function DonatePage() {
  return (
    <div className="bg-white dark:bg-zinc-950 pb-20">
        
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <Image
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop"
            alt="Donate Hero"
            fill
            className="object-cover brightness-[0.4]"
            priority
        />
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
            <Heart className="mx-auto w-16 h-16 text-red-500 mb-6 drop-shadow-sm fill-red-500 animate-pulse" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 heading-text tracking-tight">Make a Difference</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light">
                Your generosity fuels our mission. Every donation goes directly to supporting student education and welfare.
            </p>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-24 relative z-20">
        <div className="max-w-5xl mx-auto">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                
                {/* Bank Transfer Card */}
                <div className="bg-white dark:bg-zinc-900 rounded-3xl p-10 shadow-sm border border-blue-100 dark:border-blue-900/30 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors" />
                     
                     <div className="flex items-center gap-4 mb-8">
                         <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-2xl text-blue-600">
                             <Landmark size={32} />
                         </div>
                         <h2 className="text-2xl font-bold text-gray-900 dark:text-white heading-text">Bank Transfer</h2>
                     </div>
                     
                     <div className="bg-gray-50 dark:bg-black/50 p-6 rounded-2xl border border-gray-100 dark:border-zinc-800 space-y-4">
                        <div className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-zinc-800">
                            <span className="text-sm text-gray-500 font-medium">Bank Name</span>
                            <span className="text-gray-900 dark:text-white font-bold">First Bank</span>
                        </div>
                        <div className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-zinc-800">
                            <span className="text-sm text-gray-500 font-medium">Account Name</span>
                            <span className="text-gray-900 dark:text-white font-bold text-right">Nzeudo Education Foundation</span>
                        </div>
                        <div className="flex justify-between items-center pt-2">
                             <span className="text-sm text-gray-500 font-medium">Account Number</span>
                            <span className="text-2xl font-mono font-bold text-blue-600 tracking-wider">2034567890</span>
                        </div>
                     </div>
                     <p className="text-sm text-gray-500 mt-6 text-center">Please use your name as the reference.</p>
                </div>

                {/* In-Kind Card */}
                <div className="bg-white dark:bg-zinc-900 rounded-3xl p-10 shadow-sm border border-purple-100 dark:border-purple-900/30 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors" />

                     <div className="flex items-center gap-4 mb-8">
                         <div className="p-4 bg-purple-100 dark:bg-purple-900/30 rounded-2xl text-purple-600">
                             <Phone size={32} />
                         </div>
                         <h2 className="text-2xl font-bold text-gray-900 dark:text-white heading-text">In-Kind Donations</h2>
                     </div>

                     <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                        We gratefully accept donations of physical items that can aid learning and student well-being.
                     </p>

                     <ul className="space-y-3 mb-8">
                         {["Computers & Tablets", "Textbooks & Stationery", "School Uniforms", "Non-perishable Food items"].map((item, i) => (
                             <li key={i} className="flex items-center gap-3">
                                 <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                                 <span className="text-gray-700 dark:text-gray-200 font-medium">{item}</span>
                             </li>
                         ))}
                     </ul>

                     <a href="tel:+2341234567890" className="block w-full py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-bold text-center rounded-xl hover:opacity-90 transition-opacity">
                         Call to Arrange Pickup
                     </a>
                </div>

            </div>

             {/* Impact Breakdown */}
             <div className="bg-white dark:bg-zinc-900 rounded-3xl p-10 shadow-sm border border-gray-100 dark:border-zinc-800 text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 heading-text">Where Your Money Goes</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                        { title: "85%", desc: "Student Programs", color: "text-blue-600" },
                        { title: "10%", desc: "Infrastructure", color: "text-green-600" },
                        { title: "5%", desc: "Administration", color: "text-gray-500" },
                        { title: "100%", desc: "Transparency", color: "text-purple-600" }
                    ].map((item, idx) => (
                        <div key={idx} className="p-4">
                            <div className={`text-4xl font-bold ${item.color} mb-2`}>{item.title}</div>
                            <p className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}
