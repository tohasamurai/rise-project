"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Pencil, Trash2, Archive } from "lucide-react";

interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: string;
  type: "milestone" | "update" | "announcement";
  isArchived: boolean;
}

const initialNews: NewsItem[] = [
  {
    id: "1",
    title: "Запуск RISE PROJECT",
    content: "Официальный запуск межпроектного пространства.",
    date: "2024-12-01",
    type: "milestone",
    isArchived: false,
  },
  {
    id: "2",
    title: "Открытие RISE STUDIO",
    content: "Запуск студии разработки.",
    date: "2024-11-15",
    type: "milestone",
    isArchived: false,
  },
];

export default function AdminNewsPage() {
  const [news, setNews] = useState<NewsItem[]>(initialNews);
  const [editing, setEditing] = useState<NewsItem | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    title: "",
    content: "",
    date: new Date().toISOString().split("T")[0],
    type: "update" as NewsItem["type"],
  });

  const handleNew = () => {
    setEditing(null);
    setForm({
      title: "",
      content: "",
      date: new Date().toISOString().split("T")[0],
      type: "update",
    });
    setShowForm(true);
  };

  const handleEdit = (item: NewsItem) => {
    setEditing(item);
    setForm({
      title: item.title,
      content: item.content,
      date: item.date,
      type: item.type,
    });
    setShowForm(true);
  };

  const handleSave = () => {
    if (editing) {
      setNews(news.map((n) => (n.id === editing.id ? { ...n, ...form } : n)));
    } else {
      setNews([
        ...news,
        { id: `news-${Date.now()}`, ...form, isArchived: false },
      ]);
    }
    setShowForm(false);
    setEditing(null);
  };

  const handleDelete = (id: string) => {
    setNews(news.filter((n) => n.id !== id));
  };

  const toggleArchive = (id: string) => {
    setNews(
      news.map((n) => (n.id === id ? { ...n, isArchived: !n.isArchived } : n))
    );
  };

  const typeLabels = {
    milestone: "Веха",
    update: "Обновление",
    announcement: "Объявление",
  };

  const typeColors = {
    milestone: "bg-rise-red",
    update: "bg-blue-500",
    announcement: "bg-amber-500",
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-black"
        >
          Новости
        </motion.h1>
        <button
          onClick={handleNew}
          className="flex items-center gap-2 px-4 py-2 bg-white text-black font-medium rounded-xl text-sm hover:bg-white/90 transition-colors"
        >
          <Plus size={16} />
          Добавить
        </button>
      </div>

      {showForm && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mb-8 p-6 bg-rise-gray rounded-2xl border border-white/5"
        >
          <h2 className="font-bold mb-4">
            {editing ? "Редактирование" : "Новая новость"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-white/40 mb-1">
                Заголовок
              </label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full px-3 py-2 bg-rise-dark border border-white/5 rounded-lg text-sm focus:outline-none focus:border-rise-red/50"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-white/40 mb-1">
                  Дата
                </label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full px-3 py-2 bg-rise-dark border border-white/5 rounded-lg text-sm focus:outline-none focus:border-rise-red/50"
                />
              </div>
              <div>
                <label className="block text-xs text-white/40 mb-1">Тип</label>
                <select
                  value={form.type}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      type: e.target.value as NewsItem["type"],
                    })
                  }
                  className="w-full px-3 py-2 bg-rise-dark border border-white/5 rounded-lg text-sm focus:outline-none focus:border-rise-red/50 text-white/70"
                >
                  <option value="update">Обновление</option>
                  <option value="milestone">Веха</option>
                  <option value="announcement">Объявление</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs text-white/40 mb-1">
                Содержание
              </label>
              <textarea
                rows={4}
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
                className="w-full px-3 py-2 bg-rise-dark border border-white/5 rounded-lg text-sm focus:outline-none focus:border-rise-red/50 resize-none"
              />
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-white text-black font-medium rounded-lg text-sm hover:bg-white/90 transition-colors"
            >
              Сохранить
            </button>
            <button
              onClick={() => {
                setShowForm(false);
                setEditing(null);
              }}
              className="px-4 py-2 bg-white/5 rounded-lg text-sm hover:bg-white/10 transition-colors"
            >
              Отмена
            </button>
          </div>
        </motion.div>
      )}

      <div className="space-y-3">
        {news.map((item) => (
          <div
            key={item.id}
            className={`flex items-center justify-between p-4 bg-rise-gray rounded-xl border border-white/5 ${
              item.isArchived ? "opacity-50" : ""
            }`}
          >
            <div className="flex items-center gap-4">
              <span
                className={`w-2 h-2 rounded-full flex-shrink-0 ${typeColors[item.type]}`}
              />
              <div>
                <div className="font-bold text-sm">{item.title}</div>
                <div className="text-xs text-white/30 flex items-center gap-2">
                  <span>{typeLabels[item.type]}</span>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>
              </div>
              {item.isArchived && (
                <span className="px-2 py-0.5 bg-white/5 rounded text-[10px] text-white/30">
                  Архив
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleArchive(item.id)}
                className="p-2 text-white/30 hover:text-amber-500 transition-colors"
              >
                <Archive size={14} />
              </button>
              <button
                onClick={() => handleEdit(item)}
                className="p-2 text-white/30 hover:text-white transition-colors"
              >
                <Pencil size={14} />
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="p-2 text-white/30 hover:text-rise-red transition-colors"
              >
                <Trash2 size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
