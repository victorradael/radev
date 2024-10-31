const GITHUB_USERNAME = "victorradael";

export const getGithubProfile= async () => {
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

export const getGithubRepos = async () => {
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