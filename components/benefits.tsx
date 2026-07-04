"use client";

import Image from "next/image";
import { ArrowUpRight, BadgeCheck, Flame } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

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

function BenefitCard({ image, title, description, large, featured }: Benefit & { large?: boolean; featured?: boolean }) {
  return (
    <article className={`group relative overflow-hidden rounded-2xl border border-border card-hover card-shadow-sm min-w-0 ${large ? "col-span-2 lg:col-span-1 lg:row-span-2" : ""}`}>
      {featured && (
        <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 bg-amber-400 text-amber-950 text-[0.65rem] font-bold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full shadow-lg shadow-amber-400/30">
          <Flame className="w-3 h-3" strokeWidth={2.5} />
          Destaque
        </div>
      )}
      <div className={`relative ${large ? "h-full min-h-[240px] sm:min-h-[320px] lg:min-h-[560px]" : "aspect-[4/5] sm:aspect-[16/10]"}`}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E2C6B]/70 via-[#0E2C6B]/20 to-transparent" />
      </div>
      <div className={`absolute bottom-0 left-0 right-0 min-w-0 ${large ? "p-6 sm:p-7 lg:p-8" : "p-4 sm:p-7 lg:p-8"}`}>
        <h3 className={`font-display font-semibold tracking-tight text-brand-foreground mb-2 flex flex-wrap items-center gap-2 text-pretty ${large ? "text-xl sm:text-2xl lg:text-3xl" : "text-base sm:text-xl"}`}>
          {title}
          <BadgeCheck className="w-4 h-4 sm:w-5 sm:h-5 text-white/70 flex-shrink-0" strokeWidth={2.2} />
        </h3>
        {/* Description hidden on the tight small cards at mobile; large card and all desktop keep it */}
        <p className={`text-brand-foreground/75 text-sm sm:text-base leading-relaxed max-w-md text-pretty ${large ? "" : "hidden sm:block"}`}>{description}</p>
      </div>
    </article>
  );
}

export default function Benefits() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-py bg-background">
      <div ref={ref} className={`px-5 sm:px-6 lg:px-8 scroll-animate ${isVisible ? "visible" : ""}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-end mb-10 lg:mb-14">
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
            <BenefitCard {...benefits[0]} large featured />
            <BenefitCard {...benefits[1]} />
            <BenefitCard {...benefits[2]} />
          </div>

          {/* Quiet link — primary conversion stays with hero + final CTA */}
          <div className="mt-12 flex justify-center">
            <a href="#contato" className="link-quiet text-brand-2 hover:text-brand">
              Quero esses benefícios
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
