"use client";

import { motion } from "framer-motion";
import { Gamepad2, Newspaper, ShoppingBag, Users } from "lucide-react";

const stats = [
  { label: "Проекты", value: "3", icon: Gamepad2, change: "+1 за месяц" },
  { label: "Новости", value: "5", icon: Newspaper, change: "+2 за неделю" },
  { label: "Товары", value: "3", icon: ShoppingBag, change: "Активных" },
  { label: "Пользователи", value: "0", icon: Users, change: "Всего" },
];

export default function AdminDashboard() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl font-black mb-8">Обзор</h1>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 bg-rise-gray rounded-2xl border border-white/5"
          >
            <stat.icon className="text-rise-red mb-3" size={24} />
            <div className="text-2xl font-black">{stat.value}</div>
            <div className="text-sm text-white/40 mt-1">{stat.label}</div>
            <div className="text-xs text-white/20 mt-2">{stat.change}</div>
          </motion.div>
        ))}
      </div>

      <div className="p-6 bg-rise-gray rounded-2xl border border-white/5">
        <h2 className="font-bold mb-4">Быстрые действия</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href="/admin/projects"
            className="px-4 py-3 bg-white/5 rounded-xl text-sm text-center hover:bg-white/10 transition-colors"
          >
            + Добавить проект
          </a>
          <a
            href="/admin/news"
            className="px-4 py-3 bg-white/5 rounded-xl text-sm text-center hover:bg-white/10 transition-colors"
          >
            + Добавить новость
          </a>
          <a
            href="/admin/products"
            className="px-4 py-3 bg-white/5 rounded-xl text-sm text-center hover:bg-white/10 transition-colors"
          >
            + Добавить товар
          </a>
        </div>
      </div>
    </div>
  );
}
