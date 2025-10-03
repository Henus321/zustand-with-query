import { useQuery } from "@tanstack/react-query";
import type { FetchRecipesDataType } from "../types";
import { client } from "@/client";

const useRecipesQuery = () => {
    return useQuery({
        queryFn: async () => {
            const data = await client.get<FetchRecipesDataType>("recipes");

            return data?.data?.recipes;
        },
        queryKey: ["recipes"],
    });
};

export default useRecipesQuery;
