import type { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileCard } from "@/components/profile-card";
import { getGithubProfile } from "../functions/github";

import { CustomCard } from "@/components/custom-card";

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

export default async function ProfilePage() {
	const profile = await getGithubProfile();

	return (
		<Tabs
			defaultValue="profile"
			className="flex flex-col items-center justify-center min-h-screen w-full bg-[#0d1117]  px-4 sm:px-6 lg:px-8"
		>
			<TabsList className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-5 bg-[#0d1117] w-full max-w-4xl overflow-hidden rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.1)] p-0">
				<TabsTrigger
					value="profile"
					className="md:col-span-2 p-8 relative px-4 py-2 text-xs sm:text-sm text-white/70 data-[state=active]:text-white data-[state=active]:bg-[#0a66c2] transition-colors"
				>
					<strong>Perfil</strong>
					<div className="min-h-[400px] absolute inset-0 bg-[#0a66c2] rounded-sm opacity-0 data-[state=active]:opacity-100 transition-opacity" />
				</TabsTrigger>
				<TabsTrigger
					value="projects"
					className="md:col-span-3 p-8 relative px-4 py-2 text-xs sm:text-sm text-white/70 data-[state=active]:text-white data-[state=active]:bg-[#0a66c2] transition-colors"
				>
					<strong>Projetos</strong>
					<div className="absolute inset-0 bg-[#0a66c2] rounded-sm opacity-0 data-[state=active]:opacity-100 transition-opacity" />
				</TabsTrigger>
			</TabsList>
			<TabsContent value="profile" className="w-full max-w-4xl mt-4 sm:mt-6">
				<ProfileCard profile={profile} />
			</TabsContent>
			<TabsContent value="projects">
				<CustomCard shadow="white">
					<div className="flex w-screen max-w-4xl text-white min-h-[400px] items-center justify-center">
						Em breve
					</div>
				</CustomCard>
			</TabsContent>
		</Tabs>
	);
}
