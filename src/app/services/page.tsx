"use client";

import { motion } from "framer-motion";
import {
  Code,
  MessageCircle,
  Globe,
  Bot,
  Box,
  Server,
  Rocket,
  Puzzle,
  TrendingUp,
  HardDrive,
  Send,
} from "lucide-react";
import { services } from "@/lib/data";
import { useState } from "react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Code,
  MessageCircle,
  Globe,
  Bot,
  Box,
  Server,
  Rocket,
  Puzzle,
  TrendingUp,
  HardDrive,
};

export default function ServicesPage() {
  const [formData, setFormData] = useState({
    name: "",
    telegram: "",
    service: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Новая заявка на услугу!\n\nИмя: ${formData.name}\nTelegram: ${formData.telegram}\nУслуга: ${formData.service}\nОписание: ${formData.description}`;
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
            Услуги RISE STUDIO
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
            Мы — команда опытных разработчиков с успешными проектами за плечами.
            Берёмся за любую работу и делаем её качественно. С каждой услугой идёт
            подробная инструкция по работе с конечным продуктом.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const IconComponent = iconMap[service.icon] || Code;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group p-6 bg-rise-gray rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-rise-red/10 rounded-lg group-hover:bg-rise-red/20 transition-colors">
                      <IconComponent size={20} className="text-rise-red" />
                    </div>
                    <h3 className="font-bold">{service.title}</h3>
                  </div>
                  <p className="text-sm text-white/40 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-xs text-white/30"
                      >
                        <span className="w-1 h-1 rounded-full bg-rise-red flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-rise-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { value: "5+", label: "Лет опыта" },
              { value: "50+", label: "Выполненных проектов" },
              { value: "10K+", label: "Игроков" },
              { value: "15+", label: "Разработчиков" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-3xl sm:text-4xl font-black text-rise-red">
                  {stat.value}
                </div>
                <div className="text-xs text-white/40 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-black">Связаться с нами</h2>
            <p className="mt-4 text-white/40 text-sm">
              Заполните форму и мы свяжемся с вами через Telegram для обсуждения
              деталей.
            </p>
          </motion.div>

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
                  placeholder="Ваше имя"
                />
              </div>
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
            </div>

            <div>
              <label className="block text-xs text-white/40 mb-2">
                Интересующая услуга
              </label>
              <select
                required
                value={formData.service}
                onChange={(e) =>
                  setFormData({ ...formData, service: e.target.value })
                }
                className="w-full px-4 py-3 bg-rise-gray border border-white/5 rounded-xl text-sm focus:outline-none focus:border-rise-red/50 transition-colors text-white/70"
              >
                <option value="">Выберите услугу</option>
                {services.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs text-white/40 mb-2">
                Опишите что вам нужно
              </label>
              <textarea
                required
                rows={5}
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full px-4 py-3 bg-rise-gray border border-white/5 rounded-xl text-sm focus:outline-none focus:border-rise-red/50 transition-colors resize-none"
                placeholder="Подробно опишите вашу задачу: какая игра, какой функционал нужен, сроки..."
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
