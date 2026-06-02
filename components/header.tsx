"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { Button } from "@/components/ui/button";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#por-que-allure", label: "Diferenciais" },
  { href: "#contato", label: "Contato" },
];

function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-foreground/70 hover:text-foreground transition-colors font-medium text-sm"
    >
      {children}
    </Link>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm h-14 sm:h-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-28 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center">
            <Image
              src="/images/logo-allure.png"
              alt="Allure"
              width={150}
              height={48}
              className="h-11 w-auto -mt-2"
            />
          </Link>

          {/* Desktop Navigation + CTA */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* CTA Button */}
            <Button asChild className="bg-gradient-to-b from-[#1A4BAF] to-[#5BB8F5] hover:brightness-110 text-white font-semibold gap-2 rounded-full px-7 py-3.5 text-sm border-0">
              <a href="https://wa.me/5517991604404" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-5 h-5" />
                Solicitar orçamento
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-foreground"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-border animate-fade-in-up">
            <nav className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href} onClick={closeMenu}>
                  {link.label}
                </NavLink>
              ))}
              <Button asChild className="bg-secondary hover:bg-secondary/90 text-white font-semibold gap-2 rounded-full mt-4">
                <a href="https://wa.me/5517991604404" target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-4 h-4" />
                  Solicitar orçamento
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
