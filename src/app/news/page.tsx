"use client";

import { motion } from "framer-motion";
import { newsItems } from "@/lib/data";

const typeColors = {
  milestone: "bg-rise-red",
  update: "bg-blue-500",
  announcement: "bg-amber-500",
};

const typeLabels = {
  milestone: "Веха",
  update: "Обновление",
  announcement: "Объявление",
};

export default function NewsPage() {
  return (
    <div className="pt-24">
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
              Новости
            </h1>
            <div className="mt-2 w-12 h-0.5 bg-rise-red mx-auto" />
            <p className="mt-6 text-white/40">
              Следите за развитием наших проектов
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-0.5 bg-white/5" />

            <div className="space-y-12">
              {newsItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex items-start gap-8 ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10">
                    <div
                      className={`w-3 h-3 rounded-full ${typeColors[item.type]} ring-4 ring-black`}
                    />
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] ${
                      i % 2 === 0 ? "sm:pr-8" : "sm:pl-8"
                    }`}
                  >
                    <div className="p-6 bg-rise-gray rounded-2xl border border-white/5 hover:border-white/10 transition-all">
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-medium text-white ${typeColors[item.type]}`}
                        >
                          {typeLabels[item.type]}
                        </span>
                        <span className="text-xs text-white/30">
                          {new Date(item.date).toLocaleDateString("ru-RU", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <h3 className="font-bold">{item.title}</h3>
                      <p className="text-sm text-white/40 mt-2 leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
