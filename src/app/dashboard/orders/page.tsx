"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Download, FileText } from "lucide-react";

export default function OrdersPage() {
  return (
    <div className="pt-24">
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
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
            <h1 className="text-3xl font-black mb-8">Мои заказы</h1>
          </motion.div>

          {/* Empty state */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center py-16 bg-rise-gray rounded-2xl border border-white/5"
          >
            <FileText className="mx-auto mb-4 text-white/20" size={40} />
            <p className="text-white/40 mb-2">У вас пока нет заказов</p>
            <Link
              href="/products"
              className="text-sm text-rise-red hover:underline"
            >
              Перейти в каталог →
            </Link>
          </motion.div>

          {/* Sample order item (hidden, shows structure) */}
          <div className="hidden">
            <div className="p-6 bg-rise-gray rounded-2xl border border-white/5 mb-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-bold">Плагин экономики</h3>
                  <p className="text-xs text-white/30">Заказ #001 — 15.01.2024</p>
                </div>
                <span className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-xs">
                  Оплачен
                </span>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg text-xs hover:bg-white/10 transition-colors">
                  <Download size={12} />
                  Скачать товар
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg text-xs hover:bg-white/10 transition-colors">
                  <FileText size={12} />
                  PDF Инструкция
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
