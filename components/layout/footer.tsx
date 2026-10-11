import { Copyright } from "lucide-react";

type SocialNetwork = "facebook" | "linkedin" | "instagram";

type SocialLink = {
  name: string;
  href: string;
  network: SocialNetwork;
};

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    network: "facebook",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    network: "linkedin",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    network: "instagram",
  },
] as const satisfies readonly SocialLink[];

type SocialMarkProps = {
  mark: SocialNetwork;
};


function SocialMark({ mark }: SocialMarkProps) {
  switch (mark) {
    case "facebook":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M13.4 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.2v3.2H10V21h3.4Z" />
        </svg>
      );

    case "linkedin":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M20.4 3H3.6A.6.6 0 0 0 3 3.6v16.8c0 .3.3.6.6.6h16.8a.6.6 0 0 0 .6-.6V3.6a.6.6 0 0 0-.6-.6ZM8.6 18H5.7V9.4h2.9V18ZM7.1 8.2a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4ZM18.3 18h-2.9v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2V18H9.5V9.4h2.8v1.2h.1a3.1 3.1 0 0 1 2.7-1.5c2.9 0 3.4 1.9 3.4 4.3V18Z" />
        </svg>
      );

    case "instagram":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          aria-hidden="true"
          focusable="false"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle
            cx="17.5"
            cy="6.5"
            r="1"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      );
  }
}


export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contato"
      className="bg-bordeaux-primary py-6"
      aria-label="Rodapé"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-4 text-neutral-light sm:flex-row sm:justify-between sm:gap-4 sm:px-6 lg:px-6">
        <a
          href="https://github.com/Ovidiojcf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-md font-semibold tracking-wide transition-colors hover:text-gold-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-accent"
          aria-label="Ovidiojcf DEV no GitHub"
        >
          Ovidiojcf DEV
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M12 .7a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.4.7-4.1-1.6-4.1-1.6-.5-1.4-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.4-5.5-6a4.7 4.7 0 0 1 1.2-3.2c-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2a4.7 4.7 0 0 1 1.2 3.2c0 4.6-2.8 5.7-5.5 6 .4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 .7Z"></path></svg>
        </a>

        <p className="flex items-center gap-1.5 text-center text-xs text-neutral-light/75 sm:text-sm">
          <Copyright className="size-3.5 shrink-0" aria-hidden="true" />
          <span>{year} Dra. Deborah Tapajós.</span>
        </p>

        <nav aria-label="Redes sociais">
          <ul className="flex items-center gap-2">
            {socialLinks.map(({ name, href, network }) => (
              <li key={network}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Acesse o perfil da Dra. Deborah Tapajós no ${name}`}
                  className="flex size-11 items-center justify-center rounded-full
            text-neutral-light/80 transition-colors
            hover:bg-white/10 hover:text-gold-accent
            focus-visible:outline-2 focus-visible:outline-offset-2
            focus-visible:outline-gold-accent"
                >
                  <span className="size-5">
                    <SocialMark mark={network} />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
