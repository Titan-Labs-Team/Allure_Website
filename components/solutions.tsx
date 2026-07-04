"use client";

import Image from "next/image";
import { Home, Building2, Factory, ArrowUpRight, BadgeCheck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const WA_URL = "https://wa.me/5517991604404?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20de%20energia%20solar.";

interface Solution {
  icon: React.ReactNode;
  tag: string;
  title: string;
  image: string;
  benefits: string[];
}

const solutions: Solution[] = [
  {
    icon: <Home className="w-5 h-5" strokeWidth={1.6} />,
    tag: "Residencial",
    title: "Para a sua casa",
    image: "/images/residential-solar.png",
    benefits: ["Reduza até 90% da conta", "Valorização do imóvel", "Instalação em até 7 dias"],
  },
  {
    icon: <Building2 className="w-5 h-5" strokeWidth={1.6} />,
    tag: "Comercial",
    title: "Para a sua empresa",
    image: "/images/solar-panels.jpg",
    benefits: ["Previsibilidade de custos", "Marca mais sustentável", "Projeto sob demanda"],
  },
  {
    icon: <Factory className="w-5 h-5" strokeWidth={1.6} />,
    tag: "Industrial",
    title: "Para a sua indústria",
    image: "/images/team-installation.jpg",
    benefits: ["Alta capacidade de geração", "Redução de custo energético", "Engenharia dedicada"],
  },
];

function SolutionCard({ icon, tag, title, image, benefits }: Solution) {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col min-w-0 shrink-0 w-[82%] snap-start md:w-auto rounded-2xl overflow-hidden border border-border bg-card card-hover card-shadow-sm"
    >
      {/* Image */}
      <div className="relative aspect-[5/4] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand/40 via-brand/5 to-transparent" />
        <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-background/90 backdrop-blur px-3.5 py-1.5 text-brand-2">
          {icon}
          <span className="text-xs font-semibold uppercase tracking-wider">{tag}</span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 min-w-0 p-6 lg:p-7">
        <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground mb-5 text-pretty">{title}</h3>
        <ul className="space-y-3 mb-7 flex-1">
          {benefits.map((b) => (
            <li key={b} className="flex items-center gap-3 text-muted-foreground min-w-0">
              <BadgeCheck className="w-4 h-4 text-brand-2 flex-shrink-0" strokeWidth={2.2} />
              <span className="text-sm text-pretty">{b}</span>
            </li>
          ))}
        </ul>
        <span className="link-quiet text-brand-2 group-hover:text-brand">
          Ver detalhes
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </a>
  );
}

export default function Solutions() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="servicos" className="section-py bg-background">
      <div ref={ref} className={`px-5 sm:px-6 lg:px-8 scroll-animate ${isVisible ? "visible" : ""}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-end mb-16 lg:mb-20">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-brand-3" />
                <span className="text-xs sm:text-sm uppercase tracking-[0.22em] text-brand-2 font-medium">
                  Soluções
                </span>
              </div>
              <h2 className="font-display font-semibold tracking-tight text-pretty text-3xl sm:text-4xl lg:text-5xl text-foreground max-w-2xl">
                Engenharia solar para cada escala.
              </h2>
            </div>
            <p className="lg:col-span-4 text-muted-foreground leading-relaxed">
              Da residência ao parque industrial, cada projeto é dimensionado sob medida pela nossa equipe técnica.
            </p>
          </div>

          {/* Mobile: horizontal snap carousel bleeding to the screen edge (-mx-5 px-5)
              with a reading gutter. md+: reverts to the 3-column grid. */}
          <div className={`flex md:grid md:grid-cols-3 gap-4 lg:gap-7 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none no-scrollbar -mx-5 px-5 md:mx-0 md:px-0 pb-4 md:pb-0 stagger-children ${isVisible ? "visible" : ""}`}>
            {solutions.map((s) => (
              <SolutionCard key={s.tag} {...s} />
            ))}
          </div>
          {/* Swipe hint — mobile only */}
          <p className="md:hidden mt-4 text-center text-xs text-muted-foreground">Arraste para ver mais →</p>
        </div>
      </div>
    </section>
  );
}
