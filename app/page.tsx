import { Header } from "@/components/layout/header";
import { Hero } from "@/components/landing/hero";
import { Services } from "@/components/landing/services";
import { About } from "@/components/landing/about";
import { Faq } from "@/components/landing/faq";
import { Footer } from "@/components/layout/footer";

/* URL temporária para testes do CTA */
const WHATSAPP_URL = "https://wa.me/559391186983?text=Ol%C3%A1%2C%20Dra.%20Deborah%21%20Vi%20seu%20site%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20o%20meu%20caso.%20Como%20podemos%20agendar%20um%20atendimento%3F";
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
