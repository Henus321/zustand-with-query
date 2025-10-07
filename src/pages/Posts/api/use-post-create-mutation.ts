import { client } from "@/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { PostType, NewPostType } from "../types";
import { queryKeys } from "./_query-keys";

export const usePostCreateMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (body: NewPostType) => {
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
