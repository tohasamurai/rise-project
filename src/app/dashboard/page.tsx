"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Package, User, LogOut, ShoppingBag } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="pt-24">
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl font-black mb-2">Личный кабинет</h1>
            <p className="text-white/40 text-sm mb-10">
              Управляйте своими заказами и профилем
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/dashboard/orders">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="p-6 bg-rise-gray rounded-2xl border border-white/5 hover:border-white/10 transition-all group"
              >
                <Package
                  className="text-rise-red mb-4 group-hover:scale-110 transition-transform"
                  size={28}
                />
                <h3 className="font-bold">Мои заказы</h3>
                <p className="text-sm text-white/40 mt-2">
                  Просмотр заказов, скачивание товаров и инструкций
                </p>
              </motion.div>
            </Link>

            <Link href="/dashboard/profile">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="p-6 bg-rise-gray rounded-2xl border border-white/5 hover:border-white/10 transition-all group"
              >
                <User
                  className="text-rise-red mb-4 group-hover:scale-110 transition-transform"
                  size={28}
                />
                <h3 className="font-bold">Мой профиль</h3>
                <p className="text-sm text-white/40 mt-2">
                  Редактирование данных профиля
                </p>
              </motion.div>
            </Link>

            <Link href="/products">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="p-6 bg-rise-gray rounded-2xl border border-white/5 hover:border-white/10 transition-all group"
              >
                <ShoppingBag
                  className="text-rise-red mb-4 group-hover:scale-110 transition-transform"
                  size={28}
                />
                <h3 className="font-bold">Каталог товаров</h3>
                <p className="text-sm text-white/40 mt-2">
                  Перейти к каталогу наших продуктов
                </p>
              </motion.div>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <button className="inline-flex items-center gap-2 text-sm text-white/30 hover:text-rise-red transition-colors">
              <LogOut size={14} />
              Выйти из аккаунта
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
