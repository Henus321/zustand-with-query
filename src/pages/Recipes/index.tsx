import { ROUTES } from "@/config";

import PageHead from "@/components/PageHead";
import Card from "./components/Card";
import useRecipesQuery from "./api/use-recipes-query";

const Recipes = () => {
    const { data: recipes } = useRecipesQuery();

    //const { mutate } = useRecipeCreateMutation();

    return (
        <div>
            <PageHead title={ROUTES.recipes.label} />

            <div className="grid grid-cols-2 gap-3">
                {(recipes || []).map((recipe) => (
                    <Card key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

export default Recipes;
