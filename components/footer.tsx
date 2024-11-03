export default function Footer() {
	return (
		<footer className="absolute bottom-0 w-full bg-[#0d1117] text-center text-white text-sm py-4">
			<p>
				&copy; {new Date().getFullYear()} Victor Radael. Todos os direitos
				reservados.
			</p>
		</footer>
	);
}
