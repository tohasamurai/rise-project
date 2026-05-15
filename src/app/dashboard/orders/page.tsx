"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Download, FileText, Package } from "lucide-react";
import { sampleOrders } from "@/lib/data";

const statusLabels: Record<string, string> = {
  pending: "Ожидает оплаты",
  paid: "Оплачен",
  completed: "Выполнен",
  cancelled: "Отменён",
};

const statusColors: Record<string, string> = {
  pending: "bg-amber-500/10 text-amber-500",
  paid: "bg-blue-500/10 text-blue-500",
  completed: "bg-green-500/10 text-green-500",
  cancelled: "bg-rise-red/10 text-rise-red",
};

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

          {sampleOrders.length > 0 ? (
            <div className="space-y-4">
              {sampleOrders.map((order, i) => (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-rise-gray rounded-2xl border border-white/5 hover:border-white/10 transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-bold">{order.productTitle}</h3>
                      <p className="text-xs text-white/30 mt-1">
                        Заказ {order.id} —{" "}
                        {new Date(order.date).toLocaleDateString("ru-RU")}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold">
                        {order.price.toLocaleString("ru-RU")} ₽
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[order.status]}`}
                      >
                        {statusLabels[order.status]}
                      </span>
                    </div>
                  </div>
                  {(order.status === "completed" || order.status === "paid") && (
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
                  )}
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center py-16 bg-rise-gray rounded-2xl border border-white/5"
            >
              <Package className="mx-auto mb-4 text-white/20" size={40} />
              <p className="text-white/40 mb-2">У вас пока нет заказов</p>
              <Link
                href="/products"
                className="text-sm text-rise-red hover:underline"
              >
                Перейти в каталог →
              </Link>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
