"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Pencil, Trash2, Archive, ExternalLink } from "lucide-react";
import { projects as initialProjects } from "@/lib/data";
import type { Project } from "@/types";

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [editing, setEditing] = useState<Project | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    title: "",
    game: "",
    description: "",
    shortDescription: "",
    siteUrl: "",
    discordUrl: "",
    colorScheme: "#c41e1e",
    isArchived: false,
  });

  const handleNew = () => {
    setEditing(null);
    setForm({
      title: "",
      game: "",
      description: "",
      shortDescription: "",
      siteUrl: "",
      discordUrl: "",
      colorScheme: "#c41e1e",
      isArchived: false,
    });
    setShowForm(true);
  };

  const handleEdit = (project: Project) => {
    setEditing(project);
    setForm({
      title: project.title,
      game: project.game,
      description: project.description,
      shortDescription: project.shortDescription,
      siteUrl: project.siteUrl,
      discordUrl: project.discordUrl || "",
      colorScheme: project.colorScheme,
      isArchived: project.isArchived,
    });
    setShowForm(true);
  };

  const handleSave = () => {
    if (editing) {
      setProjects(
        projects.map((p) =>
          p.id === editing.id
            ? { ...p, ...form, updatedAt: new Date().toISOString() }
            : p
        )
      );
    } else {
      const newProject: Project = {
        id: `project-${Date.now()}`,
        ...form,
        imageUrl: "",
        order: projects.length + 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      setProjects([...projects, newProject]);
    }
    setShowForm(false);
    setEditing(null);
  };

  const handleDelete = (id: string) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  const toggleArchive = (id: string) => {
    setProjects(
      projects.map((p) =>
        p.id === id ? { ...p, isArchived: !p.isArchived } : p
      )
    );
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-black"
        >
          Проекты
        </motion.h1>
        <button
          onClick={handleNew}
          className="flex items-center gap-2 px-4 py-2 bg-white text-black font-medium rounded-xl text-sm hover:bg-white/90 transition-colors"
        >
          <Plus size={16} />
          Добавить
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mb-8 p-6 bg-rise-gray rounded-2xl border border-white/5"
        >
          <h2 className="font-bold mb-4">
            {editing ? "Редактирование" : "Новый проект"}
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
            <div>
              <label className="block text-xs text-white/40 mb-1">Игра</label>
              <input
                type="text"
                value={form.game}
                onChange={(e) => setForm({ ...form, game: e.target.value })}
                className="w-full px-3 py-2 bg-rise-dark border border-white/5 rounded-lg text-sm focus:outline-none focus:border-rise-red/50"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs text-white/40 mb-1">
                Описание
              </label>
              <textarea
                rows={3}
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                className="w-full px-3 py-2 bg-rise-dark border border-white/5 rounded-lg text-sm focus:outline-none focus:border-rise-red/50 resize-none"
              />
            </div>
            <div>
              <label className="block text-xs text-white/40 mb-1">
                Краткое описание
              </label>
              <input
                type="text"
                value={form.shortDescription}
                onChange={(e) =>
                  setForm({ ...form, shortDescription: e.target.value })
                }
                className="w-full px-3 py-2 bg-rise-dark border border-white/5 rounded-lg text-sm focus:outline-none focus:border-rise-red/50"
              />
            </div>
            <div>
              <label className="block text-xs text-white/40 mb-1">
                Цвет
              </label>
              <input
                type="color"
                value={form.colorScheme}
                onChange={(e) =>
                  setForm({ ...form, colorScheme: e.target.value })
                }
                className="w-12 h-8 bg-transparent cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-xs text-white/40 mb-1">
                Ссылка на сайт
              </label>
              <input
                type="url"
                value={form.siteUrl}
                onChange={(e) => setForm({ ...form, siteUrl: e.target.value })}
                className="w-full px-3 py-2 bg-rise-dark border border-white/5 rounded-lg text-sm focus:outline-none focus:border-rise-red/50"
              />
            </div>
            <div>
              <label className="block text-xs text-white/40 mb-1">
                Discord
              </label>
              <input
                type="url"
                value={form.discordUrl}
                onChange={(e) =>
                  setForm({ ...form, discordUrl: e.target.value })
                }
                className="w-full px-3 py-2 bg-rise-dark border border-white/5 rounded-lg text-sm focus:outline-none focus:border-rise-red/50"
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

      {/* Projects list */}
      <div className="space-y-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`flex items-center justify-between p-4 bg-rise-gray rounded-xl border border-white/5 ${
              project.isArchived ? "opacity-50" : ""
            }`}
          >
            <div className="flex items-center gap-4">
              <div
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: project.colorScheme }}
              />
              <div>
                <div className="font-bold text-sm">{project.title}</div>
                <div className="text-xs text-white/30">{project.game}</div>
              </div>
              {project.isArchived && (
                <span className="px-2 py-0.5 bg-white/5 rounded text-[10px] text-white/30">
                  Архив
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              {project.siteUrl && project.siteUrl !== "#" && (
                <a
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-white/30 hover:text-white transition-colors"
                >
                  <ExternalLink size={14} />
                </a>
              )}
              <button
                onClick={() => toggleArchive(project.id)}
                className="p-2 text-white/30 hover:text-amber-500 transition-colors"
                title={project.isArchived ? "Разархивировать" : "Архивировать"}
              >
                <Archive size={14} />
              </button>
              <button
                onClick={() => handleEdit(project)}
                className="p-2 text-white/30 hover:text-white transition-colors"
              >
                <Pencil size={14} />
              </button>
              <button
                onClick={() => handleDelete(project.id)}
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
