"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface EquipmentCardProps {
  name: string;
  image: string;
  description: string;
}

const equipments: EquipmentCardProps[] = [
  { 
    name: "Placas Solares", 
    image: "/images/solar-panels.jpg",
    description: "Alta eficiência e durabilidade"
  },
  { 
    name: "Inversor Solar", 
    image: "/images/inverter.jpg",
    description: "Conversão inteligente"
  },
  { 
    name: "Estrutura de Fixação", 
    image: "https://placehold.co/400x300/F8FAFC/3B82F6?text=Estrutura",
    description: "Suporte resistente"
  },
  { 
    name: "Cabeamento", 
    image: "https://placehold.co/400x300/F8FAFC/3B82F6?text=Cabos",
    description: "Conexões seguras"
  },
  { 
    name: "String Box", 
    image: "https://placehold.co/400x300/F8FAFC/3B82F6?text=String+Box",
    description: "Proteção elétrica"
  },
];

function EquipmentCard({ name, image, description }: EquipmentCardProps) {
  return (
    <div className="group bg-background rounded-2xl overflow-hidden border border-border hover:border-secondary/50 transition-all duration-300 card-hover min-w-0">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-5 min-w-0">
        <h3 className="font-semibold text-foreground mb-1 text-pretty">{name}</h3>
        <p className="text-sm text-muted-foreground text-pretty">{description}</p>
      </div>
    </div>
  );
}

export default function EquipmentKit() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-32 bg-muted">
      <div
        ref={ref}
        className={`container mx-auto px-4 lg:px-8 scroll-animate ${isVisible ? "visible" : ""}`}
      >
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Kit Completo
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            O que compõe o <span className="gradient-text">kit solar</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Equipamentos de alta performance para garantir máxima eficiência
          </p>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 stagger-children ${isVisible ? "visible" : ""}`}>
          {equipments.map((equipment) => (
            <EquipmentCard
              key={equipment.name}
              name={equipment.name}
              image={equipment.image}
              description={equipment.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
