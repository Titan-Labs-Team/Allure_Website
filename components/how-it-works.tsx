"use client";

import Image from "next/image";
import { Sun, Zap, Home, CreditCard, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface StepProps {
  icon: React.ReactNode;
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

const steps: Omit<StepProps, "number" | "isLast">[] = [
  {
    icon: <Sun className="w-6 h-6" />,
    title: "Captação solar",
    description: "Os painéis fotovoltaicos captam a luz do sol e convertem em energia elétrica.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Conversão",
    description: "O inversor transforma a corrente contínua em corrente alternada para uso doméstico.",
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "Distribuição",
    description: "A energia é distribuída para todos os aparelhos e pontos de consumo da sua casa.",
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Créditos",
    description: "O excedente vai para a rede e vira créditos que abatemos na sua conta de luz.",
  },
];

function Step({ icon, number, title, description, isLast }: StepProps) {
  return (
    <div className="relative flex flex-col items-center text-center group">
      {/* Connector line - desktop only */}
      {!isLast && (
        <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-[2px]">
          <div className="w-full h-full bg-gradient-to-r from-secondary/30 via-secondary/20 to-secondary/30" />
          <ArrowRight className="absolute -right-1 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/40" />
        </div>
      )}

      {/* Step circle */}
      <div className="relative mb-5">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary to-blue-600 flex items-center justify-center text-white shadow-lg shadow-secondary/25 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-foreground text-sm font-bold flex items-center justify-center shadow-lg">
          {number}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px]">{description}</p>
    </div>
  );
}

function MobileStep({ icon, number, title, description }: StepProps) {
  return (
    <div className="flex gap-4">
      {/* Left: Number and line */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-blue-600 flex items-center justify-center text-white shadow-lg shadow-secondary/25 flex-shrink-0">
          <span className="text-lg font-bold">{number}</span>
        </div>
        <div className="w-0.5 flex-1 bg-gradient-to-b from-secondary/30 to-transparent mt-3" />
      </div>

      {/* Right: Content */}
      <div className="pb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
            {icon}
          </div>
          <h3 className="text-base font-semibold text-foreground">{title}</h3>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="como-funciona" className="py-16 sm:py-20 lg:py-28 bg-muted">
      <div
        ref={ref}
        className={`px-4 sm:px-6 lg:px-12 xl:px-16 scroll-animate ${isVisible ? "visible" : ""}`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Processo Simplificado
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mt-3 mb-4">
              Como funciona a <span className="gradient-text">energia solar</span>
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto">
              Transforme a luz do sol em economia real na sua conta de luz
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image - Desktop left, Mobile bottom */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3]">
                  <Image
                    src="/images/solar-process.png"
                    alt="Sistema de energia solar residencial"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Overlay info card */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-foreground font-semibold">Sistema completo</p>
                      <p className="text-muted-foreground text-sm">Instalação em até 7 dias</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary/10 rounded-3xl -z-10 hidden lg:block" />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/10 rounded-3xl -z-10 hidden lg:block" />
            </div>

            {/* Steps */}
            <div className="order-1 lg:order-2">
              {/* Desktop: Horizontal layout with connectors */}
              <div className="hidden lg:grid grid-cols-2 gap-8">
                {steps.map((step, index) => (
                  <Step
                    key={step.title}
                    icon={step.icon}
                    number={index + 1}
                    title={step.title}
                    description={step.description}
                    isLast={index === steps.length - 1}
                  />
                ))}
              </div>

              {/* Mobile/Tablet: Vertical timeline */}
              <div className="lg:hidden">
                {steps.map((step, index) => (
                  <MobileStep
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
        </div>
      </div>
    </section>
  );
}
