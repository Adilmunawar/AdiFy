
'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "../animated-section";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phrases = [
  "gets you an interview",
  "builds a professional resume",
  "is ATS-friendly",
  "lands your dream job",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      const fullText = phrases[index];
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        // Pause at end
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }
    };

    const typingSpeed = isDeleting ? 75 : 150;
    const timeout = setTimeout(type, typingSpeed);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, index]);

  return (
    <AnimatedSection className="container grid lg:grid-cols-2 gap-10 items-center py-20">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight h-28 md:h-36">
          This resume builder{" "}
          <span className="text-primary">
            {currentText}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
              className="inline-block"
            >
              |
            </motion.span>
          </span>
        </h1>
        <p className="text-lg text-gray-600">
            Instantly create a job-winning resume with our AI-powered builder that's loved by thousands.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/builder">
                <Button size="lg" className="w-full sm:w-auto">Create My Resume</Button>
            </Link>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">Watch a demo</Button>
        </div>
        <ul className="flex items-center gap-4 text-sm text-gray-500">
            <li className="flex items-center gap-2"><CheckIcon /> Free to use</li>
            <li className="flex items-center gap-2"><CheckIcon /> No registration required</li>
            <li className="flex items-center gap-2"><CheckIcon /> ATS-friendly</li>
        </ul>
      </div>
      <div>
        <Image
          src="https://picsum.photos/seed/resume-hero/600/400"
          alt="Resume builder interface"
          width={600}
          height={400}
          className="rounded-lg shadow-xl"
          data-ai-hint="resume builder interface"
        />
      </div>
    </AnimatedSection>
  );
}

function CheckIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M20 6 9 17l-5-5"/></svg>
    )
}
