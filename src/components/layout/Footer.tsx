import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-rise-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="mb-4">
              <span className="text-2xl font-black tracking-tight">RISE</span>
              <span className="text-xs font-light tracking-[0.3em] text-white/40 ml-2 uppercase">
                project
              </span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed">
              Самый смелый проект игровых серверов. Высококачественный сервис для
              игроков.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4">
              Проекты
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://rise-s.ru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/40 hover:text-white transition-colors"
                >
                  RISE SQUAD
                </a>
              </li>
              <li>
                <a
                  href="https://riserust.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/40 hover:text-white transition-colors"
                >
                  RISE RUST
                </a>
              </li>
              <li>
                <span className="text-sm text-white/20">
                  RISE RDR2 (архив)
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4">
              Навигация
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-white/40 hover:text-white transition-colors"
                >
                  Услуги
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm text-white/40 hover:text-white transition-colors"
                >
                  Товары
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-sm text-white/40 hover:text-white transition-colors"
                >
                  Портфолио
                </Link>
              </li>
              <li>
                <Link
                  href="/join"
                  className="text-sm text-white/40 hover:text-white transition-colors"
                >
                  В команду
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4">
              Ссылки
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://vk.com/risegameproject"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/40 hover:text-white transition-colors"
                >
                  VK
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@rise_team"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/40 hover:text-white transition-colors"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://boosty.to/rise-s.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/40 hover:text-white transition-colors"
                >
                  Boosty
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} RISE PROJECT. Все права защищены.
          </p>
          <div className="flex items-center gap-1">
            <span className="text-xs text-white/20">Powered by</span>
            <span className="text-xs font-bold text-white/40">
              RISE STUDIO
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
