"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Gamepad2,
  Newspaper,
  ShoppingBag,
  ArrowLeft,
} from "lucide-react";

const adminLinks = [
  { href: "/admin", label: "Обзор", icon: LayoutDashboard },
  { href: "/admin/projects", label: "Проекты", icon: Gamepad2 },
  { href: "/admin/news", label: "Новости", icon: Newspaper },
  { href: "/admin/products", label: "Товары", icon: ShoppingBag },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="pt-16 min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-rise-dark border-r border-white/5 p-4 hidden lg:block fixed top-16 bottom-0">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs text-white/30 hover:text-white transition-colors"
          >
            <ArrowLeft size={12} />
            На сайт
          </Link>
          <h2 className="text-lg font-black mt-2">Админ-панель</h2>
        </div>
        <nav className="space-y-1">
          {adminLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/admin" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                  isActive
                    ? "bg-white/5 text-white"
                    : "text-white/40 hover:text-white hover:bg-white/5"
                }`}
              >
                <link.icon size={16} />
                {link.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Mobile nav */}
      <div className="lg:hidden fixed top-16 left-0 right-0 z-40 bg-rise-dark border-b border-white/5 px-4 py-2 flex gap-2 overflow-x-auto">
        {adminLinks.map((link) => {
          const isActive =
            pathname === link.href ||
            (link.href !== "/admin" && pathname.startsWith(link.href));
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs whitespace-nowrap ${
                isActive
                  ? "bg-white/10 text-white"
                  : "text-white/40 hover:text-white"
              }`}
            >
              <link.icon size={12} />
              {link.label}
            </Link>
          );
        })}
      </div>

      {/* Content */}
      <div className="flex-1 lg:ml-64 pt-12 lg:pt-0">
        <div className="p-6 sm:p-8">{children}</div>
      </div>
    </div>
  );
}
