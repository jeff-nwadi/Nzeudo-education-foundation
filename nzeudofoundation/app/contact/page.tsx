"use client";
import React from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-white dark:bg-zinc-950 pb-20">
      
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
            alt="Contact Hero"
            fill
            className="object-cover brightness-[0.4]"
            priority
        />
        <div className="relative z-10 text-center text-white px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-white/80 max-w-xl mx-auto">We'd love to hear from you. Reach out for partnerships, inquiries, or just to say hello.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-20 relative z-20">
        <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-zinc-800 flex flex-col lg:flex-row">
            
            {/* Contact Info Sidebar */}
            <div className="lg:w-2/5 p-12 bg-blue-600 text-white relative overflow-hidden">
                 {/* Decorative background circles */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                 <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full translate-y-1/3 -translate-x-1/3" />
                 
                 <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                    <p className="text-blue-100 mb-12 leading-relaxed">
                        Have questions about our programs? Our team is ready to help you with any information you need.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <MapPin className="text-blue-200 mt-1" />
                            <div>
                                <h4 className="font-semibold text-lg">Visit Us</h4>
                                <p className="text-blue-100 text-sm mt-1 leading-relaxed opacity-90">123 Education Lane, Amaukwu Obollo,<br/>Imo State, Nigeria.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Mail className="text-blue-200 mt-1" />
                            <div>
                                <h4 className="font-semibold text-lg">Email Us</h4>
                                <p className="text-blue-100 text-sm mt-1 opacity-90">contact@nzeudofoundation.org</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Phone className="text-blue-200 mt-1" />
                            <div>
                                <h4 className="font-semibold text-lg">Call Us</h4>
                                <p className="text-blue-100 text-sm mt-1 opacity-90">+234 123 456 7890</p>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>

            {/* Form Section */}
            <div className="lg:w-3/5 p-12">
                 <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="relative">
                            <input 
                                type="text" 
                                id="firstName" 
                                className="peer w-full border-b-2 border-gray-200 dark:border-zinc-700 bg-transparent py-2.5 placeholder-transparent focus:border-blue-600 focus:outline-none dark:text-white"
                                placeholder="First Name"
                            />
                            <label htmlFor="firstName" className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600">First Name</label>
                        </div>
                        <div className="relative">
                            <input 
                                type="text" 
                                id="lastName" 
                                className="peer w-full border-b-2 border-gray-200 dark:border-zinc-700 bg-transparent py-2.5 placeholder-transparent focus:border-blue-600 focus:outline-none dark:text-white"
                                placeholder="Last Name"
                            />
                            <label htmlFor="lastName" className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600">Last Name</label>
                        </div>
                    </div>

                    <div className="relative">
                        <input 
                            type="email" 
                            id="email" 
                            className="peer w-full border-b-2 border-gray-200 dark:border-zinc-700 bg-transparent py-2.5 placeholder-transparent focus:border-blue-600 focus:outline-none dark:text-white"
                            placeholder="Email Address"
                        />
                         <label htmlFor="email" className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600">Email Address</label>
                    </div>

                    <div className="relative">
                        <textarea 
                            id="message" 
                            rows={4}
                            className="peer w-full border-b-2 border-gray-200 dark:border-zinc-700 bg-transparent py-2.5 placeholder-transparent focus:border-blue-600 focus:outline-none dark:text-white resize-none"
                            placeholder="Message"
                        />
                        <label htmlFor="message" className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-600">Message</label>
                    </div>

                    <button type="button" className="w-full py-4 bg-gray-900 dark:bg-blue-600 text-white font-bold rounded-xl hover:opacity-90 transition-opacity shadow-lg">
                        Send Message
                    </button>
                </form>
            </div>

        </div>
      </div>
    </div>
  );
}
