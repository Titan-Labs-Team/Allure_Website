"use client";

import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const features = [
  "Eficiência de conversão acima de 98%",
  "Monitoramento via aplicativo",
  "Garantia estendida de 12 anos",
  "Proteção contra surtos elétricos",
];

export default function InverterHighlight() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-32 bg-background overflow-hidden">
      <div
        ref={ref}
        className={`container mx-auto px-4 lg:px-8 scroll-animate ${isVisible ? "visible" : ""}`}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary to-secondary p-12 lg:p-16">
              <div className="relative w-full h-full">
                <Image
                  src="/images/inverter.jpg"
                  alt="Inversor Solar"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-accent/20 rounded-3xl -z-10 blur-xl" />
          </div>

          {/* Content */}
          <div>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Destaque
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-3 mb-6 leading-tight">
              Inversor <span className="gradient-text">Solar</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Responsável pela conversão da corrente contínua em corrente alternada — própria para uso geral. Ele transforma energia em eficiência, garantindo o funcionamento ideal do sistema.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Nossos inversores são de alta eficiência, com monitoramento remoto integrado, permitindo que você acompanhe a geração de energia em tempo real pelo celular.
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((item) => (
                <li key={item} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-full gap-2 h-14 px-8"
            >
              Comprar agora
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
