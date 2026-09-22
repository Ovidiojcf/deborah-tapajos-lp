# AGENTS.md

## 1. Contexto do Projeto

### Projeto
`deborah-tapajos-lp`

### Objetivo
Landing Page institucional e de alta conversão para a advogada Dra. Deborah Carolina Batista Tapajós, com atuação profissional em Santarém, Pará.

### Áreas de atuação
- Direito Médico
- Direito Cível
- Direito Criminal
- Direito Previdenciário

### Objetivo principal da interface
A página deve transmitir:
- autoridade profissional;
- credibilidade;
- segurança;
- clareza;
- profissionalismo;
- facilidade de contato.

A conversão principal deve ser direcionada para o contato com a advogada, especialmente por WhatsApp.

---

## 2. Stack Técnica

- Framework: Next.js
- Arquitetura: App Router
- Linguagem: TypeScript
- TypeScript: Strict Mode
- Estilização: Tailwind CSS
- Ícones: Lucide React

### Princípios técnicos

Priorizar:
- Server Components por padrão;
- Client Components somente quando houver necessidade real de interatividade;
- componentes reutilizáveis;
- HTML semântico;
- acessibilidade;
- responsividade;
- performance;
- SEO;
- código simples e previsível.

Evitar:
- bibliotecas desnecessárias;
- abstrações prematuras;
- duplicação de componentes;
- JavaScript no cliente sem necessidade;
- soluções complexas para problemas simples.

---

## 3. Arquitetura

Utilizar a estrutura do App Router do Next.js.

Organizar o projeto de forma que:

- `app/` seja responsável pelas rotas e estrutura das páginas;
- componentes reutilizáveis fiquem separados da composição específica da página;
- elementos puramente visuais sejam preferencialmente componentes simples;
- lógica de negócio não seja misturada diretamente com componentes de apresentação.

A estrutura deve permanecer simples enquanto o projeto for pequeno.

Não criar pastas ou abstrações apenas para seguir uma arquitetura genérica.

---

## 4. Componentização

Criar componentes quando houver:

- reutilização;
- responsabilidade visual claramente definida;
- complexidade suficiente para justificar separação;
- necessidade de manter a página principal legível.

Exemplos de possíveis componentes:

- Header
- Hero
- PracticeAreas
- About
- Testimonials
- FAQ
- CTA
- Footer

Não transformar cada pequena parte da interface em um componente sem necessidade.

### Regra importante

Antes de criar um novo componente, verificar se:

1. ele será reutilizado;
2. possui uma responsabilidade clara;
3. sua separação melhora a manutenção;
4. não está apenas adicionando indireção ao código.

---

## 6. Responsividade

A interface deve ser desenvolvida com abordagem mobile-first.

Priorizar a experiência em:

1. Mobile
2. Tablet
3. Desktop

Não considerar o layout desktop como referência principal para posteriormente "encaixar" o mobile.

Todos os componentes devem ser avaliados em diferentes larguras de viewport.

---

## 7. UI e Identidade Visual

A identidade visual deve comunicar:

- advocacia;
- sofisticação;
- confiança;
- profissionalismo;
- autoridade.

Evitar visual excessivamente genérico de templates de advocacia.

Evitar:
- excesso de elementos decorativos;
- gradientes exagerados;
- animações desnecessárias;
- sombras excessivas;
- excesso de cores;
- componentes visualmente chamativos que prejudiquem a credibilidade.

A interface deve priorizar conteúdo, hierarquia visual e conversão.

---

## 8. Imagens e Assets

Antes de adicionar uma imagem ou asset externo:

- verificar se já existe um asset adequado no projeto;
- reutilizar assets existentes quando possível;
- evitar imagens meramente decorativas sem função;
- utilizar `next/image` para imagens rasterizadas;
- definir `alt` adequado para imagens informativas.

Não substituir imagens reais da profissional por imagens genéricas de banco sem necessidade.

---

## 9. Ícones

Utilizar Lucide React para ícones.

Não utilizar emojis como substitutos de ícones da interface.

Não adicionar outra biblioteca de ícones sem necessidade explícita.

Os ícones devem complementar a informação e não competir visualmente com o conteúdo.

---

## 10. Conteúdo

O conteúdo da página deve ser tratado como conteúdo profissional.

Não inventar:

- informações profissionais;
- números de processos;
- quantidade de clientes;
- resultados jurídicos;
- depoimentos;
- certificações;
- especializações;
- prêmios;
- garantias de resultado;
- informações de contato.

Quando uma informação não estiver disponível, sinalizar a necessidade de confirmação em vez de inventá-la.

