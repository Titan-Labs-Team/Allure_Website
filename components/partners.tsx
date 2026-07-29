"use client";

import Image from "next/image";

export interface Partner {
  src: string;
  alt: string;
  scale: number;
  offsetY: number;
}

const partners: Partner[] = [
  { src: "/images/Parcerias/p1.webp", alt: "Parceiro 1", scale: 1,    offsetY: 0 },
  { src: "/images/Parcerias/p2.png",  alt: "Parceiro 2", scale: 1.45, offsetY: 2 },
  { src: "/images/Parcerias/p3.png",  alt: "Parceiro 3", scale: 1,    offsetY: 0 },
  { src: "/images/Parcerias/p4.png",  alt: "Parceiro 4", scale: 2.1,  offsetY: 0 },
  { src: "/images/Parcerias/p5.png",  alt: "Parceiro 5", scale: 2.1,  offsetY: 0 },
];

// Marquee reutilizável. Cada instância recebe a própria lista de parceiros —
// há uma no rodapé (FAQ) e outra abaixo da hero, mantidas separadas de
// propósito porque as listas vão divergir no futuro.
export function PartnerMarquee({
  items,
  title,
  sectionClassName = "bg-muted bg-dots pt-0 pb-8 sm:pb-10 overflow-hidden",
}: {
  items: Partner[];
  title?: string;
  sectionClassName?: string;
}) {
  // Duplicamos a lista: a track anima de 0 a -50%, então a segunda cópia entra
  // exatamente onde a primeira sai — loop contínuo sem emenda visível.
  const loop = [...items, ...items];

  return (
    <section className={sectionClassName}>
      <div className="max-w-7xl mx-auto">
        {title && (
          <p className="text-center font-display font-medium tracking-tight text-lg sm:text-xl text-muted-foreground/80 text-pretty px-5 mt-0.5 mb-1 sm:mb-2">
            {title}
          </p>
        )}

        {/* group: pausa a animação no hover. mask: fade nas bordas. */}
        <div className="group relative py-4 sm:py-6 [-webkit-mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)] [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
          <div className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]">
            {loop.map((p, i) => (
              <div key={i} className="shrink-0 px-8 sm:px-14" aria-hidden={i >= items.length}>
                <div
                  className="relative h-20 sm:h-28 w-[120px] sm:w-[170px] opacity-70 hover:opacity-100 transition-opacity duration-300"
                  style={{ transform: `scale(${p.scale}) translateY(${p.offsetY}px)` }}
                >
                  <Image src={p.src} alt={p.alt} fill className="object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Partners() {
  return <PartnerMarquee items={partners} />;
}
