import type { RouteType } from "./types";

export const ROUTES: Record<string, RouteType> = {
    home: { href: "/", label: "Главная" },
    albums: { href: "/albums", label: "Альбомы" },
    todos: { href: "/todos", label: "Задачи" },
    users: { href: "/users", label: "Пользователи" },
};
