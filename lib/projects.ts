export interface Project {
	id: string;
	title: string;
	shortDescription: string;
	fullDescription: string;
	logoUrl?: string;
	emoji?: string;
	repoUrl: string;
	techStack: string[];
	theme: {
		primary: string;
		secondary: string;
		background: string;
	};
}

export const projects: Project[] = [
	{
		id: "phantom",
		title: "Phantom",
		shortDescription: "Um app de desktop minimalista que construí para explorar Electron e fluxos de trabalho mais focados.",
		fullDescription:
			"Construí o Phantom para entender como aplicações desktop modernas funcionam com Electron. A proposta era manter a interface mínima e rápida, sem abrir mão das ferramentas essenciais. O principal desafio foi o trade-off entre processo main e renderer — optei por manter o renderer sem acesso direto ao Node e expor só o necessário via preload. Uma decisão que afeta tudo, do desempenho à segurança.",
		emoji: "👻",
		repoUrl: "https://github.com/victorradael/phantom",
		techStack: ["Electron", "React", "TypeScript", "TailwindCSS"],
		theme: {
			primary: "#ffffff",
			secondary: "#888888",
			background: "#000000",
		},
	},
	{
		id: "condoguard",
		title: "CondoGuard",
		shortDescription: "Uma aplicação que estou construindo para entender melhor como as despesas de um condomínio se comportam ao longo do tempo.",
		fullDescription:
			"Comecei o CondoGuard para entender como as despesas de um condomínio se comportam ao longo do tempo e antecipar problemas antes que virem surpresa. O backend é em Go com PostgreSQL, e a interface em Next.js. Ainda está em desenvolvimento.",
		logoUrl: "/condoguard-icon.svg",
		repoUrl: "https://github.com/victorradael/condoguard",
		techStack: [
			"Go",
			"PostgreSQL",
			"Redis",
			"Next.js",
			"React",
			"Tailwind CSS",
			"Expo",
			"React Native",
			"TypeScript",
		],
		theme: {
			primary: "#3b82f6",
			secondary: "#64748b",
			background: "#0f172a",
		}
	},
	{
		id: "spacekid",
		title: "SpaceKid",
		shortDescription: "Uma ferramenta que criei para parar de trabalhar com prompts soltos e ter um fluxo spec-driven de verdade com agentes de IA.",
		fullDescription:
			"Cansei de prompts soltos com agentes de IA. O SpaceKid cria, com um único comando, um miniverse no seu diretório: conhecimento, arquivos produzidos e um fluxo spec-driven num só lugar. Decidi que o fluxo seria baseado em specs porque é isso que deixa o trabalho do agente — e o meu — previsível. Por isso funciona em projetos de qualquer linguagem.",
		logoUrl: "/spacekid-icon.png",
		repoUrl: "https://github.com/victorradael/spacekid",
		techStack: ["Python", "CLI", "Spec-Driven Development", "AI Agents"],
		theme: {
			primary: "#d946ef",
			secondary: "#64748b",
			background: "#ffffff",
		}
	},
	{
		id: "core-keeper-armory",
		title: "Core Keeper Armory",
		shortDescription: "Um companheiro de desktop que construí para acabar com a bagunça de rastrear builds e equipamentos no Core Keeper.",
		fullDescription:
			"Joguei Core Keeper com amigos e a gestão de builds virou planilha — funciona, mas não escala. Construí o Armory como um app desktop multiplataforma para centralizar isso: gerenciar múltiplos conjuntos de equipamentos, rastrear aquisições e coordenar progressão em sessões cooperativas. Escolhi Fastify no backend local porque queria experimentar um servidor leve dentro do Electron sem abrir mão de rotas tipadas.",
		logoUrl: "/core-keeper-armory-icon.png",
		repoUrl: "https://github.com/victorradael/core-keeper-armory",
		techStack: ["Electron", "React", "TypeScript", "Fastify", "Docker"],
		theme: {
			primary: "#eab308",
			secondary: "#78716c",
			background: "#0c0a09",
		},
	},
];
