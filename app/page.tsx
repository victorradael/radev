import { ClientPage } from "@/components/client-page";
import { getGithubProfile } from "../functions/github";

export default async function ProfilePage() {
	const profile = await getGithubProfile();

	return <ClientPage profile={profile} />;
}
