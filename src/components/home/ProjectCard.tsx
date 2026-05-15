"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, MessageCircle } from "lucide-react";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

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
      <a href={project.siteUrl} target="_blank" rel="noopener noreferrer">
        <div className="relative overflow-hidden rounded-2xl aspect-[16/10] bg-rise-gray">
          {/* Background with color overlay */}
          <div
            className="absolute inset-0 transition-all duration-700 ease-out"
            style={{
              background: isHovered
                ? `linear-gradient(135deg, ${project.colorScheme}40, ${project.colorScheme}15)`
                : "linear-gradient(135deg, #1a1a1a, #0a0a0a)",
            }}
          />

          {/* Animated gradient overlay */}
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

          {/* Card content */}
          <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-8">
            <div>
              <motion.h3
                className="text-2xl sm:text-3xl font-black tracking-tight"
                animate={{
                  color: isHovered ? "#ffffff" : "#ffffff",
                  scale: isHovered ? 1.02 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {project.title}
              </motion.h3>
              <p className="text-xs uppercase tracking-[0.3em] text-white/40 mt-1">
                {project.game}
              </p>
            </div>

            {/* Expandable description */}
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

            {/* Bottom info always visible */}
            <motion.div
              animate={{
                opacity: isHovered ? 0 : 1,
              }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8"
            >
              <p className="text-sm text-white/40">{project.shortDescription}</p>
            </motion.div>
          </div>

          {/* Corner accent */}
          <div
            className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `linear-gradient(225deg, ${project.colorScheme}30, transparent)`,
            }}
          />

          {/* Border glow on hover */}
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
      </a>

      {project.isArchived && (
        <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/50">
          Архив
        </div>
      )}
    </motion.div>
  );
}
