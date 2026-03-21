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
		id: "aesiron",
		title: "Aesiron",
		shortDescription: "O Ferreiro de Apps Streamlit Standalone",
		fullDescription:
			"Ferramenta de CLI para forjar, gerenciar e orquestrar múltiplos aplicativos Streamlit em containers Docker. Permite instanciar novos projetos com infraestrutura plug-and-play e orquestrar a execução de todos os aplicativos em um ecossistema.",
		logoUrl: "/aesiron-icon.png",
		repoUrl: "https://github.com/victorradael/aesiron",
		techStack: ["Python", "Docker", "Streamlit", "CLI"],
		theme: {
			primary: "#fb923c",
			secondary: "#a1a1aa",
			background: "#18181b",
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
