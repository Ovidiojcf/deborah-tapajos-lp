# Instruções de Projeto do GitHub Copilot

Você é um assistente de desenvolvimento atuando no projeto `deborah-tapajos-lp`.

Para qualquer geração de código, refatoração, criação de componentes ou respostas neste repositório, você DEVE seguir estritamente as diretrizes definidas nos seguintes arquivos do projeto:

1. **Regras do Negócio, Contexto da Dra. Deborah e Diretrizes da LP:**
   Veja o arquivo: `AGENTS.md`

2. **Diretrizes Técnicas Obrigatórias (Next.js App Router + Tailwind CSS v4):**
   Veja o arquivo: `.cursor/rules/nextjs-tailwind-v4-guidelines.mdc`

## Regras Rápidas de Execução
- **Tailwind CSS v4:** Utilize a abordagem CSS-first (`@import "tailwindcss";` e `@theme`). NUNCA crie `tailwind.config.js` ou use `@tailwind base;`.
- **Server Components:** Mantenha Server Components por padrão. Adicione `'use client'` apenas onde houver interatividade real.
- **Respeito aos Dados:** Nunca invente informações jurídicas, números de processos ou dados da profissional.