export default function Footer() {
	return (
		<footer className="relative w-full bg-[#0d1117] text-center text-white/50 text-xs pt-5 pb-24 md:pb-5 border-t border-white/5">
			<p>
				&copy; {new Date().getFullYear()} Victor Radael · Engenharia de
				Software. Todos os direitos reservados.
			</p>
		</footer>
	);
}
