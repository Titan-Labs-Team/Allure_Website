import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

interface FooterColumnProps {
  title: string;
  links: { label: string; href: string }[];
}

const footerColumns: FooterColumnProps[] = [
  {
    title: "Soluções",
    links: [
      { label: "Energia Solar Residencial", href: "#servicos" },
      { label: "Energia Solar Empresarial", href: "#" },
      { label: "Energia Solar Rural", href: "#" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Quem somos", href: "#" },
      { label: "Como funciona", href: "#como-funciona" },
      { label: "Diferenciais", href: "#por-que-allure" },
    ],
  },
  {
    title: "Políticas",
    links: [
      { label: "Privacidade", href: "#" },
      { label: "Termos de uso", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />, href: "#", label: "Facebook" },
  { icon: <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />, href: "#", label: "Instagram" },
  { icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />, href: "#", label: "LinkedIn" },
  { icon: <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />, href: "#", label: "YouTube" },
];

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className="text-white/60 hover:text-white transition-colors text-xs sm:text-sm"
    >
      {children}
    </Link>
  );
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="font-semibold text-white mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wider">{title}</h3>
      <ul className="space-y-2 sm:space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <FooterLink href={link.href}>{link.label}</FooterLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-primary py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">

        {/* Top section: logo + description + social */}
        <div className="mb-8 sm:mb-12">
          <Link href="#inicio" className="inline-flex items-center mb-4">
            <Image
              src="/images/logo-allure.png"
              alt="Allure Energia Solar"
              width={130}
              height={42}
              className="brightness-0 invert h-9 sm:h-11 w-auto"
            />
          </Link>
          <p className="text-white/60 mb-5 max-w-xs text-xs sm:text-sm leading-relaxed">
            Energia inteligente. Engenharia que transforma. Soluções completas em energia solar para residências, empresas e propriedades rurais.
          </p>
          <div className="flex gap-2 sm:gap-3">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/60 hover:bg-secondary hover:text-white transition-all"
                aria-label={social.label}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12 pb-8 sm:pb-12 border-b border-white/10">
          {/* Footer Columns */}
          {footerColumns.map((column) => (
            <FooterColumn
              key={column.title}
              title={column.title}
              links={column.links}
            />
          ))}

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wider">Contato</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="https://wa.me/5517991604404"
                  className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  (17) 99160-4404
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:contato@allure.com.br"
                  className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  contato@allure.com.br
                </Link>
              </li>
              <li>
                <div className="flex items-start gap-2 text-white/60 text-xs sm:text-sm">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" />
                  <span>São Paulo, SP</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-white/40 text-xs sm:text-sm">
            © 2026 Allure. Todos os direitos reservados.
          </p>
          <Link
            href="#inicio"
            className="text-white/40 hover:text-white text-xs sm:text-sm transition-colors"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </footer>
  );
}
