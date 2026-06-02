"use client";

import Image from "next/image";
import { Sun, Zap, Home, CreditCard } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface StepCardProps {
  icon: React.ReactNode;
  number: number;
  title: string;
  description: string;
}

const steps: Omit<StepCardProps, "number">[] = [
  {
    icon: <Sun className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Captação da luz solar",
    description: "Painéis instalados no telhado captam a radiação solar por meio de células fotovoltaicas.",
  },
  {
    icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Conversão da energia",
    description: "O inversor solar transforma a corrente contínua gerada nos painéis em corrente alternada.",
  },
  {
    icon: <Home className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Distribuição elétrica",
    description: "A corrente alternada é distribuída para toda a rede interna, alimentando seus aparelhos.",
  },
  {
    icon: <CreditCard className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Geração de créditos",
    description: "O excedente de energia é enviado à rede elétrica e vira créditos na sua conta de luz.",
  },
];

function StepCard({ icon, number, title, description }: StepCardProps) {
  return (
    <div className="group relative bg-background rounded-2xl p-5 sm:p-6 border border-border hover:border-secondary/50 hover:shadow-xl transition-all duration-300 card-hover">
      <div className="absolute -top-3 -left-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-secondary text-white text-xs sm:text-sm font-bold flex items-center justify-center">
        {number}
      </div>
      <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center text-secondary mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{description}</p>
    </div>
  );
}

export default function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="como-funciona" className="py-14 sm:py-20 lg:py-32 bg-muted">
      <div
        ref={ref}
        className={`container mx-auto px-6 md:px-12 lg:px-20 xl:px-28 scroll-animate ${isVisible ? "visible" : ""}`}
      >
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-secondary font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Processo Simplificado
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 sm:mb-6">
            Como funciona a <span className="gradient-text">energia solar</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Transforme a luz do sol em eletricidade para abastecer sua casa de forma prática e automatizada.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/isometric-house.jpg"
                alt="Ilustração de casa com painéis solares"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-24 h-24 sm:w-32 sm:h-32 bg-secondary/10 rounded-3xl -z-10" />
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 bg-accent/10 rounded-3xl -z-10" />
          </div>

          {/* Cards Grid */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 order-1 lg:order-2 stagger-children ${isVisible ? "visible" : ""}`}>
            {steps.map((step, index) => (
              <StepCard
                key={step.title}
                icon={step.icon}
                number={index + 1}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
