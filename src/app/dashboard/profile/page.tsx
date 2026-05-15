"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    fullName: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: save profile via API
  };

  return (
    <div className="pt-24">
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Личный кабинет
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl font-black mb-8">Мой профиль</h1>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs text-white/40 mb-2">
                  Логин
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-rise-gray border border-white/5 rounded-xl text-sm focus:outline-none focus:border-rise-red/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-white/40 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-rise-gray border border-white/5 rounded-xl text-sm focus:outline-none focus:border-rise-red/50 transition-colors"
                  disabled
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs text-white/40 mb-2">ФИО</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-rise-gray border border-white/5 rounded-xl text-sm focus:outline-none focus:border-rise-red/50 transition-colors"
                  placeholder="Фамилия Имя Отчество"
                />
              </div>
              <div>
                <label className="block text-xs text-white/40 mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-rise-gray border border-white/5 rounded-xl text-sm focus:outline-none focus:border-rise-red/50 transition-colors"
                  placeholder="+7 (999) 999-99-99"
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition-colors"
              >
                <Save size={16} />
                Сохранить изменения
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
