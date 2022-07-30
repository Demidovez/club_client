import { useState } from "react";
import { ISidebarItem } from "../../types/types";
import SidebarItem from "../SidebarItem/SidebarItem";
import styles from "./Sidebar.module.scss";
import {
  IoHomeOutline,
  IoNewspaperOutline,
  IoFilmOutline,
  IoSchoolOutline,
  IoReaderOutline,
  IoBookOutline,
  IoAddSharp,
  IoPeopleOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [items] = useState<ISidebarItem[]>([
    {
      label: "Главная",
      icon: IoHomeOutline,
      link: "/",
    },
    {
      label: "Лента клуба",
      icon: IoReaderOutline,
      link: "feed",
    },
    {
      label: "Новости",
      icon: IoNewspaperOutline,
      link: "category/news",
    },
    {
      label: "Статьи",
      icon: IoBookOutline,
      link: "category/articles",
    },
    {
      label: "Видео",
      icon: IoFilmOutline,
      link: "category/video",
    },
    {
      label: "Все материалы",
      icon: IoSchoolOutline,
      link: "categories",
    },
  ]);

  const [itemsAdmin] = useState<ISidebarItem[]>([
    {
      label: "Добавить",
      icon: IoAddSharp,
      link: "add",
    },
    {
      label: "Пользователи",
      icon: IoPeopleOutline,
      link: "users",
    },
    {
      label: "Настройки",
      icon: IoSettingsOutline,
      link: "settings",
    },
  ]);

  const [activeItem, setActiveItem] = useState("");

  const navigate = useNavigate();

  const onSelectedItem = (label: string, link: string) => {
    setActiveItem(label);
    navigate(link);
  };

  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <div>
          {items &&
            items.map((item, index) => (
              <SidebarItem
                data={item}
                key={index}
                isActive={activeItem === item.label}
                onClick={onSelectedItem}
              />
            ))}
        </div>
        <div>
          {itemsAdmin &&
            itemsAdmin.map((item, index) => (
              <SidebarItem
                data={item}
                key={index}
                isActive={activeItem === item.label}
                onClick={onSelectedItem}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
