"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/lib/projects";
import { Card } from "@/components/ui/card";

interface ProjectCardProps {
    project: Project;
    onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
    return (
        <motion.div
            layoutId={`card-${project.id}`}
            onClick={onClick}
            className="cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <Card className="bg-[#0d1117] border-white/10 overflow-hidden relative shadow-lg group h-full">
                <div className="p-6 flex flex-col items-center justify-center space-y-4 h-full">
                    <motion.div
                        layoutId={`image-${project.id}`}
                        className="relative w-24 h-24 rounded-2xl overflow-hidden flex items-center justify-center bg-white/5"
                    >
                        {project.emoji ? (
                            <span className="text-6xl select-none">{project.emoji}</span>
                        ) : (
                            <Image
                                src={project.logoUrl || "/placeholder.svg"}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        )}
                    </motion.div>
                    <motion.h3
                        layoutId={`title-${project.id}`}
                        className="text-white font-bold text-xl"
                    >
                        {project.title}
                    </motion.h3>
                    <p className="text-white/60 text-sm text-center line-clamp-2">
                        {project.shortDescription}
                    </p>
                </div>
            </Card>
        </motion.div>
    );
}