### Comunicação

Evitar promessas de resultado jurídico.

Evitar linguagem sensacionalista.

Priorizar comunicação clara, profissional e objetiva.

---

## 11. Conversão

A conversão principal da landing page é o contato com a advogada.

Os CTAs devem possuir uma hierarquia clara.

Exemplos:

- Solicitar atendimento
- Falar com a Dra. Deborah
- Agendar atendimento
- Entrar em contato

Não criar múltiplos CTAs concorrentes com objetivos diferentes sem necessidade.

Quando um CTA direcionar para WhatsApp, utilizar uma URL corretamente estruturada e permitir mensagem pré-preenchida quando apropriado.

---

## 12. SEO

A página deve possuir:

- `title` adequado;
- `description` adequada;
- headings semanticamente organizados;
- apenas um `h1` principal;
- estrutura de headings coerente;
- URLs apropriadas;
- `alt` em imagens relevantes;
- metadados configurados pelo Next.js.

O conteúdo deve considerar buscas relacionadas à atuação profissional e localização, sem fazer keyword stuffing.

---

## 13. Performance

Priorizar performance desde o desenvolvimento.

Preferir:

- Server Components;
- carregamento otimizado de imagens;
- fontes otimizadas;
- JavaScript mínimo no cliente;
- componentes leves;
- carregamento sob demanda quando necessário.

Não adicionar dependências apenas para resolver problemas que podem ser resolvidos com recursos nativos do Next.js, React ou CSS.

---

## 14. Acessibilidade

A interface deve seguir boas práticas de acessibilidade.

Garantir:

- HTML semântico;
- contraste adequado;
- navegação por teclado;
- estados de foco;
- `alt` em imagens relevantes;
- labels em elementos de formulário;
- botões semanticamente corretos;
- links semanticamente corretos.

Não utilizar elementos `div` ou `span` como substitutos de botões ou links quando existir um elemento HTML apropriado.

---

## 15. Formulários e Interações

Formulários devem possuir:

- labels claros;
- validação;
- mensagens de erro compreensíveis;
- estados de loading;
- feedback de sucesso ou falha.

Não implementar lógica de formulário complexa se o fluxo final for apenas direcionar o usuário para WhatsApp ou outro canal externo.

---

## 16. Dependências

Antes de instalar uma nova dependência:

1. verificar se a funcionalidade já pode ser implementada com recursos existentes;
2. verificar se o Next.js, React ou Tailwind já oferecem solução adequada;
3. avaliar o impacto da dependência no bundle;
4. considerar manutenção e necessidade futura.

Evitar dependências que resolvem apenas uma pequena necessidade visual.

---

## 17. Código

Código deve ser:

- simples;
- legível;
- tipado;
- previsível;
- consistente com o restante do projeto.

Evitar comentários óbvios.

Comentários devem explicar decisões ou comportamentos que não sejam evidentes pelo código.

Não utilizar `any` sem justificativa.

Não desabilitar regras do TypeScript ou ESLint apenas para contornar problemas.

---

## 18. Antes de Alterar o Projeto

Antes de implementar uma mudança:

1. verificar a estrutura existente;
2. procurar componentes ou estilos que já resolvam o problema;
3. entender como a funcionalidade atual está organizada;
4. reutilizar padrões existentes;
5. alterar somente o necessário.

Não reestruturar partes não relacionadas ao objetivo da tarefa.

---

## 19. Antes de Finalizar uma Implementação

Verificar:

- TypeScript sem erros;
- lint sem erros;
- build funcionando;
- responsividade;
- acessibilidade básica;
- SEO;
- imagens e assets;
- links e CTAs;
- estados de interação;
- ausência de conteúdo inventado.

Sempre que possível, validar visualmente a interface em mobile e desktop.

---

## 20. Regra Geral para Agentes de IA

Ao trabalhar neste projeto:

> Preserve a simplicidade do código, respeite a arquitetura existente e faça a menor alteração necessária para atingir o objetivo solicitado.

Não introduza novas tecnologias, bibliotecas, abstrações ou padrões arquiteturais sem necessidade.

Quando houver mais de uma solução possível, prefira a solução mais simples que mantenha qualidade, performance, acessibilidade e manutenibilidade.

---

## 21. Diretrizes Técnicas de Frontend (Tailwind v4 & Next.js)

Para a implementação de componentes, estilos e sintaxe do Tailwind CSS v4, siga rigorosamente os padrões definidos no arquivo:
./.cursor/rules/nextjs-tailwind-v4-guidelines.mdc