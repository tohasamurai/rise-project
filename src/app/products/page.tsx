"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Filter } from "lucide-react";
import { sampleProducts, categoryLabels } from "@/lib/data";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = ["all", ...Object.keys(categoryLabels)];
  const filtered =
    activeCategory === "all"
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-24">
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
              Товары
            </h1>
            <div className="mt-2 w-12 h-0.5 bg-rise-red mx-auto" />
            <p className="mt-6 text-white/40 max-w-2xl mx-auto">
              Наши наработки: плагины, скрипты, 3D модели, боты и другие
              готовые решения для ваших проектов.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-hide">
            <Filter size={16} className="text-white/30 flex-shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? "bg-white text-black"
                    : "bg-rise-gray text-white/50 hover:bg-rise-light-gray"
                }`}
              >
                {cat === "all" ? "Все" : categoryLabels[cat]}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={`/products/${product.id}`}>
                  <div className="group bg-rise-gray rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 overflow-hidden">
                    <div className="aspect-video bg-rise-dark relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-rise-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <ShoppingCart
                          size={32}
                          className="text-white/10 group-hover:text-white/20 transition-colors"
                        />
                      </div>
                    </div>
                    <div className="p-6">
                      <span className="text-xs text-rise-red font-medium">
                        {categoryLabels[product.category]}
                      </span>
                      <h3 className="font-bold mt-1 group-hover:text-white transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-sm text-white/40 mt-2 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-lg font-black">
                          {product.price.toLocaleString("ru-RU")} ₽
                        </span>
                        <span className="text-xs text-white/30 group-hover:text-rise-red transition-colors">
                          Подробнее →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-white/30">
              В этой категории пока нет товаров
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
