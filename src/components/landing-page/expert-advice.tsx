import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const adviceItems = [
  {
    title: "The science of a great resume",
    description: "Discover what makes a resume truly stand out to recruiters and hiring managers.",
    image: "https://picsum.photos/400/250",
    category: "GUIDE",
    dataAiHint: "abstract document"
  },
  {
    title: "A comprehensive guide to job hunt",
    description: "Learn the strategies and tactics to navigate the modern job market successfully.",
    image: "https://picsum.photos/400/251",
    category: "GUIDE",
    dataAiHint: "briefcase document"
  },
];

const videoItems = [
    {
        title: "How your info is shown matters",
        image: "https://picsum.photos/400/225",
        dataAiHint: "woman presenting"
    },
    {
        title: "Perfecting your resume summary",
        image: "https://picsum.photos/400/226",
        dataAiHint: "woman thinking"
    },
    {
        title: "What to include in your CV",
        image: "https://picsum.photos/400/227",
        dataAiHint: "woman writing"
    }
]

export default function ExpertAdvice() {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          The Elevator
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Boost your career with tips from our experts. Learn how to write a resume, pass an interview, and get your dream job.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
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

        <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800">Expert videos</h3>
            <Button variant="outline">
                Show all <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
            {videoItems.map((item, index) => (
                <Card key={index} className="overflow-hidden group">
                    <CardContent className="p-0">
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={400}
                            height={225}
                            className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                            data-ai-hint={item.dataAiHint}
                        />
                        <div className="p-4">
                            <h4 className="font-bold text-gray-800">{item.title}</h4>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
