import { IconType } from "react-icons";

export interface ISidebarItem {
  label: string;
  icon: IconType;
  link: string;
}

export interface IMaterialCategory {
  id: string;
  name: string;
  title: string;
  icon: string;
  color: string;
  desc: string;
}

export interface IMaterial {
  id: string;
  name: string;
  title: string;
  createdAt: string;
  data: object;
  isActive: boolean;
  desc: string;
  image: string;
  users_liked_ids: string[];
  comments_ids: string[];
}

export type TMaterialCard = Omit<IMaterial, "data" | "isActive">;

export interface IMaterialsData {
  category: string;
  data: TMaterialCard[];
}

export const PAGES_PATH = {
  notFound: "/not-found",
};
