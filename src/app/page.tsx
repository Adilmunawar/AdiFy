import AnimatedSection from "@/components/animated-section";
import CallToAction from "@/components/landing-page/call-to-action";
import ExpertAdvice from "@/components/landing-page/expert-advice";
import Faq from "@/components/landing-page/faq";
import Features from "@/components/landing-page/features";
import Footer from "@/components/landing-page/footer";
import Header from "@/components/landing-page/header";
import Hero from "@/components/landing-page/hero";
import ProvenTemplates from "@/components/landing-page/proven-templates";
import Testimonials from "@/components/landing-page/testimonials";
import TrueFocus from "@/components/true-focus";
import TrustedBy from "@/components/landing-page/trusted-by";
import '@/components/true-focus.css';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <TrueFocus 
          sentence="Adify Resume Builder"
          manualMode={false}
          blurAmount={5}
          animationDuration={0.5}
          pauseBetweenAnimations={1}
        />
        <Hero />
        <TrustedBy />
        <Testimonials />
        <Features />
        <ProvenTemplates />
        <CallToAction />
        <ExpertAdvice />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
