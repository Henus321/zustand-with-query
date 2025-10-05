import { client } from "@/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { RecipeCreateType } from "../types";
import { queryKeys } from "./_query-keys";

export const useRecipeDeleteMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (id: number) => {
            const data = await client.delete<RecipeCreateType>("/recipes", {
                params: {
                    id,
                },
            });

            return data?.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKeys.useRecipesQuery],
            });
        },
    });
};
