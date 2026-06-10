"use client";

import { Sun, Cpu, LineChart, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const WA_URL = "https://wa.me/5517991604404?text=Ol%C3%A1!%20Quero%20garantir%20a%20minha%20economia%20com%20energia%20solar.";

interface StepProps {
  index: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: StepProps[] = [
  {
    index: "01",
    icon: <Sun className="w-7 h-7" strokeWidth={1.6} />,
    title: "Captação inteligente",
    description: "Painéis de alta eficiência convertem a luz do sol em energia limpa, dimensionados com precisão para o seu consumo.",
  },
  {
    index: "02",
    icon: <Cpu className="w-7 h-7" strokeWidth={1.6} />,
    title: "Conversão e gestão",
    description: "Inversores premium transformam e otimizam a energia, com monitoramento em tempo real direto no seu celular.",
  },
  {
    index: "03",
    icon: <LineChart className="w-7 h-7" strokeWidth={1.6} />,
    title: "Economia que se acumula",
    description: "O excedente vira créditos na rede e abate sua conta. Retorno do investimento, em média, entre 3 e 5 anos.",
  },
];

function Step({ index, icon, title, description }: StepProps) {
  return (
    <div className="group relative rounded-2xl bg-brand-foreground/[0.06] border border-brand-foreground/10 p-7 lg:p-8 transition-colors hover:bg-brand-foreground/[0.1]">
      {/* Big ghost number */}
      <span className="absolute top-6 right-7 font-display font-semibold text-5xl text-brand-foreground/10 select-none transition-colors group-hover:text-accent/30">
        {index}
      </span>
      {/* Icon badge in yellow */}
      <div className="w-14 h-14 rounded-xl bg-accent text-accent-foreground flex items-center justify-center mb-7 shadow-lg shadow-accent/20">
        {icon}
      </div>
      <h3 className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-brand-foreground mb-3">{title}</h3>
      <p className="text-brand-foreground/70 leading-relaxed">{description}</p>
    </div>
  );
}

export default function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="como-funciona" className="relative py-24 sm:py-28 lg:py-36 bg-brand text-brand-foreground overflow-hidden">
      {/* Decorative blueprint glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-brand-3/15 blur-3xl" aria-hidden="true" />

      <div ref={ref} className={`relative px-5 sm:px-6 lg:px-8 scroll-animate ${isVisible ? "visible" : ""}`}>
        <div className="max-w-7xl mx-auto">
          {/* Asymmetric header */}
          <div className="grid lg:grid-cols-12 gap-8 items-end mb-16 lg:mb-20">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-accent" />
                <span className="text-xs sm:text-sm uppercase tracking-[0.22em] text-brand-3 font-semibold">
                  Como funciona
                </span>
              </div>
              <h2 className="font-display font-semibold tracking-tight text-pretty text-3xl sm:text-4xl lg:text-5xl text-brand-foreground max-w-2xl">
                Da luz do sol à economia, em três etapas.
              </h2>
            </div>
            <p className="lg:col-span-4 text-brand-foreground/70 leading-relaxed">
              Um processo de engenharia transparente, do projeto à geração de energia — sem complicações técnicas para você.
            </p>
          </div>

          {/* Steps */}
          <div className={`grid md:grid-cols-3 gap-5 lg:gap-6 stagger-children ${isVisible ? "visible" : ""}`}>
            {steps.map((step) => (
              <Step key={step.index} {...step} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 flex justify-center">
            <Button
              size="lg"
              asChild
              className="group bg-accent text-accent-foreground hover:brightness-105 font-semibold text-base px-9 h-14 rounded-full gap-2.5 border-0 shadow-lg shadow-accent/25"
            >
              <a href={WA_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-5 h-5" />
                Garanta sua economia
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
