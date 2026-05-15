"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { sampleProducts, categoryLabels } from "@/lib/data";
import type { Product, ProductCategory } from "@/types";

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>(sampleProducts);
  const [editing, setEditing] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    fullDescription: "",
    price: 0,
    category: "plugins" as ProductCategory,
    isActive: true,
  });

  const handleNew = () => {
    setEditing(null);
    setForm({
      title: "",
      description: "",
      fullDescription: "",
      price: 0,
      category: "plugins",
      isActive: true,
    });
    setShowForm(true);
  };

  const handleEdit = (product: Product) => {
    setEditing(product);
    setForm({
      title: product.title,
      description: product.description,
      fullDescription: product.fullDescription,
      price: product.price,
      category: product.category,
      isActive: product.isActive,
    });
    setShowForm(true);
  };

  const handleSave = () => {
    if (editing) {
      setProducts(
        products.map((p) =>
          p.id === editing.id
            ? {
                ...p,
                ...form,
                updatedAt: new Date().toISOString(),
              }
            : p
        )
      );
    } else {
      const newProduct: Product = {
        id: `product-${Date.now()}`,
        ...form,
        imageUrl: "",
        images: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      setProducts([...products, newProduct]);
    }
    setShowForm(false);
    setEditing(null);
  };

  const handleDelete = (id: string) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-black"
        >
          Товары
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
            {editing ? "Редактирование" : "Новый товар"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-white/40 mb-1">
                Название
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
                  Цена (₽)
                </label>
                <input
                  type="number"
                  value={form.price}
                  onChange={(e) =>
                    setForm({ ...form, price: parseInt(e.target.value) || 0 })
                  }
                  className="w-full px-3 py-2 bg-rise-dark border border-white/5 rounded-lg text-sm focus:outline-none focus:border-rise-red/50"
                />
              </div>
              <div>
                <label className="block text-xs text-white/40 mb-1">
                  Категория
                </label>
                <select
                  value={form.category}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      category: e.target.value as ProductCategory,
                    })
                  }
                  className="w-full px-3 py-2 bg-rise-dark border border-white/5 rounded-lg text-sm focus:outline-none focus:border-rise-red/50 text-white/70"
                >
                  {Object.entries(categoryLabels).map(([key, label]) => (
                    <option key={key} value={key}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs text-white/40 mb-1">
                Краткое описание
              </label>
              <input
                type="text"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                className="w-full px-3 py-2 bg-rise-dark border border-white/5 rounded-lg text-sm focus:outline-none focus:border-rise-red/50"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs text-white/40 mb-1">
                Полное описание
              </label>
              <textarea
                rows={4}
                value={form.fullDescription}
                onChange={(e) =>
                  setForm({ ...form, fullDescription: e.target.value })
                }
                className="w-full px-3 py-2 bg-rise-dark border border-white/5 rounded-lg text-sm focus:outline-none focus:border-rise-red/50 resize-none"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <label className="flex items-center gap-2 text-sm text-white/50 cursor-pointer">
              <input
                type="checkbox"
                checked={form.isActive}
                onChange={(e) =>
                  setForm({ ...form, isActive: e.target.checked })
                }
                className="accent-rise-red"
              />
              Активный
            </label>
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
        {products.map((product) => (
          <div
            key={product.id}
            className={`flex items-center justify-between p-4 bg-rise-gray rounded-xl border border-white/5 ${
              !product.isActive ? "opacity-50" : ""
            }`}
          >
            <div>
              <div className="font-bold text-sm">{product.title}</div>
              <div className="text-xs text-white/30 flex items-center gap-2">
                <span>{categoryLabels[product.category]}</span>
                <span>•</span>
                <span>{product.price.toLocaleString("ru-RU")} ₽</span>
                {!product.isActive && (
                  <>
                    <span>•</span>
                    <span className="text-amber-500">Неактивен</span>
                  </>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleEdit(product)}
                className="p-2 text-white/30 hover:text-white transition-colors"
              >
                <Pencil size={14} />
              </button>
              <button
                onClick={() => handleDelete(product.id)}
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
