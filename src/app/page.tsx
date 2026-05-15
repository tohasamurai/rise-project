"use client";

import { motion } from "framer-motion";
import {
  ChevronDown,
  Gamepad2,
  Code,
  ArrowRight,
  Users,
  Star,
  Shield,
} from "lucide-react";
import Link from "next/link";
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
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-colors text-sm"
            >
              <Code size={16} />
              RISE STUDIO
            </Link>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              Кто мы
            </h2>
            <div className="mt-2 w-10 h-0.5 bg-rise-red mx-auto" />
          </motion.div>

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
              <p className="text-white/50 leading-relaxed text-sm mt-4">
                Наш проект нацелен на высококачественный сервис для игроков. Мы
                создаём уникальную атмосферу в каждой игре, разрабатываем авторские
                плагины и системы, обеспечиваем стабильную работу серверов.
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
              <p className="text-white/50 leading-relaxed text-sm mt-4">
                Пространство, которое собирает всех своих разработчиков воедино
                и позволяет внести коммерцию в интеллектуальный труд нашей команды,
                которая даёт игрокам высокий сервис в видеоиграх.
              </p>
              <div className="mt-6">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm text-rise-red hover:text-white transition-colors"
                >
                  Узнать больше об услугах →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { value: "5+", label: "Лет опыта", icon: Star },
              { value: "50+", label: "Проектов", icon: Code },
              { value: "10K+", label: "Игроков", icon: Users },
              { value: "15+", label: "Разработчиков", icon: Shield },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <stat.icon size={20} className="text-rise-red mb-3" />
                <div className="text-3xl sm:text-4xl font-black">{stat.value}</div>
                <div className="text-xs text-white/40 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Flow: Services → Products → Dashboard */}
      <section className="py-24 sm:py-32 bg-rise-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              Как мы работаем
            </h2>
            <div className="mt-2 w-10 h-0.5 bg-rise-red mx-auto" />
          </motion.div>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Ознакомьтесь с услугами",
                desc: "Изучите наш каталог услуг — от плагинов до сборки проекта под ключ.",
                href: "/services",
                linkText: "Наши услуги",
              },
              {
                step: "02",
                title: "Выберите готовое решение",
                desc: "Или приобретите уже готовые продукты из нашего каталога товаров.",
                href: "/products",
                linkText: "Каталог товаров",
              },
              {
                step: "03",
                title: "Получите результат",
                desc: "Зарегистрируйтесь, оплатите и получите товар с инструкцией в личном кабинете.",
                href: "/dashboard",
                linkText: "Личный кабинет",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <Link href={item.href}>
                  <div className="group flex items-center gap-6 p-6 bg-rise-gray rounded-2xl border border-white/5 hover:border-white/15 transition-all duration-300">
                    <div className="text-3xl font-black text-rise-red/30 group-hover:text-rise-red transition-colors flex-shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold group-hover:text-white transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/40 mt-1">{item.desc}</p>
                    </div>
                    <ArrowRight
                      size={20}
                      className="text-white/20 group-hover:text-rise-red group-hover:translate-x-1 transition-all flex-shrink-0"
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
              Будьте на связи
            </h2>
            <div className="w-10 h-0.5 bg-rise-red mx-auto" />
            <p className="mt-6 text-white/40 text-sm max-w-md mx-auto">
              Следите за новостями, общайтесь в чате и поддерживайте проект
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            <a
              href="https://vk.com/risegameproject"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-rise-gray rounded-2xl border border-white/5 hover:border-white/15 transition-all duration-300"
            >
              <div className="text-xl font-black mb-2 group-hover:text-rise-red transition-colors">
                VK
              </div>
              <p className="text-xs text-white/40">
                Межпроектная группа с новостями и общением
              </p>
            </a>
            <a
              href="https://www.youtube.com/@rise_team"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-rise-gray rounded-2xl border border-white/5 hover:border-white/15 transition-all duration-300"
            >
              <div className="text-xl font-black mb-2 group-hover:text-rise-red transition-colors">
                YouTube
              </div>
              <p className="text-xs text-white/40">
                Видеоконтент, обзоры и моменты с серверов
              </p>
            </a>
            <a
              href="https://boosty.to/rise-s.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-rise-gray rounded-2xl border border-white/5 hover:border-white/15 transition-all duration-300"
            >
              <div className="text-xl font-black mb-2 group-hover:text-rise-red transition-colors">
                Boosty
              </div>
              <p className="text-xs text-white/40">
                Инсайд новости и поддержка проекта
              </p>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
            <Link
              href="/join"
              className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-rise-red transition-colors"
            >
              <Users size={14} />
              Хочешь в команду? Подай заявку →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
