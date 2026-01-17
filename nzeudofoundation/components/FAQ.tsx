"use client";
import React, { useState } from "react";
import { Plus, Minus, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "Who is eligible for the Nzeudo Scholarship?",
        answer: "Our scholarship is open to students from underrepresented communities who demonstrate academic excellence (minimum 3.5 GPA) and financial need. Applicants must be admitted to or enrolled in an accredited public institution."
    },
    {
        question: "When does the application window open?",
        answer: "Applications for the upcoming academic session open on August 1st and close on October 31st. We recommend preparing your documents early."
    },
    {
        question: "What documents are required for the application?",
        answer: "You will need: 1) Valid Student ID, 2) Admission Letter, 3) Academic Transcripts, 4) A letter of recommendation from a Head of Dept or Principal, and 5) A 500-word personal statement."
    },
    {
        question: "Does the foundation support postgraduate studies?",
        answer: "Currently, our primary focus is on primary, secondary, and undergraduate education. However, exceptional postgraduate cases may be considered under our 'Special Grants' program."
    },
    {
        question: "How can I volunteer with the foundation?",
        answer: "We welcome volunteers! Click the 'Contact' link in the menu or email us at volunteer@nzeudofoundation.org with your CV and area of interest."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-white dark:bg-zinc-950">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-semibold mb-3">
                        <GraduationCap size={16} /> Scholarship & Support
                    </span>
                    <h2 className="text-3xl md:text-5xl heading-text font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-500">Everything you need to know about applying for aid and supporting our mission.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div 
                            key={idx} 
                            className={cn(
                                "border rounded-2xl transition-all duration-300 overflow-hidden",
                                openIndex === idx 
                                    ? "border-green-500 bg-green-50/50 dark:bg-green-900/10 shadow-sm" 
                                    : "border-gray-200 dark:border-zinc-800 hover:border-gray-300"
                            )}
                        >
                            <button 
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className={cn("text-lg font-semibold heading-text", openIndex === idx ? "text-blue-600" : "text-gray-900 dark:text-white")}>
                                    {faq.question}
                                </span>
                                {openIndex === idx ? (
                                    <Minus className="text-blue-500 shrink-0" size={20} />
                                ) : (
                                    <Plus className="text-gray-400 shrink-0" size={20} />
                                )}
                            </button>
                            <div 
                                className={cn(
                                    "grid transition-all duration-300 ease-in-out",
                                    openIndex === idx ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                )}
                            >
                                <div className="overflow-hidden">
                                    <div className="p-6 pt-0 text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center p-8 bg-gray-50 dark:bg-zinc-900 rounded-2xl border border-dashed border-gray-300 dark:border-zinc-700">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">Still have questions about your application?</p>
                    <a href="mailto:support@nzeudofoundation.org" className="text-green-600 font-semibold hover:underline">
                        Contact our Support Team &rarr;
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
