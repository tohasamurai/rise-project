"use client";

import { motion } from "framer-motion";
import {
  Users,
  Zap,
  GraduationCap,
  Heart,
  Code,
  Palette,
  Shield,
  Headphones,
  Send,
} from "lucide-react";
import { useState } from "react";

const benefits = [
  {
    icon: Zap,
    title: "Подработка",
    description: "Возможность заработать на своих навыках в сфере игровой индустрии.",
  },
  {
    icon: GraduationCap,
    title: "Опыт",
    description: "Получите реальный опыт работы над крупными проектами с настоящими пользователями.",
  },
  {
    icon: Users,
    title: "Сообщество",
    description: "Общайтесь с продвинутыми разработчиками, учитесь и развивайтесь вместе.",
  },
  {
    icon: Heart,
    title: "Энтузиазм",
    description: "Участвуйте в крутом проекте, который развивает ваши любимые игры.",
  },
];

const positions = [
  {
    icon: Code,
    title: "Разработчики",
    description: "Плагины, скрипты, моды, боты — если умеете писать код, нам по пути.",
  },
  {
    icon: Palette,
    title: "Дизайнеры",
    description: "Веб-дизайн, Discord оформление, баннеры, 3D модели.",
  },
  {
    icon: Shield,
    title: "Администраторы",
    description: "Управление игровыми серверами, модерация, работа с сообществом.",
  },
  {
    icon: Headphones,
    title: "Поддержка",
    description: "Помощь игрокам, обработка обращений, техподдержка проектов.",
  },
];

export default function JoinPage() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    telegram: "",
    position: "",
    experience: "",
    motivation: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Заявка в RISE TEAM!\n\nИмя: ${formData.name}\nВозраст: ${formData.age}\nTelegram: ${formData.telegram}\nПозиция: ${formData.position}\nОпыт: ${formData.experience}\nМотивация: ${formData.motivation}`;
    window.open(
      `https://t.me/share?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

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
            Вступить в RISE TEAM
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-2 w-12 h-0.5 bg-rise-red mx-auto"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-white/40 max-w-2xl mx-auto"
          >
            Мы ищем талантливых людей, которые хотят развиваться вместе с нами.
            У нас есть как коммерческие, так и некоммерческие проекты,
            поддерживаемые на энтузиазме.
          </motion.p>
        </div>
      </section>

      {/* Benefits */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black text-center mb-12">
            Почему RISE TEAM?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-rise-gray rounded-2xl border border-white/5 text-center"
              >
                <item.icon className="text-rise-red mx-auto mb-4" size={28} />
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-white/40">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Positions */}
      <section className="py-24 bg-rise-dark px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black text-center mb-12">
            Кого мы ищем
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {positions.map((pos, i) => (
              <motion.div
                key={pos.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 bg-rise-gray rounded-2xl border border-white/5"
              >
                <div className="p-2 bg-rise-red/10 rounded-lg flex-shrink-0">
                  <pos.icon size={20} className="text-rise-red" />
                </div>
                <div>
                  <h3 className="font-bold">{pos.title}</h3>
                  <p className="text-sm text-white/40 mt-1">
                    {pos.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black text-center mb-8">
            Подать заявку
          </h2>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs text-white/40 mb-2">Имя</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-rise-gray border border-white/5 rounded-xl text-sm focus:outline-none focus:border-rise-red/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-white/40 mb-2">
                  Возраст
                </label>
                <input
                  type="text"
                  required
                  value={formData.age}
                  onChange={(e) =>
                    setFormData({ ...formData, age: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-rise-gray border border-white/5 rounded-xl text-sm focus:outline-none focus:border-rise-red/50 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs text-white/40 mb-2">
                  Telegram
                </label>
                <input
                  type="text"
                  required
                  value={formData.telegram}
                  onChange={(e) =>
                    setFormData({ ...formData, telegram: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-rise-gray border border-white/5 rounded-xl text-sm focus:outline-none focus:border-rise-red/50 transition-colors"
                  placeholder="@username"
                />
              </div>
              <div>
                <label className="block text-xs text-white/40 mb-2">
                  Позиция
                </label>
                <select
                  required
                  value={formData.position}
                  onChange={(e) =>
                    setFormData({ ...formData, position: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-rise-gray border border-white/5 rounded-xl text-sm focus:outline-none focus:border-rise-red/50 transition-colors text-white/70"
                >
                  <option value="">Выберите</option>
                  {positions.map((p) => (
                    <option key={p.title} value={p.title}>
                      {p.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs text-white/40 mb-2">
                Опыт работы
              </label>
              <textarea
                required
                rows={3}
                value={formData.experience}
                onChange={(e) =>
                  setFormData({ ...formData, experience: e.target.value })
                }
                className="w-full px-4 py-3 bg-rise-gray border border-white/5 rounded-xl text-sm focus:outline-none focus:border-rise-red/50 transition-colors resize-none"
                placeholder="Расскажите о вашем опыте..."
              />
            </div>

            <div>
              <label className="block text-xs text-white/40 mb-2">
                Почему хотите к нам?
              </label>
              <textarea
                required
                rows={3}
                value={formData.motivation}
                onChange={(e) =>
                  setFormData({ ...formData, motivation: e.target.value })
                }
                className="w-full px-4 py-3 bg-rise-gray border border-white/5 rounded-xl text-sm focus:outline-none focus:border-rise-red/50 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition-colors"
            >
              <Send size={16} />
              Отправить заявку
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
