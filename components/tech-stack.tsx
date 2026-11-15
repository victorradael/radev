"use client";

import {
	SiAngular,
	SiArduino,
	SiDocker,
	SiElectron,
	SiExpress,
	SiFastapi,
	SiGo,
	SiGooglecloud,
	SiKubernetes,
	SiLinux,
	SiNestjs,
	SiNextdotjs,
	SiNodedotjs,
	SiPython,
	SiRaspberrypi,
	SiReact,
	SiTerraform,
	SiVuedotjs,
} from "react-icons/si";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

type TechItem = {
	name: string;
	Icon?: React.ComponentType<{ className?: string }>;
};

const TECH: TechItem[] = [
	{ name: "React", Icon: SiReact },
	{ name: "Next.js", Icon: SiNextdotjs },
	{ name: "Node.js", Icon: SiNodedotjs },
	{ name: "NestJS", Icon: SiNestjs },
	{ name: "Express", Icon: SiExpress },
	{ name: "Python", Icon: SiPython },
	{ name: "FastAPI", Icon: SiFastapi },
	{ name: "Go", Icon: SiGo },
	{ name: "Angular", Icon: SiAngular },
	{ name: "Vue", Icon: SiVuedotjs },
	{ name: "Docker", Icon: SiDocker },
	{ name: "Kubernetes", Icon: SiKubernetes },
	{ name: "Terraform", Icon: SiTerraform },
	{ name: "AWS" },
	{ name: "GCP", Icon: SiGooglecloud },
	{ name: "Electron", Icon: SiElectron },
	{ name: "Linux", Icon: SiLinux },
	{ name: "Raspberry Pi", Icon: SiRaspberrypi },
	{ name: "Arduino", Icon: SiArduino },
	{ name: "gRPC" },
];

export function TechStack() {
	return (
		<TooltipProvider delayDuration={300}>
			<div className="mt-4">
				<p className="text-xs uppercase tracking-[0.25em] text-[#58a6ff] mb-1">
					Tecnologias
				</p>
				<p className="text-xs text-white/50 mb-2">
					Algumas das ferramentas que já usei. A lista muda, os fundamentos não.
				</p>
				<div className="flex flex-wrap gap-1.5">
					{TECH.map(({ name, Icon }) => (
						<Tooltip key={name}>
							<TooltipTrigger asChild>
								<div
									className="glass-tile rounded-md p-1.5 cursor-default flex items-center justify-center min-w-[28px] min-h-[28px]"
									aria-label={name}
								>
									{Icon ? (
										<Icon className="w-3.5 h-3.5 text-white/70" />
									) : (
										<span className="text-[9px] font-semibold text-white/70 leading-none tracking-wide px-0.5">
											{name}
										</span>
									)}
								</div>
							</TooltipTrigger>
							<TooltipContent side="top">
								<p>{name}</p>
							</TooltipContent>
						</Tooltip>
					))}
				</div>
			</div>
		</TooltipProvider>
	);
}
