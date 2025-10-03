import type { RouteType } from "./types";

export const ROUTES: Record<string, RouteType> = {
    home: { href: "/", label: "Главная" },
    recipes: { href: "/recipes", label: "Рецепты" },
    todos: { href: "/todos", label: "Задачи" },
    users: { href: "/users", label: "Пользователи" },
};
