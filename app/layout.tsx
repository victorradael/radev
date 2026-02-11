import "./globals.css";
import Footer from "@/components/footer";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="min-h-screen flex flex-col">
				<main className="flex-1 flex flex-col bg-slate w-full">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
