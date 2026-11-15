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
			"Construí o Phantom para entender como aplicações desktop modernas funcionam com Electron. A proposta era manter a interface mínima e rápida, sem abrir mão das ferramentas essenciais. O principal aprendizado foi navegar o trade-off entre processo main e renderer do Electron — uma decisão de arquitetura que afeta tudo, do desempenho à segurança.",
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
		shortDescription: "Gestão eficiente de despesas condominiais.",
		fullDescription:
			"CONDOGUARD é uma aplicação em desenvolvimento para gestão eficiente de despesas condominiais, permitindo previsões financeiras e identificação de problemas antes que se tornem críticos.",
		logoUrl: "/condoguard-icon.svg",
		repoUrl: "https://github.com/victorradael/condoguard",
		techStack: [
			"Java",
			"Spring Boot",
			"MongoDB",
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
		shortDescription: "Um spec kit minimalista para desenvolvimento com agentes de IA.",
		fullDescription:
			"SpaceKid cria, com um único comando, um miniverse no seu diretório: um pequeno mundo autocontido com o conhecimento, os arquivos produzidos e o fluxo spec-driven (contexto, spec, plano, implementação e fechamento do ciclo) de que agentes de IA e pessoas precisam para trabalhar bem, em vez de prompts ad-hoc. Funciona com projetos em qualquer linguagem.",
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
		shortDescription: "Um companheiro de desktop que construí para resolver o caos de rastrear builds e equipamentos no Core Keeper.",
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
