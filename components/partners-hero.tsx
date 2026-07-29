"use client";

import { PartnerMarquee, type Partner } from "@/components/partners";

// Parceiros exibidos abaixo da hero. Por enquanto iguais aos do rodapé, mas
// mantidos em lista SEPARADA de propósito — depois entram parceiros diferentes
// aqui, sem afetar o carrossel do FAQ.
const heroPartners: Partner[] = [
  { src: "/images/Parcerias/p1.webp", alt: "Parceiro 1", scale: 1,    offsetY: 0 },
  { src: "/images/Parcerias/p2.png",  alt: "Parceiro 2", scale: 1.45, offsetY: 2 },
  { src: "/images/Parcerias/p3.png",  alt: "Parceiro 3", scale: 1,    offsetY: 0 },
  { src: "/images/Parcerias/p4.png",  alt: "Parceiro 4", scale: 2.1,  offsetY: 0 },
  { src: "/images/Parcerias/p5.png",  alt: "Parceiro 5", scale: 2.1,  offsetY: 0 },
];

export default function PartnersHero() {
  return (
    <PartnerMarquee
      items={heroPartners}
      title="Trabalhamos com as melhores marcas do mercado para garantir qualidade e durabilidade"
      sectionClassName="bg-white pt-3 sm:pt-4 pb-2 sm:pb-4 overflow-hidden"
    />
  );
}
