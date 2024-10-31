import { Navbar } from "@/components/navbar";
import "./globals.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				<main className="w-screen bg-slate">{children}</main>
			</body>
		</html>
	);
}
