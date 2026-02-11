"use client";

import { motion } from "framer-motion";

interface NavSwitcherProps {
    activeTab: "profile" | "projects";
    onTabChange: (tab: "profile" | "projects") => void;
}

export function NavSwitcher({ activeTab, onTabChange }: NavSwitcherProps) {
    const tabs = [
        { id: "profile", label: "Perfil" },
        { id: "projects", label: "Projetos" },
    ] as const;

    return (
        <div className="flex space-x-1 bg-black/20 backdrop-blur-md p-1 rounded-full border border-white/10 mb-6 relative z-10 w-fit mx-auto">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    className={`
            relative px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-white/50
            ${activeTab === tab.id ? "text-white" : "text-white/60 hover:text-white/90"}
          `}
                >
                    {activeTab === tab.id && (
                        <motion.div
                            layoutId="active-pill"
                            className="absolute inset-0 bg-[#0a66c2]/80 rounded-full shadow-lg"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                </button>
            ))}
        </div>
    );
}
