"use client";

import { motion } from "framer-motion";
import { Users, Target, Heart, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Качество",
    description: "Бренд RISE — залог качества в любой игре. Мы не идём на компромиссы.",
  },
  {
    icon: Users,
    title: "Команда",
    description: "Талантливые разработчики, дизайнеры и администраторы, объединённые одной целью.",
  },
  {
    icon: Heart,
    title: "Энтузиазм",
    description: "Мы движемся на собственном энтузиазме, создавая что-то действительно крупное.",
  },
  {
    icon: Award,
    title: "Опыт",
    description: "За плечами — успешные проекты в различных играх и тысячи довольных игроков.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-black tracking-tight"
          >
            О нас
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-2 w-12 h-0.5 bg-rise-red mx-auto"
          />
        </div>
      </section>

      {/* RISE PROJECT */}
      <section className="py-16 bg-rise-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-black mb-6">RISE PROJECT</h2>
            <p className="text-white/50 leading-relaxed">
              RISE PROJECT — это межпроектное пространство, которое олицетворяет
              команду RISE TEAM, занимающуюся игровыми проектами. Мы объединяем
              масштабные проекты в разных играх, и бренд RISE является залогом
              качества в любой игре.
            </p>
            <p className="text-white/50 leading-relaxed mt-4">
              Наш проект нацелен на высококачественный сервис для игроков. Мы
              создаём уникальную атмосферу в каждой игре, разрабатываем авторские
              плагины и системы, обеспечиваем стабильную работу серверов и
              поддерживаем активное сообщество.
            </p>
            <p className="text-white/50 leading-relaxed mt-4">
              Дизайн RISE PROJECT выполнен в чёрно-белой гамме с лаконичными
              красными акцентами — как нераскрашенный мир, который оживает в
              каждом из наших игровых проектов.
            </p>
          </motion.div>
        </div>
      </section>

      {/* RISE STUDIO */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-black mb-6">RISE STUDIO</h2>
            <p className="text-white/50 leading-relaxed">
              RISE STUDIO — первая игровая студия, которая разрабатывает плагины,
              дизайн дискорда и сайтов, ботов, скрипты, 3D модели, игровые
              модификации. Мы собираем игровые серверы под ключ, обеспечиваем
              техническое сопровождение проектов, настраиваем оборудование и
              предоставляем скидки на хостинг.
            </p>
            <p className="text-white/50 leading-relaxed mt-4">
              Мы — пространство, которое собирает всех своих разработчиков воедино
              и позволяет внести коммерцию в интеллектуальный труд нашей команды.
              Мы даём игрокам высокий сервис в видеоиграх, дополняя своим качеством
              игры.
            </p>
            <p className="text-white/50 leading-relaxed mt-4 font-medium text-white/60">
              Мы делаем всё и для всех, берёмся за любую работу. Наша миссия —
              развиваться и создавать что-то крупное, двигаемся на собственном
              энтузиазме.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-rise-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-black text-center mb-12"
          >
            Наши ценности
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-rise-gray rounded-2xl border border-white/5"
              >
                <item.icon className="text-rise-red mb-4" size={28} />
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black mb-8">Наши ресурсы</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "VK", href: "https://vk.com/risegameproject" },
              { label: "YouTube", href: "https://www.youtube.com/@rise_team" },
              { label: "Boosty", href: "https://boosty.to/rise-s.ru" },
              { label: "RISE SQUAD", href: "https://rise-s.ru/" },
              { label: "RISE RUST", href: "https://riserust.com" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-rise-gray border border-white/5 rounded-full text-sm hover:bg-rise-light-gray hover:border-white/10 transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
