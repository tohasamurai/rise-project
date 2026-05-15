"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, MessageCircle } from "lucide-react";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
  compact?: boolean;
}

export default function ProjectCard({
  project,
  index,
  compact = false,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    window.open(project.siteUrl, "_blank", "noopener,noreferrer");
  };

  if (compact) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div
          role="link"
          tabIndex={0}
          onClick={handleCardClick}
          onKeyDown={(e) => e.key === "Enter" && handleCardClick()}
          className="group block cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="relative overflow-hidden rounded-xl border transition-all duration-500"
            style={{
              borderColor: isHovered
                ? `${project.colorScheme}50`
                : "rgba(255,255,255,0.05)",
              boxShadow: isHovered
                ? `0 0 40px ${project.colorScheme}15, 0 0 80px ${project.colorScheme}05`
                : "none",
            }}
          >
            {/* Background */}
            <div className="relative h-32 sm:h-36 bg-rise-dark overflow-hidden">
              <div
                className="absolute inset-0 transition-opacity duration-700"
                style={{
                  background: `radial-gradient(ellipse at 50% 120%, ${project.colorScheme}25 0%, transparent 70%)`,
                  opacity: isHovered ? 1 : 0.4,
                }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-px transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${project.colorScheme}60, transparent)`,
                  opacity: isHovered ? 1 : 0,
                }}
              />
              {/* Project initial */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-6xl sm:text-7xl font-black transition-all duration-500 select-none"
                  style={{
                    color: isHovered
                      ? `${project.colorScheme}20`
                      : "rgba(255,255,255,0.03)",
                  }}
                >
                  {project.title.split(" ")[1]?.[0] || "R"}
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="relative p-5 bg-rise-gray/80">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0 transition-shadow duration-500"
                      style={{
                        backgroundColor: project.colorScheme,
                        boxShadow: isHovered
                          ? `0 0 8px ${project.colorScheme}80`
                          : "none",
                      }}
                    />
                    <h3 className="font-bold text-sm tracking-wide">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/30 mt-1 ml-[18px]">
                    {project.game}
                  </p>
                </div>
                <ExternalLink
                  size={14}
                  className="text-white/20 group-hover:text-white/50 transition-colors flex-shrink-0 mt-0.5"
                />
              </div>

              <motion.div
                initial={false}
                animate={{
                  height: isHovered ? "auto" : 0,
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-xs text-white/40 leading-relaxed mt-3 ml-[18px]">
                  {project.shortDescription}
                </p>
                <div className="flex items-center gap-2 mt-3 ml-[18px]">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium transition-colors"
                    style={{
                      backgroundColor: `${project.colorScheme}15`,
                      color: project.colorScheme,
                    }}
                  >
                    <ExternalLink size={10} />
                    Сайт
                  </span>
                  {project.discordUrl && (
                    <a
                      href={project.discordUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full text-[11px] font-medium text-white/50 hover:text-white/80 transition-colors"
                    >
                      <MessageCircle size={10} />
                      Discord
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        role="link"
        tabIndex={0}
        onClick={handleCardClick}
        onKeyDown={(e) => e.key === "Enter" && handleCardClick()}
      >
        <div className="relative overflow-hidden rounded-2xl aspect-[16/10] bg-rise-gray">
          <div
            className="absolute inset-0 transition-all duration-700 ease-out"
            style={{
              background: isHovered
                ? `linear-gradient(135deg, ${project.colorScheme}40, ${project.colorScheme}15)`
                : "linear-gradient(135deg, #1a1a1a, #0a0a0a)",
            }}
          />

          <motion.div
            className="absolute inset-0"
            animate={{
              background: isHovered
                ? [
                    `radial-gradient(circle at 30% 50%, ${project.colorScheme}20 0%, transparent 70%)`,
                    `radial-gradient(circle at 70% 50%, ${project.colorScheme}20 0%, transparent 70%)`,
                    `radial-gradient(circle at 30% 50%, ${project.colorScheme}20 0%, transparent 70%)`,
                  ]
                : "none",
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-8">
            <div>
              <motion.h3
                className="text-2xl sm:text-3xl font-black tracking-tight"
                animate={{ scale: isHovered ? 1.02 : 1 }}
                transition={{ duration: 0.3 }}
              >
                {project.title}
              </motion.h3>
              <p className="text-xs uppercase tracking-[0.3em] text-white/40 mt-1">
                {project.game}
              </p>
            </div>

            <motion.div
              initial={false}
              animate={{
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 10,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mt-4"
            >
              <p className="text-sm text-white/70 leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium hover:bg-white/20 transition-colors">
                  <ExternalLink size={12} />
                  Перейти на сайт
                </span>
                {project.discordUrl && (
                  <a
                    href={project.discordUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium hover:bg-white/20 transition-colors"
                  >
                    <MessageCircle size={12} />
                    Discord
                  </a>
                )}
              </div>
            </motion.div>

            <motion.div
              animate={{ opacity: isHovered ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8"
            >
              <p className="text-sm text-white/40">
                {project.shortDescription}
              </p>
            </motion.div>
          </div>

          <div
            className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `linear-gradient(225deg, ${project.colorScheme}30, transparent)`,
            }}
          />

          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            animate={{
              boxShadow: isHovered
                ? `inset 0 0 0 1px ${project.colorScheme}40, 0 0 30px ${project.colorScheme}10`
                : "inset 0 0 0 1px rgba(255,255,255,0.05)",
            }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      {project.isArchived && (
        <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/50">
          Архив
        </div>
      )}
    </motion.div>
  );
}
