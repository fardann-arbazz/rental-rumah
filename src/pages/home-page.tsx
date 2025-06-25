import { useEffect } from "react";
import Benefits from "../components/benefits";
import CallToAction from "../components/call-to-action";
import FeaturedProperties from "../components/featured-property";
import Hero from "../components/hero";
import HowItWorks from "../components/how-it-works";
import Testimonials from "../components/testimonials";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <FeaturedProperties />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <CallToAction />
      </main>
    </div>
  );
}
