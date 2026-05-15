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
    priceFrom: 3000,
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
    priceFrom: 2000,
  },
  {
    id: "web",
    title: "Веб-дизайн и разработка",
    description:
      "Современные сайты с платёжными шлюзами, личными кабинетами и уникальным дизайном.",
    icon: "Globe",
    features: [
      "Адаптивный дизайн",
      "Платёжные системы (ЮKassa)",
      "Личные кабинеты",
      "SEO оптимизация",
    ],
    priceFrom: 15000,
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
    priceFrom: 5000,
  },
  {
    id: "3d",
    title: "3D Модели на заказ",
    description:
      "Создание 3D моделей для игр: оружие, техника, здания, персонажи и окружение.",
    icon: "Box",
    features: [
      "Игровые ассеты",
      "Low-poly и high-poly модели",
      "Текстурирование",
      "Анимация",
    ],
    priceFrom: 4000,
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
    priceFrom: 3000,
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
    priceFrom: 50000,
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
    priceFrom: 5000,
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
    priceFrom: 10000,
  },
  {
    id: "hosting",
    title: "Скидки на хостинг",
    description:
      "Сотрудничаем с лучшими хостинг-провайдерами и предоставляем эксклюзивные скидки для наших клиентов.",
    icon: "HardDrive",
    features: [
      "Партнёрские скидки до 30%",
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
    description:
      "Игровой сервер Squad с сайтом, Discord и полной инфраструктурой. Один из крупнейших русскоязычных серверов.",
    imageUrl: "/images/portfolio-squad.jpg",
    category: "Проект под ключ",
    projectUrl: "https://rise-s.ru/",
  },
  {
    id: "2",
    title: "RISE RUST — Игровой сервер",
    description:
      "Сервер Rust с уникальными плагинами, системой экономики и активным сообществом.",
    imageUrl: "/images/portfolio-rust.jpg",
    category: "Проект под ключ",
    projectUrl: "https://riserust.com",
  },
  {
    id: "3",
    title: "Магазин RISE SHOP",
    description:
      "Веб-магазин для игровых проектов с интеграцией ЮKassa, личными кабинетами и автоматической выдачей.",
    imageUrl: "/images/portfolio-shop.jpg",
    category: "Веб-разработка",
  },
  {
    id: "4",
    title: "Discord бот RISE",
    description:
      "Мультифункциональный бот с системой модерации, экономики, уровней и интеграцией с игровыми серверами.",
    imageUrl: "/images/portfolio-bot.jpg",
    category: "Разработка ботов",
  },
  {
    id: "5",
    title: "Дизайн Discord RISE RUST",
    description:
      "Полное оформление Discord сервера: баннеры, иконки, эмодзи, роли в едином стиле проекта.",
    imageUrl: "/images/portfolio-discord.jpg",
    category: "Дизайн",
  },
  {
    id: "6",
    title: "3D модели для Rust",
    description:
      "Набор кастомных моделей оружия и предметов для Rust с текстурами в 4K.",
    imageUrl: "/images/portfolio-3d.jpg",
    category: "3D Моделирование",
  },
  {
    id: "7",
    title: "Плагин экономики Rust",
    description:
      "Система банков, торговых площадок, аукционов и переводов между игроками. Полностью настраиваемый.",
    imageUrl: "/images/portfolio-economy.jpg",
    category: "Плагины",
  },
  {
    id: "8",
    title: "Античит система",
    description:
      "Кастомная система защиты от читеров с аналитикой и автоматическими банами.",
    imageUrl: "/images/portfolio-anticheat.jpg",
    category: "Плагины",
  },
  {
    id: "9",
    title: "Лендинг RISE RDR2",
    description:
      "Промо-сайт для ролевого проекта в мире RDR2 с анимациями и атмосферным дизайном.",
    imageUrl: "/images/portfolio-rdr2.jpg",
    category: "Веб-разработка",
  },
];

