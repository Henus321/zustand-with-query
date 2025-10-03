import { ROUTES } from "@/config";
import { useQuery } from "@tanstack/react-query";
import { fetchRecipesData } from "./api";

import PageHead from "@/components/PageHead";
import Card from "./components/Card";

const Recipes = () => {
    const { data } = useQuery({
        queryFn: fetchRecipesData,
        queryKey: ["fetchRecipesData"],
    });
    const recipes = data?.data?.recipes || [];

    return (
        <div>
            <PageHead title={ROUTES.recipes.label} />

            <div className="grid grid-cols-2 gap-3">
                {recipes.map((recipe) => (
                    <Card key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

export default Recipes;
