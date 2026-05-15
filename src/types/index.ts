export interface Project {
  id: string;
  title: string;
  game: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  siteUrl: string;
  discordUrl?: string;
  vkUrl?: string;
  colorScheme: string;
  isArchived: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: string;
  isArchived: boolean;
  projectId?: string;
  createdAt: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  price: number;
  category: ProductCategory;
  imageUrl: string;
  images: string[];
  fileUrl?: string;
  instructionUrl?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export type ProductCategory =
  | "plugins"
  | "scripts"
  | "websites"
  | "3d-models"
  | "modifications"
  | "turnkey-projects"
  | "discord-bots"
  | "discord-design";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  projectUrl?: string;
}

export interface Order {
  id: string;
  userId: string;
  productId: string;
  product: Product;
  status: "pending" | "paid" | "completed" | "cancelled";
  createdAt: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  fullName?: string;
  isAdmin: boolean;
  agreedToTerms: boolean;
  createdAt: string;
}
