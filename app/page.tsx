import Header from "@/components/header";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";
import Benefits from "@/components/benefits";
import HowItWorks from "@/components/how-it-works";
import WhyAllure from "@/components/why-allure";
import FinalCTA from "@/components/final-cta";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Testimonials />
        <Benefits />
        <HowItWorks />
        <WhyAllure />
        <FinalCTA />
        <FAQ />
      </main>

      <Footer />
      <WhatsAppButton phoneNumber="5517991604404" message="Olá! Vim pelo site e gostaria de saber mais sobre energia solar." />
    </>
  );
}
