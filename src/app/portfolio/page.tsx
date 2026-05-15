"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { portfolioItems } from "@/lib/data";

export default function PortfolioPage() {
  const categories = ["Все", ...new Set(portfolioItems.map((p) => p.category))];
  const [activeCategory, setActiveCategory] = useState("Все");

  const filtered =
    activeCategory === "Все"
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === activeCategory);

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
              Портфолио
            </h1>
            <div className="mt-2 w-12 h-0.5 bg-rise-red mx-auto" />
            <p className="mt-6 text-white/40 max-w-2xl mx-auto">
              Наши работы говорят за нас. Ознакомьтесь с проектами, которые мы
              реализовали.
            </p>
          </motion.div>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-white text-black"
                    : "bg-rise-gray text-white/50 hover:bg-rise-light-gray"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group bg-rise-gray rounded-2xl border border-white/5 hover:border-white/10 overflow-hidden transition-all duration-300"
              >
                <div className="aspect-video bg-rise-dark relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-rise-red/5 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/10 text-4xl font-black">
                      R
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs text-rise-red">{item.category}</span>
                  <h3 className="font-bold mt-1">{item.title}</h3>
                  <p className="text-sm text-white/40 mt-2">
                    {item.description}
                  </p>
                  {item.projectUrl && (
                    <a
                      href={item.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-4 text-xs text-white/30 hover:text-rise-red transition-colors"
                    >
                      <ExternalLink size={12} />
                      Посмотреть
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
