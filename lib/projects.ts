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
		},
	},
];
