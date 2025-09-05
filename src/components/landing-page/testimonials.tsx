'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import AnimatedSection from "../animated-section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import React from "react";

const testimonials = [
    {
      rating: 5,
      name: "Sarah L.",
      title: "Marketing Manager",
      review: "The AI suggestions were a game-changer! I landed my dream job in just two weeks. I couldn't have done it without this builder."
    },
    {
      rating: 5,
      name: "David C.",
      title: "Software Engineer",
      review: "As a developer, I appreciate clean design and efficiency. This tool delivered both. The templates are modern and professional."
    },
    {
      rating: 5,
      name: "Jessica P.",
      title: "Graphic Designer",
      review: "I was able to create a visually stunning resume that perfectly reflects my creative skills. Highly recommended for designers!"
    },
    {
      rating: 5,
      name: "Michael B.",
      title: "Project Manager",
      review: "The best resume builder I've used. The interface is intuitive and the final product is incredibly polished. The AI features saved me hours."
    },
    {
      rating: 5,
      name: "Emily R.",
      title: "Recent Graduate",
      review: "Perfect for a recent grad like me. The templates gave me a huge head start and the content suggestions helped me sound more professional."
    },
    {
      rating: 5,
      name: "Daniel K.",
      title: "UX Researcher",
      review: "I've tried many resume builders, and this is by far the most user-friendly and effective. The ability to tailor my resume for each job is fantastic."
    }
  ];

export default function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )

  return (
    <AnimatedSection className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Reviewed by the community. Trusted by professionals.
        </h2>
        <Carousel
          plugins={[plugin.current]}
          className="w-full mt-12"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <div className="p-1 h-full">
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-700 italic">"{testimonial.review}"</p>
                      </div>
                      <div className="mt-4">
                        <p className="font-bold text-gray-800">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.title}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </AnimatedSection>
  );
}
