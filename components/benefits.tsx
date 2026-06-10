"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const WA_URL = "https://wa.me/5517991604404?text=Ol%C3%A1!%20Quero%20saber%20como%20a%20energia%20solar%20pode%20me%20ajudar.";

interface Benefit {
  image: string;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    image: "/images/benefit-economy.jpg",
    title: "Reduza até 90% da conta de luz",
    description: "A economia começa já no primeiro mês e se acumula ao longo de mais de duas décadas de geração.",
  },
  {
    image: "/images/benefit-value.jpg",
    title: "Valorize o seu imóvel",
    description: "Imóveis com sistema solar instalado são mais procurados e valorizados no mercado.",
  },
  {
    image: "/images/benefit-autonomy.jpg",
    title: "Conquiste autonomia energética",
    description: "Menos dependência das distribuidoras e proteção contra os reajustes constantes da tarifa.",
  },
];

function BenefitCard({ image, title, description, large }: Benefit & { large?: boolean }) {
  return (
    <article className={`group relative overflow-hidden rounded-2xl border border-border card-hover ${large ? "lg:row-span-2" : ""}`}>
      <div className={`relative ${large ? "h-full min-h-[320px] lg:min-h-[560px]" : "aspect-[16/10]"}`}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/40 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-7 lg:p-8">
        <h3 className={`font-display font-semibold tracking-tight text-brand-foreground mb-2 ${large ? "text-2xl lg:text-3xl" : "text-xl"}`}>
          {title}
        </h3>
        <p className="text-brand-foreground/75 text-sm sm:text-base leading-relaxed max-w-md">{description}</p>
      </div>
    </article>
  );
}

export default function Benefits() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 sm:py-28 lg:py-36 bg-background">
      <div ref={ref} className={`px-5 sm:px-6 lg:px-8 scroll-animate ${isVisible ? "visible" : ""}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-end mb-16 lg:mb-20">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-brand-3" />
                <span className="text-xs sm:text-sm uppercase tracking-[0.22em] text-brand-2 font-medium">
                  Vantagens
                </span>
              </div>
              <h2 className="font-display font-semibold tracking-tight text-pretty text-3xl sm:text-4xl lg:text-5xl text-foreground max-w-2xl">
                Mais que economia. Um ativo para a sua vida.
              </h2>
            </div>
            <p className="lg:col-span-4 text-muted-foreground leading-relaxed">
              Produzir a própria energia é uma decisão financeira inteligente — e profundamente sustentável.
            </p>
          </div>

          {/* Asymmetric bento grid */}
          <div className={`grid lg:grid-cols-2 gap-6 lg:gap-7 stagger-children ${isVisible ? "visible" : ""}`}>
            <BenefitCard {...benefits[0]} large />
            <BenefitCard {...benefits[1]} />
            <BenefitCard {...benefits[2]} />
          </div>

          {/* CTA */}
          <div className="mt-12 flex justify-center">
            <Button
              size="lg"
              asChild
              className="group bg-accent text-accent-foreground hover:brightness-105 font-semibold text-base px-9 h-14 rounded-full gap-2.5 border-0 shadow-lg shadow-accent/25"
            >
              <a href={WA_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-5 h-5" />
                Quero esses benefícios
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
