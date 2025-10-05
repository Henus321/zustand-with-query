import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { stubRecipe } from "../../stub";

import useRecipes from "../../hooks/use-recipes";

const Actions = () => {
    const { createRecipe, deleteRecipe, updateRecipe } = useRecipes();

    return (
        <div className="flex p-3 mb-3 rounded-md gap-3 bg-sky-100 shadow">
            <FaPlus
                className="cursor-pointer hover:text-sky-700"
                onClick={() => createRecipe(stubRecipe)}
            />
            <FaTrash
                className="cursor-pointer hover:text-sky-700"
                onClick={() => deleteRecipe(stubRecipe.id)}
            />
            <FaEdit
                className="cursor-pointer hover:text-sky-700"
                onClick={() => updateRecipe(stubRecipe)}
            />
        </div>
    );
};

export default Actions;
