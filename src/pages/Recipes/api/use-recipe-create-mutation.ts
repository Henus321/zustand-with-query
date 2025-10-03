import { client } from "@/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { RecipeCreateType, RecipeType } from "../types";
import { queryKeys } from "./_query-keys";

export const useCreateRecipeMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (body: Partial<RecipeType>) => {
            const data = await client.post<RecipeCreateType>("recipes", {
                body: body,
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
