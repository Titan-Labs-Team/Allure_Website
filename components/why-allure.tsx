"use client";

import { Award, Lightbulb, Shield, Headphones, BadgeCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface ReasonCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const reasons: ReasonCardProps[] = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Experiência consolidada",
    description: "Mais de 10 anos no mercado de energia renovável, com centenas de projetos realizados.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Atendimento personalizado",
    description: "Consultoria técnica desde o primeiro contato, com foco total nas suas necessidades.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Equipamentos premium",
    description: "Parceria com os principais fabricantes do mundo em painéis solares e inversores.",
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "Suporte técnico",
    description: "Acompanhamento pós-venda com atendimento especializado para dúvidas e manutenções.",
  },
  {
    icon: <BadgeCheck className="w-6 h-6" />,
    title: "Garantia estendida",
    description: "Garantias que vão além do padrão de mercado, oferecendo tranquilidade por muitos anos.",
  },
];

function ReasonCard({ icon, title, description }: ReasonCardProps) {
  return (
    <div className="bg-background rounded-2xl p-6 border border-border hover:border-secondary/50 hover:shadow-xl transition-all duration-300 card-hover group">
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center text-secondary mb-5 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

export default function WhyAllure() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="por-que-allure" className="py-20 lg:py-32 bg-muted">
      <div
        ref={ref}
        className={`container mx-auto px-4 lg:px-8 scroll-animate ${isVisible ? "visible" : ""}`}
      >
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Nossos Diferenciais
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Por que escolher a <span className="gradient-text">Allure</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Somos referência em energia solar e engenharia elétrica no Brasil
          </p>
        </div>

        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12 stagger-children ${isVisible ? "visible" : ""}`}>
          {reasons.map((reason) => (
            <ReasonCard
              key={reason.title}
              icon={reason.icon}
              title={reason.title}
              description={reason.description}
            />
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-full gap-2 h-14 px-8"
          >
            Fale com um especialista
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
