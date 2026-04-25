import Header from "@/components/header";
import Hero from "@/components/hero";
import SolarKit from "@/components/solar-kit";
import CTABanner from "@/components/cta-banner";
import HowItWorks from "@/components/how-it-works";
import Timeline from "@/components/timeline";
import EquipmentKit from "@/components/equipment-kit";
import InverterHighlight from "@/components/inverter-highlight";
import WhyAllure from "@/components/why-allure";
import Benefits from "@/components/benefits";
import Pricing from "@/components/pricing";
import FinalCTA from "@/components/final-cta";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

export default function HomePage() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Seção Kit Solar */}
        <SolarKit />

        {/* Banner CTA */}
        <CTABanner
          title="Conta alta? Deixe o sol pagar a sua conta de luz!"
          subtitle="Descubra quanto você pode economizar com energia solar"
          buttonText="Calcule sua economia"
        />

        {/* Como funciona */}
        <HowItWorks />

        {/* Banner CTA */}
        <CTABanner
          title="Fale com nossa equipe e comece a economizar hoje!"
          buttonText="Falar com especialista"
          variant="gradient"
        />

        {/* Timeline de etapas */}
        <Timeline />

        {/* Grid de equipamentos */}
        <EquipmentKit />

        {/* Destaque do Inversor */}
        <InverterHighlight />

        {/* Por que escolher a Allure */}
        <WhyAllure />

        {/* Benefícios */}
        <Benefits />

        {/* Preços */}
        <Pricing />

        {/* CTA Final */}
        <FinalCTA />

        {/* FAQ */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Botão flutuante do WhatsApp */}
      <WhatsAppButton />
    </>
  );
}
