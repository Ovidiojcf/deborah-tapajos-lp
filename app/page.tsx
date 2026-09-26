import { Header } from "@/components/layout/header";
import { Hero } from "@/components/landing/hero";
import { Services } from "@/components/landing/services";

/* URL temporária para testes do CTA */
const WHATSAPP_URL =
  "https://wa.me/5593999999999?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header whatsappUrl={WHATSAPP_URL} />
      <Hero whatsappUrl={WHATSAPP_URL}></Hero>
      <Services whatsappUrl={WHATSAPP_URL} />
      <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
        <section className="text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-gold-accent">
            Direito e Advocacia
          </span>

          <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight text-bordeaux-primary sm:text-5xl">
            Dra. Deborah Tapajós
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-neutral-dark/70 sm:text-lg">
            Advocacia especializada com atendimento personalizado e compromisso
            com cada caso.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#areas-de-atuacao"
              className="rounded-full bg-bordeaux-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-bordeaux-hover"
            >
              Áreas de atuação
            </a>

            <a
              href="#sobre"
              className="rounded-full border border-bordeaux-primary/20 px-5 py-2.5 text-sm font-semibold text-bordeaux-primary transition-colors hover:bg-bordeaux-primary/5"
            >
              Conheça o escritório
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
