import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="container grid lg:grid-cols-2 gap-10 items-center py-20">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          This resume builder gets you{" "}
          <span className="text-primary">an interview</span>
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
    </section>
  );
}

function CheckIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M20 6 9 17l-5-5"/></svg>
    )
}
