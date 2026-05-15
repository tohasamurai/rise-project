"use client";

import { motion } from "framer-motion";
import { use } from "react";
import Link from "next/link";
import { ArrowLeft, ShoppingCart, FileText, Shield } from "lucide-react";
import { sampleProducts, categoryLabels } from "@/lib/data";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = sampleProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-black mb-4">Товар не найден</h1>
          <Link href="/products" className="text-rise-red hover:underline">
            ← Вернуться к каталогу
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Каталог
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="aspect-square bg-rise-gray rounded-2xl border border-white/5 flex items-center justify-center"
            >
              <ShoppingCart size={64} className="text-white/10" />
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-xs text-rise-red font-medium uppercase tracking-wider">
                {categoryLabels[product.category]}
              </span>
              <h1 className="text-3xl font-black mt-2">{product.title}</h1>
              <p className="text-white/50 mt-4 leading-relaxed">
                {product.fullDescription}
              </p>

              <div className="mt-8 p-4 bg-rise-gray rounded-xl border border-white/5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/40">Цена</span>
                  <span className="text-2xl font-black">
                    {product.price.toLocaleString("ru-RU")} ₽
                  </span>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <button className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition-colors">
                  <ShoppingCart size={18} />
                  Купить
                </button>
                <p className="text-xs text-white/30 text-center">
                  Для покупки необходима регистрация и принятие оферты
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <FileText size={16} className="text-rise-red mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Инструкция</p>
                    <p className="text-xs text-white/40">
                      К каждому товару прилагается PDF инструкция
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield size={16} className="text-rise-red mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Гарантия</p>
                    <p className="text-xs text-white/40">
                      Поддержка и обновления после покупки
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
