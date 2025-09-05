import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProvenTemplates() {
  return (
    <section className="py-20 px-4 md:px-8 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center items-center gap-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
            </div>
            <h2 className="text-3xl font-bold">Proven resume templates</h2>
        </div>
        <p className="mt-4 max-w-2xl mx-auto text-blue-100">
          Our professional resume templates are designed to get you noticed.
          Choose from a variety of styles that are ATS-friendly and easy to customize.
        </p>
        <Link href="/builder">
            <Button variant="outline" className="mt-8 bg-transparent text-white border-white hover:bg-white hover:text-blue-600">
                Browse Templates <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </Link>
        <div className="mt-12 relative h-96">
          <Image
            src="https://picsum.photos/400/550"
            alt="Resume template 1"
            width={400}
            height={550}
            className="rounded-lg shadow-2xl absolute left-1/2 -translate-x-[110%] top-0 transform-gpu rotate-[-6deg] transition-transform duration-300 hover:scale-105 hover:rotate-[-3deg]"
            data-ai-hint="resume template"
          />
          <Image
            src="https://picsum.photos/400/551"
            alt="Resume template 2"
            width={400}
            height={550}
            className="rounded-lg shadow-2xl absolute left-1/2 -translate-x-1/2 z-10 transition-transform duration-300 hover:scale-105"
            data-ai-hint="resume template"
          />
          <Image
            src="https://picsum.photos/400/552"
            alt="Resume template 3"
            width={400}
            height={550}
            className="rounded-lg shadow-2xl absolute left-1/2 translate-x-[10%] top-0 transform-gpu rotate-[6deg] transition-transform duration-300 hover:scale-105 hover:rotate-[3deg]"
            data-ai-hint="resume template"
          />
        </div>
      </div>
    </section>
  );
}
