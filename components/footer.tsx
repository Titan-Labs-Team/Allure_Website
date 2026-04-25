import Link from "next/link";
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
  { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
  { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
  { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
  { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" },
];

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className="text-white/60 hover:text-white transition-colors text-sm"
    >
      {children}
    </Link>
  );
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">{title}</h3>
      <ul className="space-y-3">
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
    <footer className="bg-primary py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-16">
          {/* Logo & Description */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="#inicio" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-bold text-white">Allure</span>
            </Link>
            <p className="text-white/60 mb-6 max-w-xs text-sm leading-relaxed">
              Energia inteligente. Engenharia que transforma. Soluções completas em energia solar para residências, empresas e propriedades rurais.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/60 hover:bg-secondary hover:text-white transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

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
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contato</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="https://wa.me/5511999999999" 
                  className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  (11) 99999-9999
                </Link>
              </li>
              <li>
                <Link 
                  href="mailto:contato@allure.com.br"
                  className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  contato@allure.com.br
                </Link>
              </li>
              <li>
                <div className="flex items-start gap-2 text-white/60 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>São Paulo, SP</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2026 Allure. Todos os direitos reservados.
          </p>
          <Link 
            href="#inicio"
            className="text-white/40 hover:text-white text-sm transition-colors"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </footer>
  );
}
