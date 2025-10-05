import { useQuery } from "@tanstack/react-query";
import type { RecepiesQueryType } from "../types";
import { client } from "@/client";
import { queryKeys } from "./_query-keys";

const useRecipesQuery = () => {
    return useQuery({
        queryFn: async () => {
            const data = await client.get<RecepiesQueryType>("/recipes");

            return data?.data?.recipes;
        },
        queryKey: [queryKeys.useRecipesQuery],
    });
};

export default useRecipesQuery;
