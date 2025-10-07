import { client } from "@/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { PostType } from "../types";
import { queryKeys } from "./_query-keys";

export const usePostUpdateMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (body: PostType) => {
            const data = await client.post<PostType>("/posts", {
                body: body,
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