export const sampleProducts: Product[] = [
  {
    id: "1",
    title: "Плагин экономики для Rust",
    description: "Полноценная система экономики для вашего Rust сервера",
    fullDescription:
      "Мощный плагин экономики для Rust серверов. Включает систему банков, торговых площадок, аукционов и переводов между игроками. Полностью настраиваемый через конфигурационный файл. Поддержка нескольких валют, история транзакций.",
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
      "Многофункциональный Discord бот с системой предупреждений, мутов, банов, автомодерацией и логированием. Включает панель управления через веб-интерфейс. Настраиваемые фильтры сообщений, антиспам.",
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
      "Коллекция из 10 высококачественных 3D моделей оружия для Rust. Каждая модель включает текстуры в 4K разрешении и LOD-уровни для оптимальной производительности. Готовы к установке на сервер.",
    price: 8000,
    category: "3d-models",
    imageUrl: "/images/product-3d.jpg",
    images: [],
    isActive: true,
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
  },
  {
    id: "4",
    title: "Скрипт автовайпа",
    description: "Автоматический вайп сервера Rust по расписанию",
    fullDescription:
      "Скрипт для автоматического вайпа сервера Rust. Настраиваемое расписание, выборочный вайп (карта, blueprints, данные игроков). Уведомления в Discord, бэкапы перед вайпом, логирование.",
    price: 1500,
    category: "scripts",
    imageUrl: "/images/product-wipe.jpg",
    images: [],
    isActive: true,
    createdAt: "2024-02-01",
    updatedAt: "2024-02-01",
  },
  {
    id: "5",
    title: "Система кланов для Rust",
    description: "Плагин системы кланов с рейтингом и статистикой",
    fullDescription:
      "Продвинутая система кланов: создание, приглашение, иерархия, общий банк, территории, рейтинг. Веб-панель управления, статистика, интеграция с Discord.",
    price: 4000,
    category: "plugins",
    imageUrl: "/images/product-clans.jpg",
    images: [],
    isActive: true,
    createdAt: "2024-03-01",
    updatedAt: "2024-03-01",
  },
  {
    id: "6",
    title: "Шаблон сайта игрового проекта",
    description: "Готовый шаблон сайта с ЛК, магазином и донатом",
    fullDescription:
      "Полностью адаптивный шаблон сайта для игрового проекта. Включает личный кабинет, магазин с интеграцией ЮKassa, систему доната, статистику серверов, мониторинг онлайна.",
    price: 12000,
    category: "websites",
    imageUrl: "/images/product-template.jpg",
    images: [],
    isActive: true,
    createdAt: "2024-04-01",
    updatedAt: "2024-04-01",
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

export const newsItems = [
  {
    id: "1",
    title: "Запуск RISE PROJECT",
    content:
      "Официальный запуск межпроектного пространства RISE PROJECT, объединяющего все наши игровые проекты под единым брендом. Новый сайт, новая платформа, новые возможности.",
    date: "2024-12-01",
    type: "milestone" as const,
  },
  {
    id: "2",
    title: "Открытие RISE STUDIO",
    content:
      "Запуск студии разработки. Теперь мы предлагаем услуги по созданию плагинов, ботов, сайтов и 3D моделей для игровых проектов. Принимаем заказы.",
    date: "2024-11-15",
    type: "milestone" as const,
  },
  {
    id: "3",
    title: "Обновление RISE SQUAD",
    content:
      "Масштабное обновление серверов Squad: новые карты, оптимизация производительности и улучшенная система модерации. Рекорд онлайна — 100 игроков.",
    date: "2024-10-20",
    type: "update" as const,
  },
  {
    id: "4",
    title: "Новый сезон RISE RUST",
    content:
      "Старт нового сезона на серверах Rust с уникальными ивентами, авторскими плагинами и обновлённой системой экономики. Присоединяйтесь!",
    date: "2024-09-01",
    type: "update" as const,
  },
  {
    id: "5",
    title: "Набор в команду",
    content:
      "Открыт набор разработчиков и администраторов в RISE TEAM. Ищем талантливых людей для работы над новыми проектами. Опыт приветствуется, но не обязателен.",
    date: "2024-08-15",
    type: "announcement" as const,
  },
  {
    id: "6",
    title: "Запуск каталога товаров",
    content:
      "Открыт каталог готовых решений: плагины, скрипты, шаблоны сайтов, 3D модели. Покупайте, скачивайте и используйте на своих проектах.",
    date: "2024-07-01",
    type: "milestone" as const,
  },
  {
    id: "7",
    title: "Партнёрство с хостинг-провайдерами",
    content:
      "Заключены партнёрские соглашения с ведущими хостинг-провайдерами. Для наших клиентов — скидки до 30% на аренду серверов.",
    date: "2024-06-10",
    type: "announcement" as const,
  },
];

export const sampleOrders = [
  {
    id: "ORD-001",
    productTitle: "Плагин экономики для Rust",
    price: 2500,
    status: "completed" as const,
    date: "2024-12-15",
  },
  {
    id: "ORD-002",
    productTitle: "Discord бот модерации",
    price: 5000,
    status: "paid" as const,
    date: "2024-12-20",
  },
];
