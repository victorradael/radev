export const siteConfig = {
	url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://victorradael.dev",
	name: "Victor Radael",
	role: "Engenheiro de Software",
	title: "Victor Radael | Engenheiro de Software",
	description:
		"Sou Victor Radael, engenheiro de software focado em fundamentos e arquitetura. Aqui estão os projetos que construí, as decisões que tomei e a tecnologia que estudo.",
	bio: "Curioso por natureza. Já passei por JavaScript, Python, PHP, Go, dados e infraestrutura, e em cada contexto aprendi o máximo que pude.",
	headline: "Já trabalhei com muitas stacks. O que carrego de cada uma são os fundamentos.",
	summary:
		"Sou engenheiro de software e gosto de entender como as coisas funcionam por baixo. Já trabalhei em contextos e stacks bem diferentes, e o que mais me serviu foram sempre os fundamentos: redes, sistemas operacionais, arquitetura, modelagem. São eles que fazem cada nova ferramenta, inclusive IA, ser bem aproveitada em vez de apenas adotada.",
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
			text: "Projeto sistemas para crescer sem virar bagunça. Para mim, KISS e SOLID valem pelo que evitam: um sistema que trava no primeiro requisito novo.",
		},
		{
			title: "Fundamentos de engenharia",
			text: "Redes, sistemas operacionais, como os dados são guardados e trafegam. Aprendi isso cedo e continua sendo o que mais uso, em qualquer stack, velha ou nova.",
		},
		{
			title: "Engenharia com IA",
			text: "Uso IA com specs e planos bem escritos, não prompts ad-hoc. A diferença é a mesma entre code review e code dump: um produz algo sustentável, o outro costuma gerar dívida.",
		},
	],
	links: {
		github: "https://github.com/victorradael",
		linkedin: "https://www.linkedin.com/in/victorradael/",
	},
} as const;
