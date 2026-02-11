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
];
