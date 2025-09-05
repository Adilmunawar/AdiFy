import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import AnimatedSection from "../animated-section";

const adviceItems = [
  {
    title: "The science of a great resume",
    description: "Discover what makes a resume truly stand out to recruiters and hiring managers.",
    image: "https://picsum.photos/seed/advice1/400/250",
    category: "GUIDE",
    dataAiHint: "resume analysis"
  },
  {
    title: "A comprehensive guide to job hunt",
    description: "Learn the strategies and tactics to navigate the modern job market successfully.",
    image: "https://picsum.photos/seed/advice2/400/251",
    category: "GUIDE",
    dataAiHint: "job search"
  },
];

export default function ExpertAdvice() {
  return (
    <AnimatedSection>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          The Elevator
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Boost your career with tips from our experts. Learn how to write a resume, pass an interview, and get your dream job.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {adviceItems.map((item, index) => (
            <Card key={index} className="overflow-hidden group">
              <CardContent className="p-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={item.dataAiHint}
                />
                <div className="p-6 bg-purple-50">
                  <span className="text-sm font-semibold text-purple-600">{item.category}</span>
                  <h3 className="text-xl font-bold text-gray-800 mt-2">{item.title}</h3>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
