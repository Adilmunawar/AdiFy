import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import AnimatedSection from "../animated-section"
  
  const faqItems = [
    {
      question: "What is an AI resume builder?",
      answer: "An AI resume builder is a tool that uses artificial intelligence to help you create a professional and effective resume. It can provide suggestions, check for errors, and tailor your resume to specific job descriptions."
    },
    {
      question: "Is Adify Resume Builder free?",
      answer: "Yes, our resume builder offers a free plan with essential features to create a great resume. We also have premium plans with advanced features like AI-powered content refinement and more templates."
    },
    {
        question: "How does AI help improve my resume?",
        answer: "Our AI analyzes your resume content and provides suggestions to improve clarity, impact, and ATS-friendliness. It can help you use stronger action verbs, quantify your achievements, and tailor your resume for specific roles."
    },
    {
        question: "Can I download my resume in PDF format?",
        answer: "Absolutely! You can download your resume as a high-quality PDF file, ready to be sent to employers."
    },
    {
        question: "How many resume templates are available?",
        answer: "We offer a wide variety of professionally designed templates. Our library is constantly updated to keep up with the latest trends in resume design."
    }
  ]
  
  export default function Faq() {
    return (
      <AnimatedSection className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold text-left">{item.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </AnimatedSection>
    );
  }
  
