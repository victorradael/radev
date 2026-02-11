import type { Metadata } from "next";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileCard } from "@/components/profile-card";
import { getGithubProfile } from "../functions/github";

import { CustomCard } from "@/components/custom-card";
import { ProjectList } from "@/components/project-list";

export const metadata: Metadata = {
	title: "Victor Radael - Engenheiro de Software | Portfólio Profissional",
	description:
		"Portfólio profissional de Victor Radael, Engenheiro de Software especializado em desenvolvimento web e mobile. Conheça meus projetos, habilidades e experiência.",
	keywords:
		"Victor Radael, victorradael, engenheiro de software, desenvolvedor web, desenvolvedor mobile, React, Node.js",
	openGraph: {
		title: "Victor Radael - Engenheiro de Software",
		description:
			"Portfólio profissional de Victor Radael, Engenheiro de Software especializado em desenvolvimento web, mobile e fullstack.",
		images: [
			{
				url: "/victor-radael-og-image.png",
				width: 1200,
				height: 630,
				alt: "Victor Radael",
			},
		],
	},
};

import { ClientPage } from "@/components/client-page";

export default async function ProfilePage() {
	const profile = await getGithubProfile();

	return (
		<ClientPage profile={profile} />
	);
}
