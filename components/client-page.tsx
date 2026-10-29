"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavSwitcher, type Tab } from "@/components/nav-switcher";
import { ProfileCard } from "@/components/profile-card";
import { CustomCard } from "@/components/custom-card";
import { ProjectList } from "@/components/project-list";
import { projects } from "@/lib/projects";

interface ClientPageProps {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    profile: any;
}

const order: Record<Tab, number> = { profile: 0, projects: 1 };

const variants = {
    enter: (direction: number) => ({ opacity: 0, x: direction * 48, scale: 0.98 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (direction: number) => ({ opacity: 0, x: direction * -48, scale: 0.98 }),
};

export function ClientPage({ profile }: ClientPageProps) {
    const [activeTab, setActiveTab] = useState<Tab>("profile");
    const [direction, setDirection] = useState(1);

    const changeTab = useCallback(
        (tab: Tab) => {
            if (tab === activeTab) return;
            setDirection(order[tab] > order[activeTab] ? 1 : -1);
            setActiveTab(tab);
            window.history.replaceState(
                null,
                "",
                tab === "projects" ? "#projetos" : window.location.pathname,
            );
            window.scrollTo({ top: 0, behavior: "smooth" });
        },
        [activeTab],
    );

    // Deep link: /#projetos opens the projects tab directly.
    useEffect(() => {
        if (window.location.hash === "#projetos") {
            setDirection(1);
            setActiveTab("projects");
        }
    }, []);

    return (
        <div className="ambient-bg relative flex flex-col items-center justify-center w-full bg-[#0d1117] px-4 sm:px-6 lg:px-8 pt-8 pb-28 md:py-10 flex-1">
            <NavSwitcher
                activeTab={activeTab}
                onTabChange={changeTab}
                projectCount={projects.length}
            />

            <div className="w-full max-w-4xl relative">
                <AnimatePresence mode="wait" custom={direction}>
                    {activeTab === "profile" ? (
                        <motion.div
                            key="profile"
                            id="panel-profile"
                            role="tabpanel"
                            aria-labelledby="tab-profile"
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            className="w-full"
                        >
                            <ProfileCard
                                profile={profile}
                                onExploreProjects={() => changeTab("projects")}
                            />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="projects"
                            id="panel-projects"
                            role="tabpanel"
                            aria-labelledby="tab-projects"
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.35, ease: "easeOut" }}
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
