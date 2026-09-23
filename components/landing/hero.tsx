import Image from "next/image";

type HeroProps = {
  whatsappUrl: string;
};

export function Hero({ whatsappUrl }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-neutral-light"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        {/* Conteúdo */}
        <div className="relative z-10 py-16 sm:py-20 lg:py-24">
          <div className="max-w-xl">
            <span className="inline-block text-sm font-medium uppercase tracking-[0.18em] text-gold-accent">
              Advocacia especializada
            </span>

            <h1
              id="hero-title"
              className="mt-4 max-w-2xl font-serif text-4xl font-bold leading-[1.08] tracking-tight text-bordeaux-primary sm:text-5xl lg:text-6xl"
            >
              Estratégia jurídica para proteger seus direitos.
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-neutral-dark/75 sm:text-lg sm:leading-8">
              Atendimento jurídico personalizado, com orientação clara e
              atuação estratégica em cada etapa do seu caso.
            </p>

            <div className="mt-8">
              <a
                href={whatsappUrl}
                className="inline-flex h-11 items-center justify-center rounded-full bg-bordeaux-primary px-6 text-sm font-semibold text-white transition-colors hover:bg-bordeaux-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux-primary"
                aria-label="Falar com a Dra. Deborah no WhatsApp"
              >
                Falar com a Dra. Deborah
              </a>
            </div>
          </div>
        </div>

        {/* Imagem */}
        <div className="relative flex min-h-[460px] items-end justify-center self-end sm:min-h-[560px] lg:min-h-[calc(100svh-4rem)]">
          {/* Elemento decorativo */}
          <div
            className="pointer-events-none absolute right-0 top-1/2 hidden size-[min(34rem,70vw)] -translate-y-1/2 rounded-full border border-gold-accent/20 lg:block"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute bottom-0 right-[8%] hidden h-[80%] w-px bg-gold-accent/30 lg:block"
            aria-hidden="true"
          />

          <Image
            src="/deborah-tapajos-02.webp"
            alt="Dra. Deborah Tapajós"
            width={800}
            height={1000}
            priority
            className="relative z-10 h-auto max-h-[620px] w-auto max-w-full object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}