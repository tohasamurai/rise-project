"use client";

import { motion } from "framer-motion";
import { ChevronDown, Gamepad2, Code } from "lucide-react";
import LogoAnimation from "@/components/home/LogoAnimation";
import ParticleField from "@/components/home/ParticleField";
import ProjectCard from "@/components/home/ProjectCard";
import { projects } from "@/lib/data";

export default function Home() {
  const activeProjects = projects.filter((p) => !p.isArchived);
  const archivedProjects = projects.filter((p) => p.isArchived);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleField />

        <div className="relative z-10 text-center px-4">
          <LogoAnimation />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8 text-white/40 text-sm sm:text-base max-w-md mx-auto leading-relaxed"
          >
            Самый смелый проект игровых серверов
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-colors text-sm"
            >
              <Gamepad2 size={16} />
              Наши проекты
            </a>
            <a
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-colors text-sm"
            >
              <Code size={16} />
              RISE STUDIO
            </a>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} className="text-white/20" />
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              Наши проекты
            </h2>
            <div className="mt-2 w-10 h-0.5 bg-rise-red mx-auto" />
            <p className="mt-6 text-white/40 max-w-lg mx-auto text-sm">
              Бренд RISE — залог качества в любой игре. Каждый проект — уникальный
              мир с высочайшим сервисом.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {activeProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                compact
              />
            ))}

            {archivedProjects.map((project, index) => (
              <div key={project.id} className="relative">
                <ProjectCard
                  project={project}
                  index={activeProjects.length + index}
                  compact
                />
                <div className="absolute top-3 right-3 z-20 px-2.5 py-0.5 bg-white/10 backdrop-blur-sm rounded-full text-[10px] text-white/40 font-medium">
                  Архив
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 sm:py-32 bg-rise-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Gamepad2 className="text-rise-red" size={24} />
                <h3 className="text-2xl font-black tracking-tight">
                  RISE PROJECT
                </h3>
              </div>
              <p className="text-white/50 leading-relaxed text-sm">
                Межпроектное пространство, которое олицетворяет команду RISE
                TEAM. Мы занимаемся игровыми проектами и объединяем масштабные
                серверы в разных играх. Бренд RISE — залог качества, где бы вы ни
                играли.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Squad", "Rust", "RDR2"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Code className="text-rise-red" size={24} />
                <h3 className="text-2xl font-black tracking-tight">
                  RISE STUDIO
                </h3>
              </div>
              <p className="text-white/50 leading-relaxed text-sm">
                Первая игровая студия которая разрабатывает плагины, дизайн,
                ботов, скрипты, 3D модели, игровые модификации и собирает
                игровые серверы под ключ. Мы делаем всё и для всех. Наша миссия —
                развиваться и создавать что-то крупное.
              </p>
              <div className="mt-6">
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm text-rise-red hover:text-white transition-colors"
                >
                  Узнать больше об услугах →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
