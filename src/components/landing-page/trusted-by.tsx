import React from 'react';

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
    <section className="py-12">
        <div className="container">
            <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Our resumes are trusted by employees at:
            </p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
                {logos.map((logo, index) => (
                    <div key={index} className="flex justify-center">
                        <span className="text-2xl font-semibold text-gray-400 hover:text-gray-600 transition-colors">{logo.name}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
