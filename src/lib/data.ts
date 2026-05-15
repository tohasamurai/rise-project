import { Project, Service, PortfolioItem, Product } from "@/types";

export const projects: Project[] = [
  {
    id: "rise-squad",
    title: "RISE SQUAD",
    game: "Squad",
    description:
      "Масштабный проект в Squad. Тактический реализм, слаженная команда и незабываемые сражения. Один из крупнейших русскоязычных серверов.",
    shortDescription: "Тактический реализм в Squad",
    imageUrl: "/images/rise-squad.jpg",
    siteUrl: "https://rise-s.ru/",
    discordUrl: "https://discord.gg/ru-rise-squad-1068572760495902771",
    colorScheme: "#c41e1e",
    isArchived: false,
    order: 1,
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
  },
  {
    id: "rise-rust",
    title: "RISE RUST",
    game: "Rust",
    description:
      "Проект серверов в Rust. Уникальный геймплей, авторские плагины и неповторимая атмосфера выживания.",
    shortDescription: "Выживание в Rust",
    imageUrl: "/images/rise-rust.jpg",
    siteUrl: "https://riserust.com",
    discordUrl: "https://dsc.gg/riserust",
    colorScheme: "#e67e22",
    isArchived: false,
    order: 2,
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
  },
  {
    id: "rise-rdr2",
    title: "RISE RDR2",
    game: "Red Dead Redemption 2",
    description:
      "Ролевой проект в мире Дикого Запада. Глубокое погружение, живой мир и уникальные истории каждого игрока.",
    shortDescription: "Ролевой проект в RDR2",
    imageUrl: "/images/rise-rdr2.jpg",
    siteUrl: "#",
    colorScheme: "#8b7355",
    isArchived: true,
    order: 3,
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
  },
];

export const services: Service[] = [
  {
    id: "plugins",
    title: "Разработка плагинов",
    description:
      "Создаём уникальные плагины для игровых серверов любой сложности. От простых утилит до масштабных игровых систем.",
    icon: "Code",
    features: [
      "Плагины для Rust, Squad, и других игр",
      "Оптимизация и отладка",
      "Документация и поддержка",
      "Интеграция с существующими системами",
    ],
  },
  {
    id: "discord",
    title: "Дизайн для Discord",
    description:
      "Полное оформление Discord серверов: баннеры, иконки, роли, эмодзи и стикеры в едином стиле.",
    icon: "MessageCircle",
    features: [
      "Баннеры и иконки",
      "Настройка ролей и каналов",
      "Кастомные эмодзи и стикеры",
      "Автоматизация ботами",
    ],
  },
  {
    id: "web",
    title: "Веб-дизайн и разработка",
    description:
      "Современные сайты с платёжными шлюзами, личными кабинетами и уникальным дизайном.",
    icon: "Globe",
    features: [
      "Адаптивный дизайн",
      "Платёжные системы",
      "Личные кабинеты",
      "SEO оптимизация",
    ],
  },
  {
    id: "bots",
    title: "Боты для Discord",
    description:
      "Разработка Discord ботов любой сложности: модерация, музыка, экономика, мини-игры и интеграции.",
    icon: "Bot",
    features: [
      "Модерация и администрирование",
      "Системы уровней и экономики",
      "Интеграция с игровыми серверами",
      "Панель управления",
    ],
  },
  {
    id: "3d",
    title: "3D Модели",
    description:
      "Создание 3D моделей для игр: оружие, техника, здания, персонажи и окружение.",
    icon: "Box",
    features: [
      "Игровые ассеты",
      "Low-poly и high-poly модели",
      "Текстурирование",
      "Анимация",
    ],
  },
  {
    id: "sysadmin",
    title: "Системное администрирование",
    description:
      "Настройка серверов, техническое обслуживание и обеспечение бесперебойной работы проекта.",
    icon: "Server",
    features: [
      "Настройка VPS/VDS",
      "Мониторинг и бэкапы",
      "Оптимизация производительности",
      "Защита от DDoS",
    ],
  },
  {
    id: "turnkey",
    title: "Проект под ключ",
    description:
      "Полная сборка игрового проекта: от идеи до запуска. Сервер, сайт, Discord, плагины — всё включено.",
    icon: "Rocket",
    features: [
      "Полная сборка сервера",
      "Веб-сайт с ЛК",
      "Discord сервер",
      "Плагины и настройка",
    ],
  },
  {
    id: "mods",
    title: "Игровые модификации",
    description:
      "Создание модов для Steam Workshop и игровых серверов. Уникальный контент для вашего проекта.",
    icon: "Puzzle",
    features: [
      "Моды для Steam Workshop",
      "Кастомный контент",
      "Балансировка",
      "Тестирование и отладка",
    ],
  },
  {
    id: "smm",
    title: "Продвижение проекта (SMM)",
    description:
      "Продвижение игровых проектов в социальных сетях, создание контента и привлечение аудитории.",
    icon: "TrendingUp",
    features: [
      "Стратегия продвижения",
      "Контент-план",
      "Работа с сообществом",
      "Аналитика и отчёты",
    ],
  },
  {
    id: "hosting",
    title: "Скидки на хостинг",
    description:
      "Сотрудничаем с лучшими хостинг-провайдерами и предоставляем эксклюзивные скидки для наших клиентов.",
    icon: "HardDrive",
    features: [
      "Партнёрские скидки",
      "Подбор оптимального тарифа",
      "Миграция проектов",
      "Техподдержка",
    ],
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "RISE SQUAD — Полный проект",
    description: "Игровой сервер Squad с сайтом, Discord и полной инфраструктурой",
    imageUrl: "/images/portfolio-squad.jpg",
    category: "Проект под ключ",
    projectUrl: "https://rise-s.ru/",
  },
  {
    id: "2",
    title: "RISE RUST — Игровой сервер",
    description: "Сервер Rust с уникальными плагинами и системами",
    imageUrl: "/images/portfolio-rust.jpg",
    category: "Проект под ключ",
    projectUrl: "https://riserust.com",
  },
  {
    id: "3",
    title: "Магазин RISE SHOP",
    description: "Веб-магазин для игровых проектов с интеграцией ЮKassa",
    imageUrl: "/images/portfolio-shop.jpg",
    category: "Веб-разработка",
  },
  {
    id: "4",
    title: "Discord бот RISE",
    description: "Мультифункциональный бот с системой модерации и экономики",
    imageUrl: "/images/portfolio-bot.jpg",
    category: "Разработка ботов",
  },
  {
    id: "5",
    title: "Дизайн Discord RISE RUST",
    description: "Полное оформление Discord сервера в стиле RISE",
    imageUrl: "/images/portfolio-discord.jpg",
    category: "Дизайн",
  },
  {
    id: "6",
    title: "3D модели для Rust",
    description: "Набор кастомных моделей оружия и предметов для Rust",
    imageUrl: "/images/portfolio-3d.jpg",
    category: "3D Моделирование",
  },
];

