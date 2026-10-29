import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Github, Layers, Linkedin, Sparkles } from "lucide-react";
import { projects } from "@/lib/projects";
import { GlobeContainer } from "@/components/globe";
import { siteConfig } from "@/lib/site";
import { CustomCard } from "./custom-card";

interface Infos {
	onExploreProjects?: () => void;
	profile: {
		avatar_url: string;
		public_repos: string;
		following: string;
		followers: string;
	};
}

const pillarIcons = [Layers, Compass, Sparkles];

export const ProfileCard: React.FC<Infos> = ({ profile, onExploreProjects }) => {
	return (
		<CustomCard shadow="white">
			<div className="grid grid-cols-1 md:grid-cols-5">
				{/* Left Column */}
				<div className="profile-left md:col-span-2 p-8 relative min-h-[400px] flex flex-col">
					{/* Profile Content */}
					<div className="space-y-8 mt-8 md:mt-16">
						{/* Profile Image */}
						<div className="relative">
							<div className="w-32 h-32 md:w-48 md:h-48 mx-auto relative">
								<div
									className="absolute inset-0 bg-[#0c4885] rounded-full"
									style={{ transform: "translate(8px, 0px)" }}
								/>
								<div className="relative rounded-full overflow-hidden border-[3px] border-white/90">
									<Image
										src={
											profile.avatar_url ||
											"/placeholder.svg?height=150&width=150"
										}
										alt="Foto de perfil de Victor Radael"
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
						<div className="text-white pt-4 md:pt-8 text-center md:text-left">
							<p className="text-2xl md:text-4xl font-extralight tracking-wide">
								Olá, eu sou
							</p>
							<h1 className="text-4xl md:text-6xl">
								<strong className="name-gradient">Victor</strong>
								<br />
								<strong className="name-gradient">Radael</strong>
								<span className="sr-only"> - {siteConfig.role}</span>
							</h1>
							<p className="mt-3 text-base md:text-lg font-light text-white/90">
								{siteConfig.role}
							</p>
						</div>
					</div>

					{/* LinkedIn badge: large, centered at the bottom */}
					<Link
						href="https://www.linkedin.com/in/victorradael/"
						target="_blank"
						rel="noopener noreferrer"
						className="linkedin-badge group mt-auto self-center pt-10 outline-none"
						aria-label="Perfil do LinkedIn de Victor Radael"
					>
						<div className="relative w-36 h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full bg-[#0d1117] border border-white/15 flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.45)] transition-transform duration-300 group-hover:scale-105 group-focus-visible:ring-2 group-focus-visible:ring-white">
							<div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center transition-colors group-hover:bg-[#0a66c2]">
								<Linkedin className="w-7 h-7 md:w-8 md:h-8 text-[#0a66c2] transition-colors group-hover:text-white" aria-hidden />
							</div>
							<div className="absolute inset-0">
								{/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative */}
								<svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100" aria-hidden>
									<defs>
										<path id="circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
									</defs>
									<text className="text-[10px] fill-white font-semibold">
										<textPath href="#circle" startOffset="0%">
											MY • LINKEDIN • PROFILE
										</textPath>
									</text>
								</svg>
							</div>
						</div>
					</Link>
				</div>

				{/* Right Column */}
				<div className="md:col-span-3 p-8">
					{/* Globe */}
					<div className="globe-halo relative aspect-square max-w-[300px] mx-auto mb-8">
						<GlobeContainer size={1} />
					</div>

					{/* Positioning */}
					<section aria-labelledby="posicionamento" className="mb-8 text-white">
						<p className="reveal text-xs uppercase tracking-[0.25em] text-[#58a6ff]">
							Fundamentos · Arquitetura · IA
						</p>
						<h2
							id="posicionamento"
							className="reveal mt-3 text-2xl md:text-3xl font-semibold leading-tight"
							style={{ animationDelay: "80ms" }}
						>
							{siteConfig.headline}
						</h2>
						<p
							className="reveal mt-3 text-white/70 leading-relaxed"
							style={{ animationDelay: "160ms" }}
						>
							{siteConfig.summary}
						</p>
						<ul className="mt-6 grid gap-3 sm:grid-cols-3">
							{siteConfig.pillars.map((pillar, i) => {
								const Icon = pillarIcons[i];
								return (
									<li
										key={pillar.title}
										className="reveal glass-tile rounded-xl p-4"
										style={{ animationDelay: `${240 + i * 100}ms` }}
									>
										<Icon className="w-5 h-5 text-[#58a6ff]" aria-hidden />
										<h3 className="mt-3 text-sm font-semibold">{pillar.title}</h3>
										<p className="mt-1 text-xs leading-relaxed text-white/60">
											{pillar.text}
										</p>
									</li>
								);
							})}
						</ul>
						{onExploreProjects && (
							<button
								type="button"
								onClick={onExploreProjects}
								className="explore-cta group mt-6 flex w-full items-center justify-between gap-4 rounded-xl px-5 py-4 text-left text-white"
							>
								<span>
									<span className="block text-xs uppercase tracking-[0.2em] text-[#58a6ff]">
										Na prática
									</span>
									<span className="mt-1 block text-base font-semibold">
										Explorar {projects.length} projetos
									</span>
								</span>
								<ArrowRight className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
							</button>
						)}
					</section>

					{/* Grid Layout */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						{/* Github */}
						<div className="p-5 relative flex items-center justify-center">
							<Link
								href="https://github.com/victorradael"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Perfil do GitHub de Victor Radael"
							>
								<Github className="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity text-white" />
							</Link>
						</div>
						{/* Repositórios */}
						<div className="glass-tile rounded-xl p-4 relative text-white flex flex-col items-center justify-center">
							<div className="text-3xl font-bold">{profile.public_repos}</div>
							<div className="text-[10px] sm:text-xs mt-1 text-white/60 uppercase tracking-wide">Repositórios</div>
						</div>
						{/* Seguindo */}
						<div className="glass-tile rounded-xl p-4 relative text-white flex flex-col items-center justify-center">
							<div className="text-3xl font-bold">{profile.following}</div>
							<div className="text-[10px] sm:text-xs mt-1 text-white/60 uppercase tracking-wide">Seguindo</div>
						</div>
						{/* Seguidores */}
						<div className="glass-tile rounded-xl p-4 relative text-white flex flex-col items-center justify-center">
							<div className="text-3xl font-bold">{profile.followers}</div>
							<div className="text-[10px] sm:text-xs mt-1 text-white/60 uppercase tracking-wide">Seguidores</div>
						</div>
					</div>
				</div>
			</div>
		</CustomCard>
	);
};
