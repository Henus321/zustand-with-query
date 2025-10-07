import { client } from "@/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { PostType } from "../types";
import { queryKeys } from "./_query-keys";

export const usePostDeleteMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (id: number) => {
            const data = await client.delete<PostType>("/posts", {
                params: {
                    id,
                },
            });

            return data?.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKeys.usePostsQuery],
            });
        },
    });
};
