"use client";

import Image from "next/image";
import { FileText, Pen, Send, Truck, Wrench, ClipboardCheck, Power } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface TimelineStepProps {
  icon: React.ReactNode;
  number: number;
  title: string;
  isLast?: boolean;
}

const timelineSteps = [
  { icon: <FileText className="w-5 h-5" />, title: "Elaboração do projeto fotovoltaico" },
  { icon: <Pen className="w-5 h-5" />, title: "Coleta de assinaturas" },
  { icon: <Send className="w-5 h-5" />, title: "Início da homologação" },
  { icon: <Truck className="w-5 h-5" />, title: "Entrega dos equipamentos" },
  { icon: <Wrench className="w-5 h-5" />, title: "Instalação do sistema" },
  { icon: <ClipboardCheck className="w-5 h-5" />, title: "Vistoria da concessionária" },
  { icon: <Power className="w-5 h-5" />, title: "Finalização e ativação" },
];

function TimelineStep({ icon, number, title, isLast = false }: TimelineStepProps) {
  return (
    <div className="flex items-start gap-4 group">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-2xl bg-secondary text-white flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
          {icon}
        </div>
        {!isLast && (
          <div className="w-0.5 h-16 bg-gradient-to-b from-secondary to-secondary/20 my-2" />
        )}
      </div>
      <div className="pt-3">
        <span className="text-xs font-bold text-secondary uppercase tracking-wider">
          Etapa {number}
        </span>
        <p className="font-semibold text-foreground mt-1">{title}</p>
      </div>
    </div>
  );
}

export default function Timeline() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-4 lg:px-8 scroll-animate ${isVisible ? "visible" : ""}`}
      >
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Nossas Etapas
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Do projeto à <span className="gradient-text">ativação</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Acompanhe cada etapa do processo de instalação do seu sistema solar
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Timeline */}
          <div className="bg-muted rounded-3xl p-8 lg:p-10">
            {timelineSteps.map((step, index) => (
              <TimelineStep
                key={step.title}
                icon={step.icon}
                number={index + 1}
                title={step.title}
                isLast={index === timelineSteps.length - 1}
              />
            ))}
          </div>

          {/* Team Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/team-installation.jpg"
                alt="Equipe de instaladores da Allure"
                fill
                className="object-cover"
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-white rounded-2xl p-5 shadow-xl hidden lg:block">
              <p className="text-sm font-medium opacity-80">Equipe</p>
              <p className="text-2xl font-bold">Certificada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
