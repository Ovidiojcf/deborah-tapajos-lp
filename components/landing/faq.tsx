"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  id: string;
  question: string;
  answer: string;
  category: string;
};

const faqData: FAQItem[] = [
  {
    id: "quando-procurar-advogado",
    category: "Orientação jurídica",
    question: "Quando preciso procurar um advogado para resolver um problema?",
    answer:
      "É recomendável buscar orientação jurídica quando você enfrenta uma situação que envolve direitos, obrigações, contratos, indenizações, processos, benefícios previdenciários ou qualquer conflito que possa gerar consequências legais. Uma análise profissional ajuda a compreender o problema, identificar os caminhos jurídicos possíveis e definir os próximos passos de acordo com as particularidades do caso.",
  },
  {
    id: "como-funciona-consulta",
    category: "Atendimento",
    question: "Como funciona uma consulta jurídica?",
    answer:
      "A consulta começa com a compreensão dos fatos e das circunstâncias do seu caso. Quando necessário, são analisados documentos e informações relevantes para identificar os aspectos jurídicos envolvidos. A partir dessa análise, são apresentadas as possibilidades de atuação e as orientações sobre os próximos passos.",
  },
  {
    id: "erro-medico",
    category: "Direito Médico",
    question:
      "O que fazer em caso de suspeita de erro médico ou problema em um atendimento de saúde?",
    answer:
      "Em situações que envolvem suspeita de erro médico, falha na prestação de um serviço de saúde ou outros problemas relacionados ao atendimento, é importante reunir documentos como prontuários, exames, receitas, laudos e comprovantes de atendimento. A análise jurídica do caso permite verificar os fatos, os documentos disponíveis e quais medidas podem ser juridicamente cabíveis.",
  },
  {
    id: "plano-saude",
    category: "Direito Médico",
    question:
      "O que posso fazer quando meu plano de saúde nega um procedimento ou tratamento?",
    answer:
      "Quando um plano de saúde nega um procedimento, tratamento ou cobertura, é importante verificar a justificativa apresentada pela operadora e reunir documentos relacionados à solicitação, como pedido médico, negativa e contrato. A partir dessas informações, é possível analisar a situação e verificar quais medidas administrativas ou judiciais podem ser aplicáveis ao caso.",
  },
  {
    id: "indenizacao",
    category: "Direito Civil",
    question: "Como saber se tenho direito a uma indenização?",
    answer:
      "O direito a uma indenização depende das circunstâncias de cada situação. É necessário analisar o que aconteceu, quais danos foram causados, a existência de documentos e a relação entre o fato e o prejuízo alegado. Uma avaliação jurídica pode ajudar a identificar se existem fundamentos para uma eventual ação de responsabilidade civil.",
  },
  {
    id: "intimacao-processo-criminal",
    category: "Direito Criminal",
    question:
      "Recebi uma intimação ou estou sendo investigado. O que devo fazer?",
    answer:
      "Ao receber uma intimação ou tomar conhecimento de uma investigação, é importante compreender exatamente o motivo do procedimento e evitar tomar decisões sem orientação adequada. A atuação jurídica pode envolver a análise dos documentos, acompanhamento do procedimento e definição da estratégia de defesa de acordo com as circunstâncias do caso.",
  },
  {
    id: "aposentadoria-inss",
    category: "Direito Previdenciário",
    question: "Como saber se já posso me aposentar pelo INSS?",
    answer:
      "A possibilidade de aposentadoria depende do histórico contributivo, da idade, do tempo de contribuição e das regras previdenciárias aplicáveis ao caso. A análise dos dados previdenciários permite verificar quais regras podem ser utilizadas, quais requisitos precisam ser cumpridos e quais cuidados devem ser considerados antes de solicitar o benefício.",
  },
  {
    id: "beneficio-inss-negado",
    category: "Direito Previdenciário",
    question: "O que fazer quando meu benefício do INSS é negado?",
    answer:
      "Quando um benefício previdenciário é negado, é importante verificar o motivo apresentado pelo INSS e analisar os documentos utilizados no pedido. Dependendo da situação, podem existir medidas administrativas ou judiciais para questionar a decisão. A orientação jurídica permite avaliar o caso concreto e identificar os caminhos disponíveis.",
  },
];

export function Faq() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenItem((current) => (current === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="bg-white py-20 sm:py-24 lg:py-28"
      aria-labelledby="faq-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block text-sm font-medium uppercase tracking-[0.18em] text-gold-accent">
            Perguntas frequentes
          </span>

          <h2
            id="faq-title"
            className="mt-4 font-serif text-3xl font-bold leading-tight tracking-tight text-bordeaux-primary sm:text-4xl lg:text-5xl"
          >
            Dúvidas sobre orientação e atendimento jurídico
          </h2>

          <p className="mt-5 text-base leading-7 text-neutral-dark/70 sm:text-lg sm:leading-8">
            Encontre respostas para algumas das principais dúvidas sobre
            atendimento jurídico, áreas de atuação e situações que podem exigir
            orientação profissional.
          </p>
        </div>

        {/* FAQ list */}
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="divide-y divide-neutral-dark/10 border-y border-neutral-dark/10">
            {faqData.map((item) => {
              const isOpen = openItem === item.id;

              return (
                <div key={item.id} className="group">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bordeaux-primary"
                    aria-expanded={isOpen}
                    aria-controls={`${item.id}-content`}
                    onClick={() => handleToggle(item.id)}
                  >
                    <span className="flex flex-col gap-2">
                      <span className="text-xs font-medium uppercase tracking-[0.12em] text-gold-accent">
                        {item.category}
                      </span>

                      <span className="font-serif text-lg font-semibold leading-7 text-bordeaux-primary transition-colors duration-200 group-hover:text-bordeaux-hover sm:text-xl">
                        {item.question}
                      </span>
                    </span>

                    <span
                      className={`flex size-10 shrink-0 items-center justify-center rounded-full border border-bordeaux-primary/15 text-bordeaux-primary transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 bg-bordeaux-primary text-white"
                          : "bg-transparent"
                      }`}
                      aria-hidden="true"
                    >
                      <ChevronDown className="size-5" strokeWidth={1.7} />
                    </span>
                  </button>

                  <div
                    id={`${item.id}-content`}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-3xl pb-6 pr-16 text-sm leading-7 text-neutral-dark/70 sm:text-base sm:leading-8">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
