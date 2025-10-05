import { useRecipeCreateMutation } from "../api/use-recipe-create-mutation copy";
import { useRecipeDeleteMutation } from "../api/use-recipe-delete-mutation";
import { useRecipeUpdateMutation } from "../api/use-recipe-update-mutation";
import type { RecipeType } from "../types";

const useRecipes = () => {
    const recipeCreateMutation = useRecipeCreateMutation();
    const recipeUpdateMutation = useRecipeUpdateMutation();
    const recipeDeleteMutation = useRecipeDeleteMutation();

    const createRecipe = (recipe: RecipeType) => {
        recipeCreateMutation.mutate(recipe, {
            onSettled: () => {},
            onError: () => {},
        });
    };

    const updateRecipe = (recipe: RecipeType) => {
        recipeUpdateMutation.mutate(recipe, {
            onSettled: () => {},
            onError: () => {},
        });
    };

    const deleteRecipe = (id: number) => {
        recipeDeleteMutation.mutate(id, {
            onSettled: () => {},
            onError: () => {},
        });
    };

    return {
        createRecipe,
        updateRecipe,
        deleteRecipe,
    };
};

export default useRecipes;
