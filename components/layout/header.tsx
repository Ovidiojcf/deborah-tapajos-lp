"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

type HeaderProps = {
  /** URL do WhatsApp da advogada */
  whatsappUrl: string;
};

const navigationItems = [
  { label: "ÁREAS DE ATUAÇÃO", href: "#areas-de-atuacao" },
  { label: "SOBRE", href: "#sobre" },
  { label: "FAQ", href: "#faq" },
  { label: "CONTATO", href: "#contato" },
];

function WhatsAppIcon() {
  return (
    <svg
      className="size-4 shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.002 5.45-4.437 9.884-9.887 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.89c0 2.096.547 4.142 1.588 5.945L.057 24l6.304-1.654a11.88 11.88 0 0 0 5.684 1.448h.005c6.554 0 11.89-5.335 11.893-11.89a11.82 11.82 0 0 0-3.479-8.416" />
    </svg>
  );
}

export function Header({ whatsappUrl }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCloseMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-sm"
      aria-label="Header principal"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-6">
          {/* Marca */}
          <a
            href="#inicio"
            className="flex shrink-0 items-baseline gap-1.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bordeaux-primary"
            aria-label="Deborah Tapajós - início"
          >
            <span className="font-serif text-xl font-bold tracking-tight text-bordeaux-primary sm:text-2xl">
              Deborah
            </span>
            <span className="font-serif text-xl font-bold tracking-tight text-gold-accent sm:text-2xl">
              Tapajós
            </span>
            <span className="ml-1 hidden text-xl font-bold uppercase tracking-wider text-neutral-dark/60 sm:inline">
              Advogada
            </span>
          </a>
          {/* Navegação desktop */}
          <nav
            className="hidden items-center md:flex"
            aria-label="Navegação principal"
          >
            <ul className="flex items-center gap-7 lg:gap-8">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm font-medium text-neutral-dark/75 transition-colors hover:text-bordeaux-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bordeaux-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* CTA + menu mobile */}
          <div className="flex items-center gap-2">
            <a
              href={whatsappUrl}
              className="hidden h-10 items-center gap-2 rounded-full bg-bordeaux-primary px-5 text-sm font-semibold text-white transition-colors hover:bg-bordeaux-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux-primary sm:flex"
              aria-label="Falar com a Dra. Deborah no WhatsApp"
            >
              <WhatsAppIcon />
              <span>Falar com a Dra. Deborah</span>
            </a>

            <button
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="flex size-10 items-center justify-center rounded-full text-neutral-dark transition-colors hover:bg-neutral-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux-primary md:hidden"
            >
              {mobileMenuOpen ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-black/5 bg-white md:hidden"
        >
          <nav
            className="mx-auto max-w-7xl px-4 py-6 sm:px-6"
            aria-label="Navegação mobile"
          >
            <ul className="flex flex-col">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={handleCloseMenu}
                    className="block border-b border-black/5 py-4 text-base font-medium text-neutral-dark transition-colors hover:text-bordeaux-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={whatsappUrl}
              onClick={handleCloseMenu}
              className="mt-6 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-bordeaux-primary px-6 text-sm font-semibold text-white transition-colors hover:bg-bordeaux-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux-primary"
              aria-label="Falar com a Dra. Deborah no WhatsApp"
            >
              <WhatsAppIcon />
              Falar com a Dra. Deborah
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
