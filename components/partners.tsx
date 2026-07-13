"use client";

import Image from "next/image";

const partners = [
  { src: "/images/Parcerias/p1.webp", alt: "Parceiro 1", scale: 1,    offsetY: 0, offsetX: 0  },
  { src: "/images/Parcerias/p2.png",  alt: "Parceiro 2", scale: 1.45, offsetY: 2, offsetX: 15 },
  { src: "/images/Parcerias/p3.png",  alt: "Parceiro 3", scale: 1,    offsetY: 0, offsetX: 40 },
  { src: "/images/Parcerias/p4.png",  alt: "Parceiro 4", scale: 2.1,  offsetY: 0, offsetX: 12 },
  { src: "/images/Parcerias/p5.png",  alt: "Parceiro 5", scale: 2.1,  offsetY: 0, offsetX: 0  },
];

export default function Partners() {
  return (
    <section className="bg-muted bg-dots pt-0 pb-8 sm:pb-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
          <div className="flex-1 flex items-center justify-between gap-10 sm:gap-16 flex-wrap sm:flex-nowrap w-full sm:w-auto">
            {partners.map((p) => (
              <div
                key={p.src}
                className="relative h-20 sm:h-28 w-[calc(20%-12px)] sm:w-auto sm:flex-1 max-w-[220px] opacity-80 hover:opacity-100 transition-all duration-300"
                style={{ transform: `scale(${p.scale}) translate(${p.offsetX}px, ${p.offsetY}px)` }}
              >
                <Image src={p.src} alt={p.alt} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
