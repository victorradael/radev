"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { X, Github } from "lucide-react";
import { Project } from "@/lib/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProjectDetailProps {
    project: Project;
    onClose: () => void;
}

export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
    return (
        <motion.div
            layoutId={`card-${project.id}`}
            className="w-full h-full bg-[#161b22] rounded-lg overflow-hidden flex flex-col md:flex-row relative z-50 shadow-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Close Button */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                }}
                className="absolute top-4 right-4 z-[60] p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                aria-label="Close project details"
            >
                <X size={24} />
            </button>

            {/* Left Side - Visual/Brand */}
            <div className="w-full md:w-2/5 relative p-6 md:p-8 flex flex-col items-center justify-center bg-gradient-to-br from-[#0d1117] to-[#161b22] shrink-0">
                <motion.div
                    layoutId={`image-${project.id}`}
                    className="relative w-32 h-32 md:w-48 md:h-48 rounded-3xl overflow-hidden shadow-2xl mb-4 md:mb-6 flex items-center justify-center bg-white/5 shrink-0 aspect-square"
                >
                    {project.emoji ? (
                        <span className="text-6xl md:text-9xl select-none">{project.emoji}</span>
                    ) : (
                        <Image
                            src={project.logoUrl || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-contain p-4"
                        />
                    )}
                </motion.div>
                <motion.h2
                    layoutId={`title-${project.id}`}
                    className="text-2xl md:text-4xl font-bold text-white mb-2 text-center"
                >
                    {project.title}
                </motion.h2>
                <div className="flex gap-2 flex-wrap justify-center mt-2 md:mt-4">
                    {project.techStack.map((tech) => (
                        <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-white/10 text-white hover:bg-white/20 text-xs md:text-sm"
                        >
                            {tech}
                        </Badge>
                    ))}
                </div>
            </div>

            {/* Right Side - Content */}
            <div className="w-full md:w-3/5 p-6 md:p-12 bg-[#0d1117] text-white flex flex-col overflow-y-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h3 className="text-xl font-semibold mb-4 text-[#58a6ff]">
                        Sobre o Projeto
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg mb-8">
                        {project.fullDescription}
                    </p>

                    <div className="mt-auto pt-8 border-t border-white/10">
                        <Button
                            asChild
                            className="w-full md:w-auto bg-[#238636] hover:bg-[#2ea043] text-white font-semibold"
                            size="lg"
                        >
                            <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                            >
                                <Github size={20} />
                                Ver Repositório
                            </a>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
