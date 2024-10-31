import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Github } from "lucide-react";
import { GlobeContainer } from "@/components/globe";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const GITHUB_USERNAME = "victorradael";

export const metadata: Metadata = {
	title: "Victor Radael - Engenheiro de Software",
	description: "Página de apresentação baseada no perfil do GitHub",
	icons: {
		icon: "/radael-small.svg",
	},
};

async function getGithubProfile() {
	try {
		const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
			next: { revalidate: 3600 },
		});
		if (!res.ok) throw new Error("Failed to fetch profile");
		return res.json();
	} catch (error) {
		console.error("Error fetching GitHub profile:", error);
		return {};
	}
}

async function getGithubRepos() {
	try {
		const res = await fetch(
			`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=stars&per_page=5`,
			{ next: { revalidate: 3600 } },
		);
		if (!res.ok) throw new Error("Failed to fetch repos");
		return res.json();
	} catch (error) {
		console.error("Error fetching GitHub repos:", error);
		return [];
	}
}

export default async function ProfilePage() {
	const profile = await getGithubProfile();
	const repos = await getGithubRepos();

	return (
		<div className="flex items-center justify-center min-h-screen p-4">
			<div className="bg-white rounded-[32px] w-full max-w-[1200px] overflow-hidden">
				<div className="grid md:grid-cols-[450px_1fr]">
					{/* Left Column */}
					<div className="bg-[#C5B4E3] p-8 relative min-h-[600px]">
						{/* Header */}
						<div className="absolute top-8 left-8 text-white/90 text-sm font-medium flex items-center gap-2">
							<svg
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								className="opacity-80"
							>
								<path
									d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>

						{/* Profile Content */}
						<div className="space-y-8 mt-16">
							{/* Profile Image */}
							<div className="relative">
								<div className="w-48 h-48 mx-auto relative">
									<div
										className="absolute inset-0 bg-[#FFB1E7] rounded-full"
										style={{ transform: "translate(12px, 0px)" }}
									/>
									<div className="relative rounded-full overflow-hidden border-[3px] border-white/90">
										<Image
											src={
												profile.avatar_url ||
												"/placeholder.svg?height=150&width=150"
											}
											alt="Profile"
											width={192}
											height={192}
											className="grayscale contrast-125 brightness-110"
											style={{
												filter: "grayscale(1) contrast(1.25) brightness(1.1)",
											}}
										/>
									</div>
								</div>
							</div>

							{/* Name and Contact */}
							<div className="text-white space-y-1">
								<div className="text-4xl font-extralight tracking-wide">
									Im,
								</div>
								<div className="text-6xl font-extralight tracking-wider leading-tight">
									Victor
									<br />
									Radael
								</div>

								<Link href="https://github.com/victorradael" target="_blank">
									<span className="flex items-center gap-2 border-b border-dotted border-white/40 pb-1 w-fit">
										<Github className="w-4 h-4 opacity-80 group-hover:opacity-100 transition-opacity" />
										victorradael
									</span>
								</Link>
								<Link
									href="https://www.linkedin.com/in/victorradael/"
									target="_blank"
								>
									<span className="flex items-center gap-2 border-b border-dotted border-white/40 pb-1 w-fit">
										<Linkedin className="w-4 h-4 opacity-80 group-hover:opacity-100 transition-opacity" />
										victorradael
									</span>
								</Link>
							</div>

							{/* Rotating Badge */}
							<div className="absolute bottom-8 right-8">
								<div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center relative group">
									<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
									<div className="absolute inset-0">
										<svg
											className="w-full h-full animate-spin-slow"
											viewBox="0 0 100 100"
										>
											<defs>
												<path
													id="circle"
													d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
												/>
											</defs>
											<text className="text-[12px] fill-white/40">
												<textPath href="#circle" startOffset="0%">
													IM DESIGN PORTFOLIO • 2024 •
												</textPath>
											</text>
										</svg>
										{profile.public_repos}
										{profile.followers}
										{profile.following}
									</div>
									<div className="absolute inset-[-1px] rounded-full border border-white/10" />
								</div>
							</div>
						</div>
					</div>

					{/* Right Column */}
					<div className="p-8 space-y-8">
						{/* Header */}
						<div className="space-y-8">
							<h1 className="text-7xl font-extralight tracking-wider">
								Portfolio
								<span className="inline-block w-1.5 h-1.5 bg-black rounded-tr-sm ml-1 align-top mt-4"></span>
							</h1>

							{/* Navigation */}
							<nav className="flex gap-12 text-sm border-b border-gray-100 pb-4">
								<Link
									href="#podcast"
									className="text-gray-400 hover:text-black transition-colors"
								>
									Podcast
								</Link>
								<Link
									href="#portfolio"
									className="text-black border-b-2 border-black -mb-[17px]"
								>
									Portfolio
								</Link>
								<Link
									href="#research"
									className="text-gray-400 hover:text-black transition-colors"
								>
									Research
								</Link>
								<Link
									href="#clients"
									className="text-gray-400 hover:text-black transition-colors"
								>
									Clients
								</Link>
								<Link
									href="#contact"
									className="text-gray-400 hover:text-black transition-colors"
								>
									Contact
								</Link>
							</nav>
						</div>

						{/* Grid Layout */}
						<div className="grid grid-cols-6 gap-3">
							{/* Globe */}
							<div className="col-span-4 relative rounded-xl overflow-hidden aspect-video bg-black">
								<GlobeContainer
									size={1.2}
									containerClassName="absolute inset-0"
								/>
								<div className="absolute top-3 right-3 w-1.5 h-1.5 bg-white rounded-tr-sm"></div>
							</div>

							{/* Projects */}
							<div className="col-span-2 bg-[#B4E9E4] p-5 rounded-xl relative group">
								<div className="absolute top-3 right-3 w-1.5 h-1.5 bg-white rounded-tr-sm"></div>
								<div className="text-3xl font-bold">251</div>
								<div className="text-sm mt-1">Projects</div>
							</div>

							{/* Case Study */}
							<div className="col-span-2 bg-[#8B8BDE] p-5 rounded-xl relative text-white">
								<div className="absolute top-3 right-3 w-1.5 h-1.5 bg-white rounded-tr-sm"></div>
								<div className="text-3xl font-bold">156</div>
								<div className="text-sm mt-1">Case Study</div>
							</div>

							{/* Clients */}
							<div className="col-span-2 bg-[#333333] p-5 rounded-xl relative text-white flex items-center justify-center">
								<div className="absolute top-3 right-3 w-1.5 h-1.5 bg-white rounded-tr-sm"></div>
								<Image
									src="/placeholder.svg"
									alt="Apple logo"
									width={20}
									height={20}
									className="invert"
								/>
								<div className="absolute bottom-5 text-sm">Clients</div>
							</div>

							{/* 3D Sphere */}
							<div className="col-span-1 bg-[#FFE4E4] p-5 rounded-xl relative flex items-center justify-center">
								<div className="absolute top-3 right-3 w-1.5 h-1.5 bg-white rounded-tr-sm"></div>
								<Image
									src="/placeholder.svg"
									alt="3D Sphere"
									width={40}
									height={40}
									className="opacity-80"
								/>
							</div>

							{/* Awards */}
							<div className="col-span-1 bg-[#FFB84D] p-5 rounded-xl relative">
								<div className="absolute top-3 right-3 w-1.5 h-1.5 bg-white rounded-tr-sm"></div>
								<div className="text-3xl font-bold">172</div>
								<div className="text-sm mt-1">Awards</div>
							</div>
						</div>
					</div>
					{Array.isArray(repos) && repos.length > 0 ? (
						repos.map((repo: any) => (
							<Card key={repo.id} className="bg-charcoal border-light-blue">
								<CardHeader>
									<CardTitle className="text-sky-blue">{repo.name}</CardTitle>
									<CardDescription className="text-pale-blue">
										{repo.description}
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="flex justify-between items-center">
										<div className="flex gap-2">
											<Badge className="bg-navy text-sky-blue">
												{repo.language}
											</Badge>
											<span className="text-sm text-light-blue">
												⭐ {repo.stargazers_count}
											</span>
											<span className="text-sm text-light-blue">
												🍴 {repo.forks_count}
											</span>
										</div>
										<Button
											variant="outline"
											size="sm"
											asChild
											className="bg-royal-blue text-pale-blue hover:bg-sky-blue hover:text-deep-black"
										>
											<a
												href={repo.html_url}
												target="_blank"
												rel="noopener noreferrer"
											>
												Ver Projeto
											</a>
										</Button>
									</div>
								</CardContent>
							</Card>
						))
					) : (
						<Card className="bg-slate border-navy">
							<CardContent>
								<p className="text-pale-blue">
									Nenhum repositório encontrado ou ocorreu um erro ao buscar os
									repositórios.
								</p>
							</CardContent>
						</Card>
					)}
				</div>
			</div>
		</div>
	);
}
