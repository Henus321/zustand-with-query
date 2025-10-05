import { useRecipeCreateMutation } from "../api/use-recipe-create-mutation copy";
import { useRecipeDeleteMutation } from "../api/use-recipe-delete-mutation";
import { useRecipeUpdateMutation } from "../api/use-recipe-update-mutation";
import type { RecipeType } from "../types";
import { toast } from "react-toastify";

const useRecipes = () => {
    const recipeCreateMutation = useRecipeCreateMutation();
    const recipeUpdateMutation = useRecipeUpdateMutation();
    const recipeDeleteMutation = useRecipeDeleteMutation();

    const createRecipe = (recipe: RecipeType) => {
        recipeCreateMutation.mutate(recipe, {
            onSettled: () => {
                toast.error("createRecipe TODO");
            },
            onError: () => {},
        });
    };

    const updateRecipe = (recipe: RecipeType) => {
        recipeUpdateMutation.mutate(recipe, {
            onSettled: () => {
                toast.error("updateRecipe TODO");
            },
            onError: () => {},
        });
    };

    const deleteRecipe = (id: number) => {
        recipeDeleteMutation.mutate(id, {
            onSettled: () => {
                toast.error("deleteRecipe TODO");
            },
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
