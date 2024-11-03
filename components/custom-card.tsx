const shadows = {
	blue: "shadow-[0_0_15px_rgba(10,102,194,0.1)]",
	white: "shadow-[0_0_15px_rgba(255,255,255,0.1)]",
};

export const CustomCard = ({
	children,
	shadow = "white",
}: {
	children: React.ReactNode;
	shadow: "blue" | "white";
}) => {
	const selectedShadown = shadows[shadow];

	const style = `bg-[#0d1117] w-full max-w-4xl overflow-hidden rounded-lg ${selectedShadown} border-border`;

	if (shadow)
		return (
			<div className={style}>
				<header>
					<h1 className="sr-only">Victor Radael - Engenheiro de Software</h1>
				</header>
				{children}
			</div>
		);
};
