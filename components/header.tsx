"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm h-16 sm:h-18">
      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 h-full">
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
            <Button asChild className="bg-brand text-brand-foreground hover:bg-brand-2 font-semibold gap-2 rounded-full px-7 h-11 text-sm border-0 shadow-md shadow-brand/25 transition-all">
              <a href="https://wa.me/5517991604404" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-6 h-6" />
                Solicitar orçamento
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            className="lg:hidden group"
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <svg
              className="pointer-events-none"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12L20 12"
                className="origin-center -translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
              />
              <path
                d="M4 12H20"
                className="origin-center transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
              />
              <path
                d="M4 12H20"
                className="origin-center translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
              />
            </svg>
          </Button>
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
              <Button asChild className="bg-brand text-brand-foreground hover:bg-brand-2 font-semibold gap-2 rounded-full mt-4 h-11 border-0 shadow-md shadow-brand/25">
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
