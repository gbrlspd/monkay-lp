export const SITE = {
  name: "Monkay",
  tagline: "Software que resolve.",
  description:
    "Sistemas personalizados, automações e IA para PMEs que querem crescer sem travar.",
  email: "contato@monkay.io",
  whatsapp: "",
  linkedin: "",
};

export const HERO = {
  badge: "Software House · Brasil",
  headline1: ["Software", "que", "resolve."],
  headline2: ["Do", "jeito", "que", "seu", "negócio", "funciona."],
  headlineHighlight: "resolve.",
  subheadline:
    "Sistemas personalizados, automações e IA para PMEs que querem crescer sem travar.",
  ctaPrimary: "Nossas Soluções",
  ctaSecondary: "Falar Conosco",
  trustLabel: "Construído com",
  trustStack: [
    { name: "Next.js", slug: "nextdotjs" },
    { name: ".NET", slug: "dotnet" },
    { name: "TypeScript", slug: "typescript" },
    { name: "PostgreSQL", slug: "postgresql" },
    { name: "Docker", slug: "docker" },
    { name: "Cloudflare", slug: "cloudflare" },
  ],
};

export const PROBLEM = {
  headline: ["Sua empresa cresceu.", "Seus processos, não."],
  body: "Planilhas que não conversam. Sistemas que não encaixam. Relatórios que dependem de alguém para rodar. A gente conhece esse problema — e resolve ele.",
};

export const SOLUTIONS = {
  label: "Soluções",
  title: "Nossas Soluções",
  cards: [
    {
      id: "systems",
      title: "Sistemas Personalizados",
      description:
        "ERPs, CRMs e sistemas de gestão desenvolvidos do zero para o seu processo — não o contrário. Relatórios customizados, fluxos de aprovação, integrações com fornecedores e automações internas. Sem licenças caras, sem funcionalidades que você nunca vai usar. Só o que o seu negócio precisa, funcionando do jeito que você trabalha.",
      audience: "Para Donos de Empresa",
      accent: "indigo" as const,
    },
    {
      id: "ai",
      title: "Automações & IA",
      description:
        "Processos manuais viram fluxos automáticos. Agentes que trabalham enquanto você dorme.",
      audience: "Para Quem Quer Escalar",
      accent: "violet" as const,
    },
    {
      id: "consulting",
      title: "Consultoria Técnica",
      description:
        "Arquitetura, stack, CI/CD, code review. Para equipes que precisam de uma segunda opinião experiente.",
      audience: "Para Times de Dev",
      accent: "cyan" as const,
    },
  ],
};

export const PROCESS = {
  label: "Como Funciona",
  title: "Do Problema à Solução",
  steps: [
    {
      number: "01",
      title: "Entendemos o Negócio",
      description:
        "Antes de escrever uma linha de código, a gente entende como você trabalha, onde trava e o que você precisa de verdade.",
    },
    {
      number: "02",
      title: "Desenhamos a Solução",
      description:
        "Arquitetura, tecnologia e fluxos definidos em conjunto. Sem surpresa no meio do caminho.",
    },
    {
      number: "03",
      title: "Desenvolvemos e Entregamos",
      description:
        "Ciclos curtos, homologação com você, deploy com CI/CD. Você acompanha tudo.",
    },
    {
      number: "04",
      title: "Ficamos Presentes",
      description:
        "Sistema entregue não é fim de contrato. É início de uma parceria.",
    },
  ],
};

export const STACK_CATEGORIES = [
  {
    label: "Frontend",
    items: [
      { name: "Next.js", slug: "nextdotjs" },
      { name: "React", slug: "react" },
      { name: "Angular", slug: "angular" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Fastify", slug: "fastify" },
      { name: ".NET 10", slug: "dotnet" },
      { name: "C#", slug: null },
      { name: "Better Auth", slug: null },
    ],
  },
  {
    label: "Dados",
    items: [
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "SQL Server", slug: null },
      { name: "Redis", slug: "redis" },
    ],
  },
  {
    label: "Infra & DevOps",
    items: [
      { name: "Docker", slug: "docker" },
      { name: "GitHub Actions", slug: "githubactions" },
      { name: "Cloudflare", slug: "cloudflare" },
      { name: "Vercel", slug: "vercel" },
      { name: "Azure DevOps", slug: null },
    ],
  },
  {
    label: "Qualidade",
    items: [
      { name: "Sentry", slug: "sentry" },
      { name: "BetterStack", slug: null },
      { name: "SonarQube", slug: null },
      { name: "xUnit", slug: null },
      { name: "Vitest", slug: "vitest" },
      { name: "Playwright", slug: null },
    ],
  },
  {
    label: "IA & Automação",
    items: [
      { name: "n8n", slug: "n8n" },
      { name: "Mastra", slug: null },
      { name: "Trigger.dev", slug: null },
      { name: "LLM APIs", slug: null },
      { name: "RAG", slug: null },
    ],
  },
  {
    label: "Integrações",
    items: [
      { name: "Evolution API", slug: "whatsapp" },
      { name: "Resend", slug: "resend" },
      { name: "OAuth / SSO", slug: "auth0" },
      { name: "APIs BR", slug: null },
    ],
  },
];

export const CONTACT = {
  label: "Contato",
  title: "Tem um Projeto?",
  subtitle: "A Gente Quer Ouvir.",
  body: "Conta pra gente o que você precisa. Sem formulário de 10 campos, sem demo automática, sem espera.",
  whatsappLabel: "ou chama no WhatsApp →",
  submitLabel: "Mandar Mensagem",
  successMessage: "Mensagem enviada. A gente entra em contato em breve.",
  fields: {
    name: { label: "Seu Nome", placeholder: "João Silva" },
    company: { label: "Empresa (opcional)", placeholder: "Empresa Ltda." },
    message: {
      label: "O Que Você Precisa",
      placeholder: "Conta um pouco sobre o projeto...",
    },
  },
};
