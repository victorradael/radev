export const siteConfig = {
	url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://victorradael.dev",
	name: "Victor Radael",
	role: "Engenheiro de Software",
	title: "Victor Radael | Engenheiro de Software",
	description:
		"Sou Victor Radael, engenheiro de software focado em fundamentos e arquitetura. Aqui estão os projetos que construí, as decisões que tomei e a tecnologia que estudo.",
	bio: "Curioso e sempre de ponta a ponta. O que fica de cada contexto são os fundamentos — a base que faz qualquer ferramenta valer, ainda mais com IA.",
	headline: "Acredito que tecnologia nova só rende de verdade sobre uma base sólida.",
	summary:
		"Sou engenheiro de software. Estudo e pratico os fundamentos — arquitetura, modelagem, design de sistemas — porque são eles que fazem cada nova ferramenta, inclusive IA, ser bem aproveitada em vez de apenas adotada.",
	keywords: [
		"Victor Radael",
		"victorradael",
		"engenheiro de software",
		"engenharia de software",
		"arquitetura de software",
		"fundamentos de engenharia de software",
		"design de sistemas",
		"engenharia de software com IA",
		"desenvolvimento orientado a especificações",
		"portfólio",
	],
	pillars: [
		{
			title: "Arquitetura de software",
			text: "Projeto sistemas para crescer sem virar bagunça. KISS e SOLID não são regras abstratas — são o que separa um sistema fácil de evoluir de um que trava no primeiro requisito novo.",
		},
		{
			title: "Fundamentos de engenharia",
			text: "Os princípios que aprendi mais cedo continuam sendo os mais úteis. Modelagem clara e boas práticas de engenharia são o que fazem qualquer stack render, velha ou nova.",
		},
		{
			title: "Engenharia com IA",
			text: "Uso IA com specs e planos bem escritos, não prompts ad-hoc. A diferença é a mesma entre code review e code dump: um produz algo sustentável, o outro produz dívida.",
		},
	],
	links: {
		github: "https://github.com/victorradael",
		linkedin: "https://www.linkedin.com/in/victorradael/",
	},
} as const;
