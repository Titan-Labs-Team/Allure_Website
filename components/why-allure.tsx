"use client";

import { Award, Lightbulb, Shield, Headphones, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const WA_URL = "https://wa.me/5517991604404?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20energia%20solar.";

interface ReasonCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const reasons: ReasonCardProps[] = [
  {
    icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Experiência consolidada",
    description: "Mais de 10 anos no mercado de energia renovável, com centenas de projetos realizados.",
  },
  {
    icon: <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Atendimento personalizado",
    description: "Consultoria técnica desde o primeiro contato, com foco total nas suas necessidades.",
  },
  {
    icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Equipamentos premium",
    description: "Parceria com os principais fabricantes do mundo em painéis solares e inversores.",
  },
  {
    icon: <Headphones className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Suporte técnico",
    description: "Acompanhamento pós-venda com atendimento especializado para dúvidas e manutenções.",
  },
  {
    icon: <BadgeCheck className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Garantia estendida",
    description: "Garantias que vão além do padrão de mercado, oferecendo tranquilidade por muitos anos.",
  },
];

function ReasonCard({ icon, title, description }: ReasonCardProps) {
  return (
    <div className="bg-background rounded-2xl p-5 sm:p-6 border border-border hover:border-secondary/50 hover:shadow-xl transition-all duration-300 card-hover group">
      <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center text-secondary mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{description}</p>
    </div>
  );
}

export default function WhyAllure() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="por-que-allure" className="py-16 sm:py-20 lg:py-28 bg-background">
      <div
        ref={ref}
        className={`px-2 sm:px-3 lg:px-4 scroll-animate ${isVisible ? "visible" : ""}`}
      >
        <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-secondary font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Nossos Diferenciais
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 sm:mb-6">
            Por que escolher a <span className="gradient-text">Allure</span>?
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Somos referência em energia solar e engenharia elétrica no Brasil
          </p>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-10 sm:mb-12 stagger-children ${isVisible ? "visible" : ""}`}>
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
            asChild
            className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-full gap-2 h-12 sm:h-14 px-8"
          >
            <a href={WA_URL} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="w-5 h-5" />
              Falar com especialista agora
            </a>
          </Button>
        </div>
        </div>
      </div>
    </section>
  );
}
