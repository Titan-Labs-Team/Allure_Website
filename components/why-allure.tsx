"use client";

import { useRef, useLayoutEffect } from "react";
import { ShieldCheck, Zap, Headphones, Award, Wrench, Users, ArrowUpRight, Flame } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineFillRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          reduce: "(prefers-reduced-motion: reduce)",
          motion: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { reduce } = context.conditions as { reduce: boolean };

          if (reduce) {
            // Reduced motion: everything visible, line full, no scrub.
            gsap.set(".roadmap-item", { opacity: 1, y: 0 });
            if (lineFillRef.current) gsap.set(lineFillRef.current, { height: "100%" });
            return;
          }

          // Line fill grows with scroll (scrub).
          if (lineFillRef.current) {
            gsap.to(lineFillRef.current, {
              height: "100%",
              ease: "none",
              scrollTrigger: {
                trigger: timelineRef.current,
                start: "top 70%",
                end: "bottom 70%",
                scrub: true,
              },
            });
          }

          // Each item fades + rises in when it enters.
          gsap.utils.toArray<HTMLElement>(".roadmap-item").forEach((el) => {
            gsap.fromTo(
              el,
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: el,
                  start: "top 80%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          });
        }
      );
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="por-que-allure" className="section-py bg-muted bg-dots">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

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

        {/* Roadmap timeline */}
        <div ref={timelineRef} className="relative mx-auto max-w-3xl mt-4">
          {/* Line track (full, gray) + fill (brand, scrub-animated) */}
          <div
            className="absolute left-5 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-border"
            aria-hidden
          />
          <div
            ref={lineFillRef}
            className="absolute left-5 lg:left-1/2 lg:-translate-x-1/2 top-0 w-[2px] bg-brand origin-top"
            style={{ height: 0 }}
            aria-hidden
          />

          <div className="flex flex-col gap-10 sm:gap-14">
            {differentials.map(({ Icon, stat, unit, title, description, featured }, i) => {
              const rightSide = i % 2 === 1;
              return (
                <div
                  key={title}
                  className={`roadmap-item relative grid grid-cols-[2.5rem_1fr] lg:grid-cols-2 items-center gap-x-4 lg:gap-x-12`}
                >
                  {/* Node / icon on the central line */}
                  <div className="lg:col-span-2 lg:row-start-1 lg:col-start-1 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 z-10 flex justify-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center border-4 border-muted ${
                        featured ? "bg-brand shadow-lg shadow-brand/30" : "bg-white ring-1 ring-border"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${featured ? "text-white" : "text-brand-2"}`}
                        strokeWidth={1.8}
                      />
                    </div>
                  </div>

                  {/* Content card */}
                  <div
                    className={`lg:row-start-1 ${
                      rightSide ? "lg:col-start-2 lg:pl-8" : "lg:col-start-1 lg:pr-8 lg:text-right"
                    }`}
                  >
                    <div
                      className={`relative rounded-2xl border p-6 ${
                        featured
                          ? "bg-brand border-brand text-white shadow-xl shadow-brand/20"
                          : "bg-white border-border card-shadow-sm"
                      }`}
                    >
                      {featured && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-white mb-3">
                          <Flame className="w-3 h-3" strokeWidth={2} />
                          Destaque
                        </span>
                      )}

                      {/* Stat */}
                      <div
                        className={`flex flex-wrap items-baseline gap-1.5 mb-2 ${
                          rightSide ? "" : "lg:justify-end"
                        }`}
                      >
                        <span
                          className={`font-display font-bold tracking-tight leading-none text-4xl sm:text-5xl ${
                            featured ? "text-white" : "text-brand"
                          }`}
                        >
                          {stat}
                        </span>
                        {unit && (
                          <span
                            className={`font-display font-semibold text-base sm:text-xl ${
                              featured ? "text-white/70" : "text-brand/60"
                            }`}
                          >
                            {unit}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3
                        className={`font-display font-semibold text-lg tracking-tight mb-1.5 text-pretty ${
                          featured ? "text-white" : "text-foreground"
                        }`}
                      >
                        {title}
                      </h3>

                      {/* Description */}
                      <p
                        className={`text-sm leading-relaxed text-pretty ${
                          featured ? "text-white/70" : "text-muted-foreground"
                        }`}
                      >
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quiet link — primary conversion stays with hero + final CTA */}
        <div className="mt-14 flex justify-center">
          <a href="#contato" className="link-quiet text-brand-2 hover:text-brand">
            Falar com um especialista
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
