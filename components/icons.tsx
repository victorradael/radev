import { Power } from "lucide-react";

interface IconProps {
	name: string; // Nome do ícone
	className?: string; // Classes do Tailwind CSS
}

export const Icons: React.FC<IconProps> = ({ name, className }) => {
	switch (name) {
		case "home":
			return (
				// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
				<svg
					className={className}
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={2}
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
					/>
				</svg>
			);

		case "powerlog":
			return <Power className={className} />;

		// Adicione mais ícones conforme necessário

		default:
			return null; // Retorna null se o ícone não for encontrado
	}
};
