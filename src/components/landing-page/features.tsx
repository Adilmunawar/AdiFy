import { GraduationCap, FileText, Bot, Trophy, Sparkles, Pencil } from "lucide-react";
import AnimatedSection from "../animated-section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "Create a resume in minutes",
    description: "Our intuitive builder helps you create a professional resume in just a few simple steps.",
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    title: "University-approved templates",
    description: "Choose from a selection of templates approved by top universities.",
  },
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: "AI-powered suggestions",
    description: "Get smart suggestions to make your resume stand out from the crowd.",
  },
  {
    icon: <Trophy className="h-8 w-8 text-primary" />,
    title: "Boost your chances of getting hired",
    description: "Our resumes are designed to get past ATS and impress recruiters.",
  },
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: "Make it your own",
    description: "Easily customize fonts, colors, and layouts to match your personal brand.",
  },
  {
    icon: <Pencil className="h-8 w-8 text-primary" />,
    title: "Pre-written phrases",
    description: "Get inspired with our library of pre-written phrases for various industries.",
  },
];

export default function Features() {
  return (
    <AnimatedSection>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Get hired faster with a powerful resume
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Our resume builder is packed with features to help you land your dream job, from AI-powered suggestions to university-approved templates.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0 mb-4">{feature.icon}</div>
              <CardHeader className="p-0">
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardDescription className="mt-2 text-gray-600">{feature.description}</CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
