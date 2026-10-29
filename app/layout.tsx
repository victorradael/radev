import type { Metadata, Viewport } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import { projects } from "@/lib/projects";
import { siteConfig } from "@/lib/site";

export const viewport: Viewport = {
	themeColor: "#0d1117",
};

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: {
		default: siteConfig.title,
		template: `%s | ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: [...siteConfig.keywords],
	applicationName: siteConfig.name,
	authors: [{ name: siteConfig.name, url: siteConfig.url }],
	creator: siteConfig.name,
	alternates: { canonical: "/" },
	manifest: "/site.webmanifest",
	robots: {
		index: true,
		follow: true,
		googleBot: { index: true, follow: true, "max-image-preview": "large" },
	},
	openGraph: {
		type: "website",
		locale: "pt_BR",
		url: "/",
		siteName: siteConfig.name,
		title: siteConfig.title,
		description: siteConfig.description,
		images: [
			{
				url: "/victor-radael-og-image.png",
				width: 1200,
				height: 630,
				alt: "Victor Radael - Engenheiro de Software",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.title,
		description: siteConfig.description,
		images: ["/victor-radael-og-image.png"],
	},
};

const jsonLd = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "WebSite",
			"@id": `${siteConfig.url}/#website`,
			url: siteConfig.url,
			name: siteConfig.title,
			inLanguage: "pt-BR",
			publisher: { "@id": `${siteConfig.url}/#person` },
		},
		{
			"@type": "Person",
			"@id": `${siteConfig.url}/#person`,
			name: siteConfig.name,
			alternateName: ["victorradael", "Victor Radael Engenheiro de Software"],
			url: siteConfig.url,
			image: `${siteConfig.url}/victor-radael-og-image.png`,
			jobTitle: siteConfig.role,
			description: siteConfig.summary,
			knowsAbout: [
				"Engenharia de Software",
				...siteConfig.pillars.map((pillar) => pillar.title),
			],
			sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
			mainEntityOfPage: { "@id": `${siteConfig.url}/#website` },
		},
		{
			"@type": "ItemList",
			name: `Projetos de ${siteConfig.name}`,
			itemListElement: projects.map((project, index) => ({
				"@type": "ListItem",
				position: index + 1,
				item: {
					"@type": "SoftwareSourceCode",
					name: project.title,
					description: project.shortDescription,
					codeRepository: project.repoUrl,
					author: { "@id": `${siteConfig.url}/#person` },
				},
			})),
		},
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-BR">
			<body className="min-h-screen flex flex-col">
				<script
					type="application/ld+json"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
					}}
				/>
				<main className="flex-1 flex flex-col bg-slate w-full">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
