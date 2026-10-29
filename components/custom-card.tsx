const shadows = {
	blue: "shadow-[0_0_40px_rgba(10,102,194,0.25)]",
	white: "shadow-[0_0_40px_rgba(88,166,255,0.12)]",
};

export const CustomCard = ({
	children,
	shadow = "white",
}: {
	children: React.ReactNode;
	shadow: "blue" | "white";
}) => {
	return (
		<div
			className={`card-frame w-full max-w-4xl rounded-2xl p-px ${shadows[shadow]}`}
		>
			<div className="bg-[#0d1117] overflow-hidden rounded-[15px]">
				{children}
			</div>
		</div>
	);
};
