import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

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
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Reviewed by the community. Trusted by professionals.
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.review}"</p>
                <div className="mt-4">
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
