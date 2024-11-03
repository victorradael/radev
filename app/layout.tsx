import Footer from "@/components/footer";
import "./globals.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<main className="w-screen bg-slate">
					{children}
					<Footer />
				</main>
			</body>
		</html>
	);
}
