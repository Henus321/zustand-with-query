import type { FetchRecipesDataType } from "../types";
import axios from "axios";

export const fetchRecipesData = async () => {
    return await axios.get<FetchRecipesDataType>(
        "https://dummyjson.com/recipes"
    );
};
