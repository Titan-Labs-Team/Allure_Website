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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm h-18 sm:h-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center">
            <Image
              src="/images/logo-allure.png"
              alt="Allure"
              width={170}
              height={54}
              className="h-11 sm:h-14 w-auto -mt-2"
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
            <Button asChild className="bg-brand text-brand-foreground hover:bg-brand-2 font-semibold gap-2 rounded-full px-6 has-[>svg]:px-6 h-12 text-base border-0 shadow-md shadow-brand/25 transition-all duration-300 hover:-translate-y-0.5">
              <a href="#contato">
                <WhatsAppIcon className="size-6" />
                Solicitar orçamento
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            className="lg:hidden group size-11"
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <svg
              className="pointer-events-none size-[30px]"
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

        {/* Mobile Navigation — grid-rows trick for smooth open/close */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden min-h-0">
            <div className="bg-white border-t border-border shadow-xl">
              <nav className="flex flex-col px-6 py-5">
                {navLinks.map((link, i) => (
                  <div
                    key={link.href}
                    className="transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] border-b border-border/50 py-3.5"
                    style={{
                      opacity: isMenuOpen ? 1 : 0,
                      transform: isMenuOpen ? "translateY(0)" : "translateY(-8px)",
                      transitionDelay: isMenuOpen ? `${i * 55 + 80}ms` : "0ms",
                    }}
                  >
                    <NavLink href={link.href} onClick={closeMenu}>
                      {link.label}
                    </NavLink>
                  </div>
                ))}
                <div
                  className="transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] mt-4"
                  style={{
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen ? "translateY(0)" : "translateY(-8px)",
                    transitionDelay: isMenuOpen ? `${navLinks.length * 55 + 80}ms` : "0ms",
                  }}
                >
                  <Button asChild className="w-full bg-brand text-brand-foreground hover:bg-brand-2 font-semibold gap-2 rounded-full h-11 border-0 shadow-md shadow-brand/25 transition-all duration-300 hover:-translate-y-0.5">
                    <a href="#contato" onClick={closeMenu}>
                      <WhatsAppIcon className="w-4 h-4" />
                      Solicitar orçamento
                    </a>
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
