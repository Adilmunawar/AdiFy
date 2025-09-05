import AnimatedSection from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToAction() {
  return (
    <AnimatedSection className="py-20 text-center bg-gray-50">
      <h2 className="text-4xl font-bold text-gray-800">
        Join over <span className="text-primary">53,584,000</span> users worldwide
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        and start your journey towards a dream job today.
      </p>
      <Link href="/builder">
        <Button size="lg" className="mt-8 text-lg px-8 py-6">
          Create My Resume
        </Button>
      </Link>
    </AnimatedSection>
  );
}
