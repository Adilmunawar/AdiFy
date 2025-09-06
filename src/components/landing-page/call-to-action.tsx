import AnimatedSection from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToAction() {
  return (
    <AnimatedSection className="py-20 text-center bg-gray-50">
      <h2 className="text-4xl font-bold text-gray-800">
        Ready to take the next step?
      </h2>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
        Join over 53 million users worldwide and start building your future today. Our AI-powered resume builder is here to help you land your dream job.
      </p>
      <Link href="/builder">
        <Button size="lg" className="mt-8 text-lg px-8 py-6">
          Create My Resume for Free
        </Button>
      </Link>
    </AnimatedSection>
  );
}
