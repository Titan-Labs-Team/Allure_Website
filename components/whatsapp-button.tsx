"use client";

import Link from "next/link";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export default function WhatsAppButton({
  phoneNumber = "5511999999999",
  message = "Olá! Gostaria de saber mais sobre energia solar.",
}: WhatsAppButtonProps) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <div className="relative">
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        
        {/* Button */}
        <div className="relative flex items-center gap-3 bg-[#25D366] text-white rounded-full pl-4 pr-5 py-3 shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-300 group-hover:scale-105">
          <WhatsAppIcon className="w-6 h-6" />
          <span className="hidden sm:inline font-medium text-sm">Fale conosco</span>
        </div>
      </div>
    </Link>
  );
}
