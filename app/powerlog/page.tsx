import type { Metadata } from "next";
import Image from "next/image";
import { PowerIcon } from "lucide-react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Icons } from "@/components/icons";

export const metadata: Metadata = {
	title: "PowerLog",
	description: "Página de apresentação de aplicações desenvolvidas",
	icons: {
		icon: PowerIcon,
	},
	icons: PowerIcon,
};

const apps = [
	{
		name: "PowerLog",
		path: "/powerlog",
		title: "PowerLog",
		description:
			"Aplicação prática para acompanhar sua evolução no controle do peso corporal, com registros diários e visualização de progresso. Inclui ferramentas adicionais para monitorar rotinas e metas fitness.",
		logo: "powerlog.svg",
	},
];

export default function Apps() {
	return (
		<div className="flex items-center justify-center min-h-screen p-4">
			{apps.map((app) => (
				<Link key={app.name} href={app.path} passHref>
					<div className="relative group">
						<Card className="bg-navy border-light-blue p-4 max-w-96 flex flex-col items-center">
							<Icons
								name="powerlog"
								className="w-24 h-24 text-light-blue hover:text-blue-900 transition-colors duration-200 m-4"
							/>
							<CardTitle className=" text-light-blue hover:text-blue-900 transition-colors duration-200 mb-1">
								PowerLog
							</CardTitle>
							<CardDescription className="text-light-blue">
								{app.description}
							</CardDescription>
						</Card>
					</div>
				</Link>
			))}
		</div>
	);
}
