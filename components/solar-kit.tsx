"use client";

import Image from "next/image";
import { Sun, Cpu, Battery, PlugZap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface KitItemProps {
  icon: React.ReactNode;
  label: string;
}

const kitItems: KitItemProps[] = [
  { icon: <Sun className="w-5 h-5" />, label: "Painel Solar" },
  { icon: <Cpu className="w-5 h-5" />, label: "Inversor" },
  { icon: <Battery className="w-5 h-5" />, label: "Bateria" },
  { icon: <PlugZap className="w-5 h-5" />, label: "Carregador" },
];

function KitItem({ icon, label }: KitItemProps) {
  return (
    <div className="flex items-center gap-3 bg-muted rounded-full px-4 py-2">
      <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
        {icon}
      </div>
      <span className="text-sm font-medium text-foreground">{label}</span>
    </div>
  );
}

export default function SolarKit() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="servicos" className="pt-8 pb-20 lg:pt-12 lg:pb-32 bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-4 lg:px-8 scroll-animate ${isVisible ? "visible" : ""}`}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/solar-kit.jpg"
                alt="Kit solar completo da Allure"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground rounded-2xl p-5 shadow-xl hidden lg:block">
              <p className="text-sm font-medium opacity-80">Economia de até</p>
              <p className="text-3xl font-bold">95%</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Energia Solar Residencial
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-3 mb-6 leading-tight">
              Sua casa com <span className="gradient-text">energia solar</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Produza sua própria energia, reduza custos e valorize seu imóvel com tecnologia solar de alta eficiência. Nosso kit inclui tudo que você precisa para começar a economizar.
            </p>

            {/* Kit Items */}
            <div className="flex flex-wrap gap-3 mb-8">
              {kitItems.map((item) => (
                <KitItem key={item.label} icon={item.icon} label={item.label} />
              ))}
            </div>

            <p className="text-sm text-muted-foreground mb-8">
              + estrutura de fixação, cabeamento e conectores.
            </p>

            {/* Price */}
            <div className="bg-muted rounded-2xl p-6 mb-8">
              <div className="flex items-end gap-2 mb-2">
                <p className="text-sm text-muted-foreground">A partir de</p>
              </div>
              <p className="text-4xl font-bold text-foreground mb-1">R$ 5.700,00</p>
              <p className="text-muted-foreground">
                Em até <span className="font-semibold text-foreground">84x</span> no financiamento
              </p>
            </div>

            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-full gap-2 h-14 px-8"
            >
              Comprar agora
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
