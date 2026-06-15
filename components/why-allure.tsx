"use client";

import { ShieldCheck, Zap, Headphones, Award, Wrench, Users, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const WA_URL = "https://wa.me/5517991604404?text=Ol%C3%A1!%20Quero%20conhecer%20os%20diferenciais%20da%20Allure.";

const differentials = [
  {
    Icon: Zap,
    stat: "7",
    unit: "dias",
    title: "Da aprovação à energia",
    description: "Do projeto aprovado ao sistema funcionando — com equipe própria, sem terceiros e sem atrasos.",
    featured: true,
  },
  {
    Icon: ShieldCheck,
    stat: "25",
    unit: "anos",
    title: "Garantia total",
    description: "25 anos nos painéis e 10 anos na mão de obra. Seu investimento protegido por décadas.",
    featured: false,
  },
  {
    Icon: Headphones,
    stat: "24/7",
    unit: "",
    title: "Suporte permanente",
    description: "Monitoramento remoto e suporte técnico disponível a qualquer hora, todos os dias do ano.",
    featured: false,
  },
  {
    Icon: Users,
    stat: "+1.200",
    unit: "",
    title: "Projetos entregues",
    description: "Mais de mil famílias e empresas já geram a própria energia com a engenharia da Allure.",
    featured: false,
  },
  {
    Icon: Award,
    stat: "98%",
    unit: "",
    title: "Eficiência dos painéis",
    description: "Equipamentos Tier-1 certificados com a maior taxa de conversão de energia do mercado.",
    featured: false,
  },
  {
    Icon: Wrench,
    stat: "100%",
    unit: "",
    title: "Equipe própria",
    description: "Nenhum serviço terceirizado. Da venda à manutenção, tudo é responsabilidade da Allure.",
    featured: false,
  },
];

export default function WhyAllure() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="por-que-allure" className="py-16 sm:py-20 lg:py-24 bg-muted bg-dots">
      <div ref={ref} className={`max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 scroll-animate ${isVisible ? "visible" : ""}`}>

        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-10 lg:mb-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-brand-3" />
              <span className="text-xs sm:text-sm uppercase tracking-[0.22em] text-brand-2 font-medium">
                Diferenciais
              </span>
            </div>
            <h2 className="font-display font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-foreground text-pretty">
              Números que provam o que a Allure entrega.
            </h2>
          </div>
          <p className="lg:col-span-5 text-muted-foreground leading-relaxed lg:pb-1">
            Não são promessas — são resultados. Cada número representa projetos reais, clientes satisfeitos e uma engenharia que não aceita mediocridade.
          </p>
        </div>

        {/* Cards grid */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children ${isVisible ? "visible" : ""}`}>
          {differentials.map(({ Icon, stat, unit, title, description, featured }) => (
            <div
              key={title}
              className={`group relative flex flex-col rounded-2xl p-7 lg:p-8 border transition-all duration-500 hover:-translate-y-1 ${
                featured
                  ? "bg-brand border-brand shadow-xl shadow-brand/20 text-white"
                  : "bg-white border-border shadow-sm hover:shadow-md hover:border-brand/30"
              }`}
            >
              {/* Icon */}
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-6 ${
                featured ? "bg-white/15" : "bg-brand-muted"
              }`}>
                <Icon className={`w-5 h-5 ${featured ? "text-white" : "text-brand-2"}`} strokeWidth={1.8} />
              </div>

              {/* Stat */}
              <div className="flex items-baseline gap-1.5 mb-3">
                <span className={`font-display font-bold tracking-tight leading-none ${
                  featured ? "text-white text-5xl lg:text-6xl" : "text-brand text-5xl lg:text-6xl"
                }`}>
                  {stat}
                </span>
                {unit && (
                  <span className={`font-display font-semibold text-xl ${
                    featured ? "text-white/70" : "text-brand/60"
                  }`}>
                    {unit}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className={`font-display font-semibold text-lg tracking-tight mb-2 ${
                featured ? "text-white" : "text-foreground"
              }`}>
                {title}
              </h3>

              {/* Description */}
              <p className={`text-sm leading-relaxed ${
                featured ? "text-white/70" : "text-muted-foreground"
              }`}>
                {description}
              </p>

              {/* Featured accent line */}
              {featured && (
                <div className="absolute top-0 left-8 right-8 h-[2px] rounded-full bg-white/30" />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Button
            size="lg"
            asChild
            className="group bg-brand text-brand-foreground hover:bg-brand-2 font-semibold text-lg px-12 h-16 rounded-full gap-3 border-0 shadow-lg shadow-brand/25"
          >
            <a href={WA_URL} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="size-7" />
              Falar com um especialista
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
}
