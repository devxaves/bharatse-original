import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import WorkflowSection from "@/components/workflow-section"
import TestimonialsSection from "@/components/testimonials-section"
import PricingSection from "@/components/pricing-section"
import StatsSection from "@/components/stats-section"
import Footer from "@/components/footer"
import CursorEffect from "@/components/cursor-effect"
import BackgroundElements from "@/components/background-elements"

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <CursorEffect />
      <BackgroundElements />
      <Navbar />
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <div id="home">
        <HeroSection />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      {/* <div id="workflow">
        <WorkflowSection />
      </div> */}
      {/* <div id="testimonials">
        <TestimonialsSection />
      </div> */}
      {/* <div id="pricing">
        <PricingSection />
      </div> */}
      {/* <StatsSection /> */}
      <Footer />
    </main>
  )
}

