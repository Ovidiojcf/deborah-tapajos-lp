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
      <div
        className="
          mx-auto
          grid
          min-h-175
          max-w-7xl
          lg:min-h-[calc(100svh-4rem)]
          lg:grid-cols-[0.9fr_1.1fr]
          lg:items-center
          lg:px-8
        "
      >
        {/*
            IMAGEM
            Mobile: ocupa todo o Hero e serve como background visual.
            Desktop: retorna ao fluxo normal em uma coluna própria.
            */}
        <div
          className="
            relative
            col-start-1
            row-start-1
            h-full
            overflow-hidden
            lg:col-start-2
            lg:min-h-[calc(100svh-4rem)]
            lg:overflow-visible
          "
        >
          {/* Decoração desktop */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              hidden
              size-[min(34rem,70vw)]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-gold-accent/20
              lg:block
            "
            aria-hidden="true"
          />

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              right-[8%]
              hidden
              h-[80%]
              w-px
              bg-gold-accent/30
              lg:block
            "
            aria-hidden="true"
          />

          <Image
            src="/deborah-tapajos-02.webp"
            alt="Dra. Deborah Tapajós"
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="
            object-cover
            object-top
            lg:object-contain
            lg:object-bottom
          "
          />

          {/* Gradient somente no mobile */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-linear-to-b
              from-transparent
              via-transparent
              to-neutral-950/95
              lg:hidden
            "
            aria-hidden="true"
          />
        </div>

        {/* ============================================================
            CONTEÚDO
            Mobile: sobreposto à imagem.
            Desktop: retorna para a coluna esquerda.
            ============================================================ */}
        <div
          className="
            relative
            z-10
            col-start-1
            row-start-1
            flex
            h-full
            items-end
            px-4
            pb-10
            pt-32
            sm:px-6
            sm:pb-14
            lg:col-start-1
            lg:h-auto
            lg:items-center
            lg:px-0
            lg:py-24
          "
        >
          <div className="max-w-xl">
            <span
              className="
                inline-block
                text-xs
                font-medium
                uppercase
                tracking-[0.18em]
                text-gold-accent
                sm:text-sm
              "
            >
              Advocacia especializada
            </span>

            <h1
              id="hero-title"
              className="
                mt-3
                max-w-2xl
                font-serif
                text-4xl
                font-bold
                leading-[1.08]
                tracking-tight
                text-white
                sm:text-5xl
                lg:mt-4
                lg:text-6xl
                lg:text-bordeaux-primary
              "
            >
              Estratégia jurídica para proteger seus direitos.
            </h1>

            <p
              className="
                mt-4
                max-w-lg
                text-sm
                leading-6
                text-white/80
                sm:text-base
                sm:leading-7
                lg:mt-6
                lg:text-lg
                lg:leading-8
                lg:text-neutral-dark/75
              "
            >
              Atendimento jurídico personalizado, com orientação clara e atuação
              estratégica em cada etapa do seu caso.
            </p>

            <div className="mt-6 lg:mt-8">
              <a
                href={whatsappUrl}
                className="
                  inline-flex
                  h-11
                  items-center
                  justify-center
                  rounded-full
                  bg-bordeaux-primary
                  px-6
                  text-sm
                  font-semibold
                  text-white
                  transition-colors
                  hover:bg-bordeaux-hover
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-bordeaux-primary
                "
                aria-label="Falar com a Dra. Deborah no WhatsApp"
              >
                Falar com a Dra. Deborah
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
