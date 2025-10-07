import { useQuery } from "@tanstack/react-query";
import type { PostsQueryType } from "../types";
import { client } from "@/client";
import { queryKeys } from "./_query-keys";

const usePostsQuery = () => {
    return useQuery({
        queryFn: async () => {
            const data = await client.get<PostsQueryType>("/posts");

            return data?.data;
        },
        queryKey: [queryKeys.usePostsQuery],
    });
};

export default usePostsQuery;
