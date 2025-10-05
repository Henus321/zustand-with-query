import type { RouteType } from "./types";

export const ROUTES: Record<string, RouteType> = {
    home: { href: "/", label: "Главная" },
    recipes: { href: "/recipes", label: "Рецепты" },
};
