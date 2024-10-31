import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { getGithubRepos } from "../functions/github";

export async function Repositories() {
	const repos = await getGithubRepos();
	return (
		<div>
			{Array.isArray(repos) && repos.length > 0 ? (
				// biome-ignore lint/suspicious/noExplicitAny: <explanation>
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
	);
}
