"use client";

import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const benefits: string[] = [
  "Proposta em até 30 segundos",
  "Atendimento especializado",
  "Orçamento gratuito",
];

export default function FinalCTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contato" className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div
        ref={ref}
        className={`container mx-auto px-4 lg:px-8 relative z-10 scroll-animate ${isVisible ? "visible" : ""}`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-white/90 text-sm font-medium">
              Comece sua jornada solar
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight">
            Comece agora seu projeto de energia solar com a{" "}
            <span className="text-[#3B82F6]">Allure</span>
          </h2>

          <p className="text-white/70 text-base md:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto">
            Solicite agora uma simulação gratuita e personalizada! Faça sua proposta em até 30 segundos.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-8 sm:mb-12">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-accent-foreground" />
                </div>
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <Button
            size="lg"
            className="bg-[#F59E0B] hover:bg-[#F59E0B]/90 text-white font-semibold text-base sm:text-lg px-8 sm:px-12 rounded-full gap-3 h-12 sm:h-16 shadow-2xl shadow-[#F59E0B]/30"
          >
            Solicitar orçamento gratuito
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
