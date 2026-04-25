"use client";

import { ArrowRight, Sun, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface CTABannerProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  variant?: "primary" | "gradient";
}

export default function CTABanner({
  title,
  subtitle,
  buttonText,
  variant = "primary",
}: CTABannerProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      className={`py-16 lg:py-20 relative overflow-hidden ${
        variant === "gradient"
          ? "bg-gradient-to-r from-secondary via-secondary/90 to-accent"
          : "bg-primary"
      }`}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div
        ref={ref}
        className={`container mx-auto px-4 lg:px-8 scroll-animate relative z-10 ${isVisible ? "visible" : ""}`}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex w-16 h-16 rounded-2xl bg-white/10 items-center justify-center">
              {variant === "gradient" ? (
                <Sparkles className="w-8 h-8 text-white" />
              ) : (
                <Sun className="w-8 h-8 text-accent animate-pulse-slow" />
              )}
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2 text-balance">
                {title}
              </h2>
              {subtitle && (
                <p className="text-white/70 text-lg">{subtitle}</p>
              )}
            </div>
          </div>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-semibold rounded-full gap-2 h-14 px-8 flex-shrink-0"
          >
            {buttonText}
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
