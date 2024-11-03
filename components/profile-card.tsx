import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";
import { GlobeContainer } from "@/components/globe";
import { CustomCard } from "./custom-card";

interface Infos {
	profile: {
		avatar_url: string;
		public_repos: string;
		following: string;
		followers: string;
	};
}

export const ProfileCard: React.FC<Infos> = ({ profile }) => {
	return (
		<CustomCard shadow="white">
			<div className="grid grid-cols-1 md:grid-cols-5">
				{/* Left Column */}
				<div className="md:col-span-2 bg-[#0a66c2] p-8 relative min-h-[400px]">
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
							<h2 className="text-2xl md:text-4xl font-extralight tracking-wide">
								Im,
							</h2>
							<h3 className="text-4xl md:text-6xl">
								<strong>Victor</strong>
								<br />
								<strong>Radael</strong>
							</h3>
						</div>

						{/* Rotating Badge */}
						<Link
							href="https://www.linkedin.com/in/victorradael/"
							target="_blank"
							rel="noopener noreferrer"
							className="block md:absolute md:bottom-56 md:right-8"
							aria-label="Perfil do LinkedIn de Victor Radael"
						>
							<div className="w-20 h-20 md:w-24 md:h-24 bg-[#0d1117] rounded-full border border-white/10 flex items-center justify-center relative group mx-auto md:mx-0">
								<div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full" />
								<div className="absolute inset-0">
									{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
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
										<text className="text-[10px] md:text-[12px] fill-white font-semibold">
											<textPath href="#circle" startOffset="0%">
												MY • LINKEDIN • PROFILE
											</textPath>
										</text>
									</svg>
								</div>
								<div className="absolute inset-[-1px] rounded-full border border-white/10" />
							</div>
						</Link>
					</div>
				</div>

				{/* Right Column */}
				<div className="md:col-span-3 p-8">
					{/* Globe */}
					<div className="relative aspect-square max-w-[300px] mx-auto mb-8">
						<GlobeContainer size={1} />
					</div>

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
						<div className="p-5 relative text-white flex flex-col items-center justify-center">
							<div className="text-3xl font-bold">{profile.public_repos}</div>
							<div className="text-sm mt-1">Repositórios</div>
						</div>
						{/* Seguindo */}
						<div className="p-5 relative text-white flex flex-col items-center justify-center">
							<div className="text-3xl font-bold">{profile.following}</div>
							<div className="text-sm mt-1">Seguindo</div>
						</div>
						{/* Seguidores */}
						<div className="p-5 relative text-white flex flex-col items-center justify-center">
							<div className="text-3xl font-bold">{profile.followers}</div>
							<div className="text-sm mt-1">Seguidores</div>
						</div>
					</div>
				</div>
			</div>
		</CustomCard>
	);
};
