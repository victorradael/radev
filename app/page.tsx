import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";
import { getGithubProfile } from "../functions/github";
import { GlobeContainer } from "@/components/globe";

export const metadata: Metadata = {
	title: "Victor Radael - Engenheiro de Software",
	description: "Página de apresentação baseada no perfil do GitHub",
	icons: {
		icon: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
};

export default async function ProfilePage() {
	const profile = await getGithubProfile();

	return (
		<div className="flex items-center justify-center h-screen w-screen">
			<div className="bg-[#0d1117] w-full max-w-4xl overflow-hidden">
				<div className="grid grid-cols-5">
					{/* Left Column */}
					<div className="col-span-2 bg-[#0a66c2] p-8 m-8 relative min-h-[400px]">
						{/* Profile Content */}
						<div className="space-y-8 mt-16">
							{/* Profile Image */}
							<div className="relative">
								<div className="w-48 h-48 mx-auto relative">
									<div
										className="absolute inset-0 bg-[#0c4885] rounded-full"
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
							<div className="text-white pt-8">
								<div className="text-4xl font-extralight tracking-wide">
									Im,
								</div>
								<div className="text-6xl  ">
									<strong>Victor</strong>
									<br />
									<strong>Radael</strong>
								</div>
							</div>

							{/* Rotating Badge */}
							<Link
								href="https://www.linkedin.com/in/victorradael/"
								target="_blank"
							>
								<div className="absolute bottom-56 right-8">
									<div className="w-24 h-24 bg-[#0d1117] rounded-full border border-white/10 flex items-center justify-center relative group">
										<div className="w-8 h-8 bg-white rounded-full" />
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
												<text className="text-[12px] fill-white font-semibold">
													<textPath href="#circle" startOffset="0%">
														MY • LINKEDIN • PROFILE
													</textPath>
												</text>
											</svg>
										</div>
										<div className="absolute inset-[-1px] rounded-full border border-white/10" />
									</div>
								</div>
							</Link>
						</div>
					</div>

					{/* Right Column */}
					<div className="col-span-3 m-8 m">
						{/* Globe */}
						<div className="relative aspect-[1/1]">
							<GlobeContainer size={1} />
						</div>

						{/* Grid Layout */}
						<div className="grid grid-cols-4 ">
							{/* Github */}
							<div className="col-span-1  p-5 relative flex items-center justify-center">
								<Link href="https://github.com/victorradael" target="_blank">
									<Github className="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity text-white" />
								</Link>
							</div>
							{/* Repositórios */}
							<div className="col-span-1 p-5 relative text-white flex flex-col items-center justify-center">
								<div className="text-3xl font-bold">{profile.public_repos}</div>
								<div className="text-sm mt-1">Repositórios</div>
							</div>

							{/* Seguindo */}
							<div className="col-span-1  p-5 relative text-white flex flex-col items-center justify-center">
								<div className="text-3xl font-bold">{profile.following}</div>
								<div className="text-sm mt-1">Seguindo</div>
							</div>

							{/* Seguidores */}
							<div className="col-span-1  p-5 relative text-white flex flex-col items-center justify-center">
								<div className="text-3xl font-bold">{profile.followers}</div>
								<div className="text-sm mt-1">Seguidores</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
