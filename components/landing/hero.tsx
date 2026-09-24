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
          max-w-7xl
          grid-rows-[auto_auto]
          px-4
          sm:px-6
          lg:min-h-[calc(100svh-4rem)]
          lg:grid-cols-[0.9fr_1.1fr]
          lg:grid-rows-none
          lg:items-center
          lg:px-8
        "
      >
        {/* Imagem */}
        <div
          className="
            relative
            order-1
            flex
            h-[clamp(22rem,58svh,34rem)]
            items-end
            justify-center
            sm:h-[clamp(26rem,62svh,36rem)]
            lg:order-2
            lg:h-full
            lg:min-h-[calc(100svh-4rem)]
          "
        >
          {/* Elemento decorativo */}
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
            width={800}
            height={1000}
            priority
            sizes="
              (max-width: 639px) 90vw,
              (max-width: 1023px) 80vw,
              50vw
            "
            className="
              relative
              z-10
              h-full
              w-auto
              max-w-[90vw]
              object-contain
              object-bottom
              lg:max-h-155
            "
          />
        </div>

        {/* Conteúdo */}
        <div
          className="
            relative
            z-10
            order-2
            py-10
            sm:py-12
            lg:order-1
            lg:py-24
          "
        >
          <div className="max-w-xl">
            <span className="inline-block text-sm font-medium uppercase tracking-[0.18em] text-gold-accent">
              Advocacia especializada
            </span>

            <h1
              id="hero-title"
              className="
                mt-4
                max-w-2xl
                font-serif
                text-4xl
                font-bold
                leading-[1.08]
                tracking-tight
                text-bordeaux-primary
                sm:text-5xl
                lg:text-6xl
              "
            >
              Estratégia jurídica para proteger seus direitos.
            </h1>

            <p
              className="
                mt-6
                max-w-lg
                text-base
                leading-7
                text-neutral-dark/75
                sm:text-lg
                sm:leading-8
              "
            >
              Atendimento jurídico personalizado, com orientação clara e
              atuação estratégica em cada etapa do seu caso.
            </p>

            <div className="mt-8">
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