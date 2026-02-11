"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Project, projects } from "@/lib/projects";
import { ProjectCard } from "./project-card";
import { ProjectDetail } from "./project-detail";

export function ProjectList() {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const selectedProject = projects.find((p) => p.id === selectedId);

    return (
        <div className="w-full h-full relative flex-1">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 p-8">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onClick={() => setSelectedId(project.id)}
                    />
                ))}
            </div>

            <AnimatePresence>
                {selectedId && selectedProject && (
                    <div className="absolute inset-0 z-50">
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
