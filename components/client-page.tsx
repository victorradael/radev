"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavSwitcher } from "@/components/nav-switcher";
import { ProfileCard } from "@/components/profile-card";
import { CustomCard } from "@/components/custom-card";
import { ProjectList } from "@/components/project-list";

interface ClientPageProps {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    profile: any;
}

export function ClientPage({ profile }: ClientPageProps) {
    const [activeTab, setActiveTab] = useState<"profile" | "projects">("profile");

    return (
        <div className="flex flex-col items-center justify-center w-full bg-[#0d1117] px-4 sm:px-6 lg:px-8 py-10 flex-1">
            <NavSwitcher activeTab={activeTab} onTabChange={setActiveTab} />

            <div className="w-full max-w-4xl relative">
                <AnimatePresence mode="wait">
                    {activeTab === "profile" ? (
                        <motion.div
                            key="profile"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="w-full"
                        >
                            <ProfileCard profile={profile} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="projects"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className="w-full"
                        >
                            <CustomCard shadow="white">
                                <div className="min-h-[600px] bg-[#0d1117] flex flex-col">
                                    <ProjectList />
                                </div>
                            </CustomCard>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
