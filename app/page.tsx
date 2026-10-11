import { Header } from "@/components/layout/header";
import { Hero } from "@/components/landing/hero";
import { Services } from "@/components/landing/services";
import { About } from "@/components/landing/about";
import { Faq } from "@/components/landing/faq";
import { Footer } from "@/components/layout/footer";

/* URL temporária para testes do CTA */
const WHATSAPP_URL =
  "https://wa.me/5593999999999?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header whatsappUrl={WHATSAPP_URL} />
      <Hero whatsappUrl={WHATSAPP_URL}></Hero>
      <Services  whatsappUrl={WHATSAPP_URL} />
      <About whatsappUrl={WHATSAPP_URL} />
      <Faq/>
      <Footer />
    </div>
  );
}
