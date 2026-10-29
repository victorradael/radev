"use client";

import { motion } from "framer-motion";
import { LayoutGrid, User } from "lucide-react";

export type Tab = "profile" | "projects";

const tabs = [
    { id: "profile", label: "Perfil", Icon: User },
    { id: "projects", label: "Projetos", Icon: LayoutGrid },
] as const;

interface NavSwitcherProps {
    activeTab: Tab;
    onTabChange: (tab: Tab) => void;
    projectCount: number;
}

export function NavSwitcher({ activeTab, onTabChange, projectCount }: NavSwitcherProps) {
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
        e.preventDefault();
        const next = activeTab === "profile" ? "projects" : "profile";
        onTabChange(next);
        document.getElementById(`tab-${next}`)?.focus();
    };

    return (
        <nav
            aria-label="Seções do portfólio"
            className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-[max(1rem,env(safe-area-inset-bottom))] md:pointer-events-auto md:static md:mb-8 md:p-0"
        >
            <div
                role="tablist"
                aria-label="Alternar entre perfil e projetos"
                onKeyDown={handleKeyDown}
                className="pointer-events-auto flex gap-1 rounded-full border border-white/10 bg-[#0d1117]/80 p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.55)] backdrop-blur-xl"
            >
                {tabs.map(({ id, label, Icon }) => {
                    const active = activeTab === id;
                    return (
                        <button
                            key={id}
                            type="button"
                            role="tab"
                            id={`tab-${id}`}
                            aria-selected={active}
                            aria-controls={`panel-${id}`}
                            tabIndex={active ? 0 : -1}
                            onClick={() => onTabChange(id)}
                            className={`relative flex items-center gap-2 rounded-full px-5 py-3 md:py-2.5 text-sm font-medium outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-white/60 ${
                                active ? "text-white" : "text-white/55 hover:text-white/90"
                            }`}
                        >
                            {active && (
                                <motion.span
                                    layoutId="active-pill"
                                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0a66c2] to-[#2f8be6] shadow-[0_0_22px_rgba(47,139,230,0.55)]"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <Icon className="relative z-10 h-4 w-4" aria-hidden />
                            <span className="relative z-10">{label}</span>
                            {id === "projects" && (
                                <span
                                    className={`relative z-10 rounded-full px-1.5 text-[11px] leading-5 ${
                                        active ? "bg-white/25 text-white" : "bg-white/10 text-white/70"
                                    }`}
                                >
                                    {projectCount}
                                </span>
                            )}
                        </button>
                    );
                })}
            </div>
        </nav>
    );
}
