"use client";

import Image from "next/image";
import { Wrench, TrendingUp, Leaf, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface MainBenefitProps {
  image: string;
  title: string;
  description: string;
}

interface MinorBenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const mainBenefits: MainBenefitProps[] = [
  {
    image: "/images/benefit-economy.jpg",
    title: "Reduza até 95% da conta de luz",
    description: "Em muitos casos, a economia pode chegar a 95% do valor atual da sua conta.",
  },
  {
    image: "/images/benefit-value.jpg",
    title: "Valorização do imóvel",
    description: "Imóveis com sistema solar instalado tendem a ser mais valorizados no mercado.",
  },
  {
    image: "/images/benefit-autonomy.jpg",
    title: "Autonomia energética",
    description: "Menor dependência das distribuidoras e proteção contra reajustes tarifários.",
  },
];

const minorBenefits: MinorBenefitProps[] = [
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Manutenção simples",
    description: "Com revisões preventivas, o sistema pode durar mais de 25 anos.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Sistema escalável",
    description: "O sistema pode ser ampliado caso o consumo aumente futuramente.",
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Sustentabilidade",
    description: "Geração de energia limpa, sem emissão de gases poluentes.",
  },
];

function MainBenefitCard({ image, title, description }: MainBenefitProps) {
  return (
    <div className="group bg-background rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 card-hover">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

function MinorBenefitCard({ icon, title, description }: MinorBenefitProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center text-secondary flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-foreground mb-1">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
}

export default function Benefits() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-4 lg:px-8 scroll-animate ${isVisible ? "visible" : ""}`}
      >
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Vantagens
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Benefícios da <span className="gradient-text">energia solar</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Descubra as vantagens de produzir sua própria energia
          </p>
        </div>

        {/* Main Benefits */}
        <div className={`grid md:grid-cols-3 gap-6 mb-12 stagger-children ${isVisible ? "visible" : ""}`}>
          {mainBenefits.map((benefit) => (
            <MainBenefitCard
              key={benefit.title}
              image={benefit.image}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>

        {/* Minor Benefits */}
        <div className="bg-muted rounded-3xl p-5 md:p-8 lg:p-12">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 mb-8">
            {minorBenefits.map((benefit) => (
              <MinorBenefitCard
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
          <div className="text-center pt-4">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-full gap-2 h-14 px-8"
            >
              Simule sua economia
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
