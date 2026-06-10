"use client";

import { Sun, Cpu, LineChart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface StepProps {
  index: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: StepProps[] = [
  {
    index: "01",
    icon: <Sun className="w-7 h-7" strokeWidth={1.4} />,
    title: "Captação inteligente",
    description: "Painéis de alta eficiência convertem a luz do sol em energia limpa, dimensionados com precisão para o seu consumo.",
  },
  {
    index: "02",
    icon: <Cpu className="w-7 h-7" strokeWidth={1.4} />,
    title: "Conversão e gestão",
    description: "Inversores premium transformam e otimizam a energia, com monitoramento em tempo real direto no seu celular.",
  },
  {
    index: "03",
    icon: <LineChart className="w-7 h-7" strokeWidth={1.4} />,
    title: "Economia que se acumula",
    description: "O excedente vira créditos na rede e abate sua conta. Retorno do investimento, em média, entre 3 e 5 anos.",
  },
];

function Step({ index, icon, title, description }: StepProps) {
  return (
    <div className="relative">
      <div className="flex items-center gap-5 mb-7">
        <div className="w-16 h-16 rounded-2xl bg-background border border-border flex items-center justify-center text-brand-2 shadow-sm">
          {icon}
        </div>
        <span className="font-display font-semibold text-5xl text-border select-none">{index}</span>
      </div>
      <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-3 tracking-tight">{title}</h3>
      <p className="text-muted-foreground leading-relaxed max-w-sm">{description}</p>
    </div>
  );
}

export default function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="como-funciona" className="py-24 sm:py-28 lg:py-36 bg-muted">
      <div ref={ref} className={`px-5 sm:px-6 lg:px-8 scroll-animate ${isVisible ? "visible" : ""}`}>
        <div className="max-w-7xl mx-auto">
          {/* Asymmetric header */}
          <div className="grid lg:grid-cols-12 gap-8 items-end mb-16 lg:mb-20">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-brand-3" />
                <span className="text-xs sm:text-sm uppercase tracking-[0.22em] text-brand-2 font-medium">
                  Como funciona
                </span>
              </div>
              <h2 className="font-display font-semibold tracking-tight text-pretty text-3xl sm:text-4xl lg:text-5xl text-foreground max-w-2xl">
                Da luz do sol à economia, em três etapas.
              </h2>
            </div>
            <p className="lg:col-span-4 text-muted-foreground leading-relaxed">
              Um processo de engenharia transparente, do projeto à geração de energia — sem complicações técnicas para você.
            </p>
          </div>

          {/* Steps with connectors */}
          <div className={`relative grid md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 stagger-children ${isVisible ? "visible" : ""}`}>
            {/* Connector line */}
            <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-gradient-to-r from-brand-3/40 via-brand-3/30 to-brand-3/40" />
            {steps.map((step) => (
              <Step key={step.index} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