export const sampleProducts: Product[] = [
  {
    id: "1",
    title: "Плагин экономики для Rust",
    description: "Полноценная система экономики для вашего Rust сервера",
    fullDescription:
      "Мощный плагин экономики для Rust серверов. Включает систему банков, торговых площадок, аукционов и переводов между игроками. Полностью настраиваемый через конфигурационный файл.",
    price: 2500,
    category: "plugins",
    imageUrl: "/images/product-economy.jpg",
    images: [],
    isActive: true,
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
  },
  {
    id: "2",
    title: "Discord бот модерации",
    description: "Бот для модерации и управления Discord сервером",
    fullDescription:
      "Многофункциональный Discord бот с системой предупреждений, мутов, банов, автомодерацией и логированием. Включает панель управления через веб-интерфейс.",
    price: 5000,
    category: "discord-bots",
    imageUrl: "/images/product-bot.jpg",
    images: [],
    isActive: true,
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
  },
  {
    id: "3",
    title: "Пак 3D моделей оружия",
    description: "Набор из 10 уникальных моделей оружия для Rust",
    fullDescription:
      "Коллекция из 10 высококачественных 3D моделей оружия для Rust. Каждая модель включает текстуры в 4K разрешении и LOD-уровни для оптимальной производительности.",
    price: 8000,
    category: "3d-models",
    imageUrl: "/images/product-3d.jpg",
    images: [],
    isActive: true,
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
  },
];

export const categoryLabels: Record<string, string> = {
  plugins: "Плагины",
  scripts: "Скрипты",
  websites: "Сайты",
  "3d-models": "3D Модели",
  modifications: "Модификации",
  "turnkey-projects": "Проекты под ключ",
  "discord-bots": "Боты для Discord",
  "discord-design": "Дизайн Discord",
};
