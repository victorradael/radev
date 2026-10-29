"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/projects";

interface ProjectCardProps {
    project: Project;
    index: number;
    onClick: () => void;
}

export function ProjectCard({ project, index, onClick }: ProjectCardProps) {
    return (
        <motion.div
            layoutId={`card-${project.id}`}
            role="button"
            tabIndex={0}
            aria-label={`Abrir detalhes de ${project.title}`}
            onClick={onClick}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onClick();
                }
            }}
            className="project-card group relative h-full cursor-pointer rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            style={{ "--accent": project.theme.primary } as React.CSSProperties}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
        >
            <div className="relative flex h-full flex-col gap-4 p-5">
                <div className="flex items-start justify-between">
                    <motion.div
                        layoutId={`image-${project.id}`}
                        className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl bg-white/[0.04]"
                    >
                        {project.emoji ? (
                            <span className="select-none text-5xl">{project.emoji}</span>
                        ) : (
                            <Image
                                src={project.logoUrl || "/placeholder.svg"}
                                alt={project.title}
                                fill
                                className="object-contain p-2"
                            />
                        )}
                    </motion.div>
                    <span className="font-mono text-xs text-white/30">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                </div>

                <div className="flex-1">
                    <motion.h3
                        layoutId={`title-${project.id}`}
                        className="text-lg font-bold text-white"
                    >
                        {project.title}
                    </motion.h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/60 line-clamp-3">
                        {project.shortDescription}
                    </p>
                </div>

                <div className="flex items-end justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                        {project.techStack.slice(0, 3).map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/60"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <span className="project-card-cue flex shrink-0 items-center gap-1 text-xs font-medium text-white/50 transition-colors group-hover:text-white">
                        Ver detalhes
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
