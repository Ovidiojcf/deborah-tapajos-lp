import Image from "next/image";
import {
  ArrowRight,
  FileCheck2,
  Scale,
  ShieldAlert,
  Stethoscope,
} from "lucide-react";

type PracticeArea = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  imagePath: string;
  badge: string;
  featured: boolean;
  gridSpan: string;
};

type ServicesProps = {
  whatsappUrl: string;
};

const practiceAreasData: PracticeArea[] = [
  {
    id: "direito-medico",
    title: "Direito Médico",
    subtitle: "Defesa e Consultoria na Saúde",
    description:
      "Defesa de profissionais da saúde em processos ético-disciplinares, suporte em erro médico e demandas contra planos de saúde.",
    icon: Stethoscope,
    imagePath: "/direito_medico.webp",
    badge: "Especialidade",
    featured: false,
    gridSpan: "lg:col-span-2 lg:row-span-2",
  },
  {
    id: "direito-civel",
    title: "Direito Cível",
    subtitle: "Patrimônio e Contratos",
    description:
      "Elaboração de contratos, ações indenizatórias, cobranças e resolução de conflitos patrimoniais ou de responsabilidade civil.",
    icon: Scale,
    imagePath: "/direito_civil_consultoria.webp",
    badge: "Atuação",
    featured: false,
    gridSpan: "lg:col-span-2 lg:row-span-2",
  },
  {
    id: "direito-criminal",
    title: "Direito Criminal",
    subtitle: "Defesa Técnica Estratégica",
    description:
      "Acompanhamento em inquéritos policiais, audiências de custódia e defesa em processos penais com rigor e sigilo.",
    icon: ShieldAlert,
    imagePath: "/direito_criminal.webp",
    badge: "Atuação",
    featured: true,
    gridSpan: "md:col-span-2",
  },
  {
    id: "direito-previdenciario",
    title: "Direito Previdenciário",
    subtitle: "Garantia de Benefícios",
    description:
      "Concessão e planejamento de aposentadorias, auxílios, BPC/LOAS e revisões administrativas ou judiciais junto ao INSS.",
    icon: FileCheck2,
    imagePath: "/direito_previdenciario_content.webp",
    badge: "Atuação",
    featured: true,
    gridSpan: "md:col-span-2",
  },
];

export function Services({ whatsappUrl }: ServicesProps) {
  return (
    <section
      id="servicos"
      className="bg-neutral-light py-20 sm:py-24 lg:py-28"
      aria-labelledby="services-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block text-sm font-medium uppercase tracking-[0.18em] text-gold-accent">
            Áreas de atuação
          </span>

          <h2
            id="services-title"
            className="mt-4 font-serif text-3xl font-bold leading-tight tracking-tight text-bordeaux-primary sm:text-4xl lg:text-5xl"
          >
            Atendimento jurídico para diferentes necessidades
          </h2>

          <p className="mt-5 text-base leading-7 text-neutral-dark/70 sm:text-lg sm:leading-8">
            Atuação personalizada e estratégica para orientar você com clareza
            em cada etapa da sua demanda jurídica.
          </p>
        </div>

        {/* Practice areas Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {practiceAreasData.map((area) => {
            const Icon = area.icon;

            return (
              <article
                key={area.id}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl min-h-90 ${area.gridSpan} ${
                  area.featured ? "bg-bordeaux-primary" : "bg-neutral-dark"
                }`}
              >
                {/* Background image */}
                <Image
                  src={area.imagePath}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Image overlay */}
                <div
                  className={`absolute inset-0 ${
                    area.featured
                      ? "bg-linear-to-t from-bordeaux-primary via-bordeaux-primary/80 to-bordeaux-primary/30"
                      : "bg-linear-to-t from-neutral-dark via-neutral-dark/80 to-neutral-dark/30"
                  }`}
                  aria-hidden="true"
                />

                {/* Card content */}
                <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-7 lg:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold-accent">
                      <Icon
                        className="size-5"
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </div>

                    <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-white/90 backdrop-blur-sm">
                      {area.badge}
                    </span>
                  </div>

                  <div className="mt-8 max-w-xl">
                    <p className="text-sm font-medium text-gold-accent">
                      {area.subtitle}
                    </p>

                    <h3 className="mt-2 font-serif text-2xl font-bold leading-tight text-white sm:text-3xl">
                      {area.title}
                    </h3>

                    <p className="mt-3 max-w-lg text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
                      {area.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Conversion CTA */}
        <div className="relative mt-12 overflow-hidden rounded-2xl bg-bordeaux-primary px-6 py-10 sm:px-10 sm:py-12 lg:mt-16 lg:px-14">
          {/* Decorative element */}
          <div
            className="pointer-events-none absolute -right-20 -top-24 size-64 rounded-full border border-gold-accent/20"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="text-sm font-medium uppercase tracking-[0.18em] text-gold-accent">
                Precisa de orientação?
              </span>

              <h3 className="mt-3 font-serif text-2xl font-bold leading-tight text-white sm:text-3xl">
                Vamos entender o seu caso.
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
                Conte brevemente o que você precisa e descubra como a Dra.
                Deborah pode orientar sua demanda.
              </p>
            </div>

            <a
              href={whatsappUrl}
              className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-gold-accent px-6 text-sm font-semibold text-bordeaux-primary transition-all duration-200 hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-accent sm:px-7"
              aria-label="Falar com a Dra. Deborah pelo WhatsApp"
            >
              Falar sobre meu caso
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
