import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

interface FooterColumnProps {
  title: string;
  links: { label: string; href: string }[];
}

const footerColumns: FooterColumnProps[] = [
  {
    title: "Soluções",
    links: [
      { label: "Energia Solar Residencial", href: "#servicos" },
      { label: "Energia Solar Empresarial", href: "#servicos" },
      { label: "Energia Solar Rural", href: "#servicos" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Como funciona", href: "#como-funciona" },
      { label: "Diferenciais", href: "#por-que-allure" },
      { label: "Simular economia", href: "#economia" },
      { label: "Fale conosco", href: "#contato" },
    ],
  },
];

const socialLinks = [
  { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
  { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
  { icon: <WhatsAppIcon className="w-5 h-5" />, href: "https://wa.me/5516997650595", label: "WhatsApp" },
];

const MAPS_URL = "https://maps.google.com/?q=Av.+Comendador+Alfredo+Maffei,+1387,+São+Carlos,+SP";

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary text-white">
      {/* Brilho decorativo + linha de brilho no topo */}
      <div className="pointer-events-none absolute -top-28 left-1/3 h-72 w-72 rounded-full bg-brand/20 blur-[120px]" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr]">
          {/* Marca */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="#inicio" className="inline-flex items-center mb-5">
              <Image
                src="/images/logo-allure.png"
                alt="Allure Engenharia Solar"
                width={150}
                height={48}
                className="brightness-0 invert h-10 sm:h-12 w-auto"
              />
            </Link>
            <p className="text-white/60 max-w-sm text-sm leading-relaxed mb-5">
              Engenharia que transforma luz em patrimônio. Projeto e instalação de sistemas fotovoltaicos completos em São Carlos e região.
            </p>
            {/* Redes sociais */}
            <div className="flex gap-2.5">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/70 hover:bg-brand hover:text-white transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Colunas de links */}
          {footerColumns.map((column) => (
            <FooterColumn key={column.title} title={column.title} links={column.links} />
          ))}

          {/* Contato */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contato</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://wa.me/5516997650595"
                  className="flex items-center gap-2.5 text-white/60 hover:text-white transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  (16) 99765-0595
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:contato@allureenergiasolar.com.br"
                  className="flex items-center gap-2.5 text-white/60 hover:text-white transition-colors text-sm break-all"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  contato@allureenergiasolar.com.br
                </Link>
              </li>
              <li className="flex items-start gap-2.5 text-white/60 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  Av. Comendador Alfredo Maffei, 1387 — Sala 33, Centro, São Carlos — SP, 13561-270
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 inline-flex items-center gap-1 text-brand-3 hover:underline"
                  >
                    Ver no mapa
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs sm:text-sm text-center sm:text-left">
            © 2026 Allure Engenharia Solar. Todos os direitos reservados.
          </p>
          <Link href="#inicio" className="text-white/40 hover:text-white text-xs sm:text-sm transition-colors">
            Voltar ao topo
          </Link>
        </div>
      </div>
    </footer>
  );
}
