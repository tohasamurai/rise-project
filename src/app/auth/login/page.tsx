"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { LogIn, Mail, Lock } from "lucide-react";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    // TODO: integrate with NextAuth signIn
    setError("Авторизация будет доступна после подключения базы данных");
  };

  return (
    <div className="pt-24 min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black">Вход</h1>
          <p className="text-sm text-white/40 mt-2">
            Войдите в личный кабинет RISE PROJECT
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 bg-rise-red/10 border border-rise-red/20 rounded-xl text-sm text-rise-red">
              {error}
            </div>
          )}

          <div>
            <label className="block text-xs text-white/40 mb-2">Email</label>
            <div className="relative">
              <Mail
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
              />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full pl-11 pr-4 py-3 bg-rise-gray border border-white/5 rounded-xl text-sm focus:outline-none focus:border-rise-red/50 transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs text-white/40 mb-2">Пароль</label>
            <div className="relative">
              <Lock
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
              />
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full pl-11 pr-4 py-3 bg-rise-gray border border-white/5 rounded-xl text-sm focus:outline-none focus:border-rise-red/50 transition-colors"
                placeholder="Ваш пароль"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition-colors"
          >
            <LogIn size={16} />
            Войти
          </button>
        </form>

        <p className="text-center text-sm text-white/30 mt-6">
          Нет аккаунта?{" "}
          <Link href="/auth/register" className="text-rise-red hover:underline">
            Регистрация
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
