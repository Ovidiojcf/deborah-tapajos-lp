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
      <div className="mx-auto grid min-h-120 max-w-7xl lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <div className="relative col-start-1 row-start-1 h-full overflow-hidden lg:col-start-2 lg:min-h-[calc(100svh-4rem)] lg:overflow-visible">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 hidden size-[min(34rem,70vw)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-accent/20 lg:block"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute bottom-0 right-[8%] hidden h-[80%] w-px bg-gold-accent/30 lg:block"
            aria-hidden="true"
          />

          <Image
            src="/deborah-tapajos-02.webp"
            alt="Dra. Deborah Tapajós especialista em Direito Médico, Cível, Criminal e Previdenciário em Santarém, Pará"
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover object-top lg:object-contain lg:object-bottom"
          />

          <div
            className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-transparent to-neutral-950/95 lg:hidden"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 col-start-1 row-start-1 flex h-full items-end px-4 pb-10 pt-32 sm:px-6 sm:pb-14 lg:col-start-1 lg:h-auto lg:items-center lg:px-0 lg:py-24">
          <div className="max-w-xl">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.18em] text-gold-accent sm:text-sm">
              Advocacia especializada
            </span>

            <h1
              id="hero-title"
              className="mt-3 max-w-2xl font-serif text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:mt-4 lg:text-6xl lg:text-bordeaux-primary"
            >
              Estratégia jurídica para proteger seus direitos.
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-6 text-white/80 sm:text-base sm:leading-7 lg:mt-6 lg:text-lg lg:leading-8 lg:text-neutral-dark/75">
              Atendimento jurídico personalizado, com orientação clara e atuação
              estratégica em cada etapa do seu caso.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 lg:mt-8">
              <a
                href={whatsappUrl}
                className="inline-flex h-11 items-center justify-center rounded-full bg-bordeaux-primary px-6 text-sm font-semibold text-white transition-all duration-200 hover:bg-bordeaux-hover hover:shadow-[0_16px_32px_rgba(122,28,40,0.18)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux-primary"
                aria-label="Falar com a Dra. Deborah no WhatsApp"
              >
                Falar com a Dra. Deborah
              </a>
              <a
                href="#areas-de-atuacao"
                className="inline-flex h-11 items-center justify-center rounded-full border border-bordeaux-primary/20 bg-white/60 px-5 text-sm font-semibold text-bordeaux-primary transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux-primary"
              >
                Ver áreas de atuação
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
