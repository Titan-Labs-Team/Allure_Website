"use client";

import { ShieldCheck, BadgeCheck, Zap, Headphones, Award, Wrench, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const WA_URL = "https://wa.me/5517991604404?text=Ol%C3%A1!%20Quero%20conhecer%20os%20diferenciais%20da%20Allure.";

interface Reason {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const reasons: Reason[] = [
  {
    icon: <ShieldCheck className="w-6 h-6" strokeWidth={1.4} />,
    title: "Garantia de 25 anos",
    description: "Cobertura de performance que vai muito além do padrão do mercado, com tranquilidade por décadas.",
  },
  {
    icon: <BadgeCheck className="w-6 h-6" strokeWidth={1.4} />,
    title: "Certificações técnicas",
    description: "Equipe e equipamentos homologados, seguindo as normas mais exigentes de engenharia elétrica.",
  },
  {
    icon: <Zap className="w-6 h-6" strokeWidth={1.4} />,
    title: "Instalação rápida",
    description: "Da assinatura à geração de energia em até 7 dias, com obra limpa e organizada.",
  },
  {
    icon: <Headphones className="w-6 h-6" strokeWidth={1.4} />,
    title: "Suporte pós-venda",
    description: "Acompanhamento contínuo e monitoramento remoto do desempenho do seu sistema.",
  },
  {
    icon: <Award className="w-6 h-6" strokeWidth={1.4} />,
    title: "Equipamentos premium",
    description: "Parceria com os principais fabricantes globais de painéis e inversores de alta eficiência.",
  },
  {
    icon: <Wrench className="w-6 h-6" strokeWidth={1.4} />,
    title: "Engenharia dedicada",
    description: "Cada projeto é dimensionado sob medida por engenheiros, não por planilhas genéricas.",
  },
];

function ReasonCard({ icon, title, description }: Reason) {
  return (
    <div className="group relative py-9 lg:py-10 px-2 transition-colors">
      <div className="w-12 h-12 rounded-xl bg-brand-muted flex items-center justify-center text-brand-2 mb-6 transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
        {icon}
      </div>
      <h3 className="font-display text-lg sm:text-xl font-semibold tracking-tight text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{description}</p>
    </div>
  );
}

export default function WhyAllure() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="por-que-allure" className="py-24 sm:py-28 lg:py-36 bg-background">
      <div ref={ref} className={`px-5 sm:px-6 lg:px-8 scroll-animate ${isVisible ? "visible" : ""}`}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-brand-3" />
              <span className="text-xs sm:text-sm uppercase tracking-[0.22em] text-brand-2 font-semibold">
                Diferenciais
              </span>
            </div>
            <h2 className="font-display font-semibold tracking-tight text-pretty text-3xl sm:text-4xl lg:text-5xl text-foreground mb-5">
              Por que a Allure é diferente.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              Credibilidade técnica, equipamentos de ponta e um compromisso real com o seu retorno.
            </p>
          </div>

          {/* Grid with subtle dividers */}
          <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 lg:gap-x-16 divide-y sm:divide-y-0 divide-border [&>*]:border-border sm:[&>*:nth-child(n+3)]:border-t lg:[&>*:nth-child(n+4)]:border-t stagger-children ${isVisible ? "visible" : ""}`}>
            {reasons.map((r) => (
              <ReasonCard key={r.title} {...r} />
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
                Falar com um especialista
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
