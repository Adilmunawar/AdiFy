import React from 'react';
import AnimatedSection from '../animated-section';

const logos = [
    { name: "Google" },
    { name: "Apple" },
    { name: "Microsoft" },
    { name: "Amazon" },
    { name: "Netflix" },
    { name: "Facebook" },
]

export default function TrustedBy() {
  return (
    <AnimatedSection className="py-12 bg-white">
        <div className="container">
            <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
                Our resume templates are trusted by employees at top companies
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
                {logos.map((logo, index) => (
                    <div key={index} className="flex justify-center">
                        <span className="text-2xl font-semibold text-gray-400 hover:text-gray-600 transition-colors">{logo.name}</span>
                    </div>
                ))}
            </div>
        </div>
    </AnimatedSection>
  );
}
