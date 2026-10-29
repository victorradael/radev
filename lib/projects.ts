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
		shortDescription: "A minimalist desktop application for enhanced productivity.",
		fullDescription:
			"Phantom is a desktop application designed to streamline your workflow with a focus on minimalism and efficiency. It features a clean interface, fast performance, and essential tools integrated directly into your desktop environment. Built with Electron and modern web technologies.",
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
		shortDescription: "Um companheiro de desktop especializado para progressão de equipamentos e builds.",
		fullDescription:
			"Core Keeper Armory é uma aplicação desktop multiplataforma projetada para resolver a complexidade de rastrear conjuntos de equipamentos e builds de personagens no jogo Core Keeper. Ele fornece um painel centralizado para os jogadores gerenciarem múltiplos conjuntos de itens, rastrearem a aquisição de equipamentos e coordenarem a progressão em sessões cooperativas.",
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
