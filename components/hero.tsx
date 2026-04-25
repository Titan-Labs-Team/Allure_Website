"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type TabType = "residencia" | "empresa" | "rural";

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const benefits = [
  "Economize até 95% na conta de luz",
  "Retorno do investimento em 3-5 anos",
  "Equipamentos com garantia de 25 anos",
];

function TabButton({ active, onClick, children }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-14 py-5 font-medium text-lg transition-all rounded-full ${
        active
          ? "bg-secondary text-white shadow-lg"
          : "bg-foreground/5 text-foreground hover:bg-foreground/10"
      }`}
    >
      {children}
    </button>
  );
}

export default function Hero() {
  const [activeTab, setActiveTab] = useState<TabType>("residencia");

  return (
    <section id="inicio" className="relative">
      {/* Background Image - Reduced height */}
      <div className="relative h-[90vh] min-h-[600px] max-h-[900px]">
        <Image
          src="/images/hero-solar.jpg"
          alt="Casa moderna com painéis solares"
          fill
          className="object-cover"
          priority
        />
        {/* Subtle gradient overlay - reduced blue */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 lg:px-8 pt-16">
            <div className="max-w-2xl">
              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Energia <span className="italic font-normal">solar</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-xl">
                Painéis solares e equipamentos para você deixar todos os aparelhos da sua casa ligados, sem pensar na conta de luz.
              </p>

              {/* Benefits */}
              <ul className="space-y-3 mb-10">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-white/90">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-b from-[#1A4BAF] to-[#5BB8F5] hover:brightness-110 text-white font-semibold text-lg px-8 rounded-full gap-2 h-14 border-0"
                >
                  Solicitar orçamento
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 font-semibold text-lg px-8 rounded-full gap-2 h-14 bg-transparent"
                >
                  <Play className="w-5 h-5" />
                  Como funciona
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section - Between hero and content */}
      <div className="relative z-20 -mt-8">
        <div className="w-full flex justify-center items-center px-4">
          <div className="inline-flex gap-3 p-3 bg-white rounded-full shadow-xl">
            <TabButton
              active={activeTab === "residencia"}
              onClick={() => setActiveTab("residencia")}
            >
              Residência
            </TabButton>
            <TabButton
              active={activeTab === "empresa"}
              onClick={() => setActiveTab("empresa")}
            >
              Empresa
            </TabButton>
            <TabButton
              active={activeTab === "rural"}
              onClick={() => setActiveTab("rural")}
            >
              Rural
            </TabButton>
          </div>
        </div>
      </div>
    </section>
  );
}
