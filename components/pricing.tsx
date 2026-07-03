"use client";

import { Gauge, MapPin, Home, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface PricingFactorProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const pricingFactors: PricingFactorProps[] = [
  { 
    icon: <Gauge className="w-6 h-6" />, 
    title: "Consumo médio", 
    description: "Quanto maior o consumo, maior o sistema necessário" 
  },
  { 
    icon: <MapPin className="w-6 h-6" />, 
    title: "Localização", 
    description: "Regiões com mais sol demandam menos painéis" 
  },
  { 
    icon: <Home className="w-6 h-6" />, 
    title: "Tipo de telhado", 
    description: "Estrutura e inclinação influenciam a instalação" 
  },
  { 
    icon: <Star className="w-6 h-6" />, 
    title: "Qualidade", 
    description: "Equipamentos premium têm maior durabilidade" 
  },
];

function PricingFactorCard({ icon, title, description }: PricingFactorProps) {
  return (
    <div className="bg-background rounded-2xl p-6 border border-border text-center hover:border-secondary/50 hover:shadow-xl transition-all duration-300 card-hover group min-w-0">
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="font-semibold text-foreground mb-2 text-pretty">{title}</h3>
      <p className="text-sm text-muted-foreground text-pretty">{description}</p>
    </div>
  );
}

export default function Pricing() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-32 bg-muted">
      <div
        ref={ref}
        className={`container mx-auto px-4 lg:px-8 scroll-animate ${isVisible ? "visible" : ""}`}
      >
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Investimento
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Quanto custa instalar <span className="gradient-text">energia solar</span>?
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground text-lg mb-4">
              O investimento em energia solar residencial varia de acordo com alguns fatores específicos.
            </p>
            <div className="inline-flex items-center gap-2 bg-background rounded-full px-6 py-3 border border-border">
              <span className="text-muted-foreground">Em média:</span>
              <span className="font-bold text-foreground text-xl">R$ 12.000</span>
              <span className="text-muted-foreground">a</span>
              <span className="font-bold text-foreground text-xl">R$ 40.000</span>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Retorno do investimento em 3 a 5 anos
            </p>
          </div>
        </div>

        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 stagger-children ${isVisible ? "visible" : ""}`}>
          {pricingFactors.map((factor) => (
            <PricingFactorCard
              key={factor.title}
              icon={factor.icon}
              title={factor.title}
              description={factor.description}
            />
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Simule agora o valor do seu kit solar e descubra quanto você pode economizar!
          </p>
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-full gap-2 h-14 px-8"
          >
            Simule agora
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
