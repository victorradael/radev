"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/lib/projects";
import { ProjectCard } from "./project-card";
import { ProjectDetail } from "./project-detail";

export function ProjectList() {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const selectedProject = projects.find((p) => p.id === selectedId);

    useEffect(() => {
        if (!selectedId) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedId(null);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [selectedId]);

    return (
        <div className="w-full h-full relative flex-1">
            <div className="p-5 sm:p-8">
                <header className="mb-6 sm:mb-8">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#58a6ff]">
                        Portfólio · Na prática
                    </p>
                    <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-white">
                        Projetos
                    </h2>
                    <p className="mt-2 max-w-xl text-sm sm:text-base leading-relaxed text-white/60">
                        Cada projeto é um exercício de arquitetura: decisões de design
                        claras, fundamentos sólidos e software pensado para evoluir.
                    </p>
                </header>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {projects.map((project, index) => (
                        <motion.li
                            key={project.id}
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + index * 0.08, duration: 0.45, ease: "easeOut" }}
                        >
                            <ProjectCard
                                project={project}
                                index={index}
                                onClick={() => setSelectedId(project.id)}
                            />
                        </motion.li>
                    ))}
                </ul>
            </div>

            <AnimatePresence>
                {selectedId && selectedProject && (
                    <div className="fixed inset-0 z-50 bg-black/70 p-3 backdrop-blur-sm sm:p-6 md:absolute md:bg-transparent md:p-0 md:backdrop-blur-none">
                        <ProjectDetail
                            project={selectedProject}
                            onClose={() => setSelectedId(null)}
                        />
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
