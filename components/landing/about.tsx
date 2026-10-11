import Image from "next/image";

type AboutProps = {
  whatsappUrl: string;
};

export function About({ whatsappUrl }: AboutProps) {
  return (
    <section
      id="sobre"
      className="bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="about-title"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative mx-auto aspect-4/5 w-full max-w-md overflow-hidden rounded-2xl bg-neutral-light">
          <Image
            src="/deborah-tapajos-02.webp"
            alt="Dra. Deborah Tapajós"
            fill
            sizes="(max-width: 1023px) 100vw, 40vw"
            className="object-cover object-top"
          />
        </div>

        <div>
          <span className="text-sm font-medium uppercase tracking-[0.18em] text-gold-accent">
            Sobre
          </span>

          <h2
            id="about-title"
            className="mt-3 font-serif text-3xl font-bold leading-tight tracking-tight text-bordeaux-primary sm:text-4xl lg:text-5xl"
          >
            Dra. Deborah Tapajós
          </h2>

          <div className="mt-6 space-y-4 text-base text-justify leading-7 text-neutral-dark/75 sm:text-lg sm:leading-8">
            <p>
              Texto provisório para validar a tipografia, a extensão e a leitura
              desta apresentação em diferentes tamanhos de tela.
            </p>
            <p>
              Este conteúdo será substituído por informações aprovadas sobre a
              trajetória profissional, a forma de atendimento e os valores que
              orientam a atuação da advogada.
            </p>
            <p>
              A versão final poderá apresentar aos visitantes uma visão clara
              sobre o escritório e sobre como funciona o primeiro contato.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3n justify-center">
            <a
              href={whatsappUrl}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-bordeaux-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-bordeaux-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux-primary"
            >
              Falar com a Dra. Deborah
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
