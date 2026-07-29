import Header from "@/components/header";
import Hero from "@/components/hero";
import PartnersHero from "@/components/partners-hero";
import HowItWorks from "@/components/how-it-works";
import Solutions from "@/components/solutions";
import Benefits from "@/components/benefits";
import SavingsCalculator from "@/components/savings-calculator";
import Testimonials from "@/components/testimonials";
import WhyAllure from "@/components/why-allure";
import FinalCTA from "@/components/final-cta";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <PartnersHero />
        <Solutions />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <WhyAllure />
        <SavingsCalculator />
        <FinalCTA />
        <FAQ />
      </main>

      <Footer />
    </>
  );
}
