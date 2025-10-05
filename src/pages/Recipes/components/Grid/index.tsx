import useRecipesQuery from "../../api/use-recipes-query";

const Grid = () => {
    const { data: recipes } = useRecipesQuery();

    return (
        <div className="grid grid-cols-3 gap-3">
            {(recipes || []).map((recipe) => {
                const { id, name, image, ingredients } = recipe;

                return (
                    <div
                        key={`recipe-${id}`}
                        className="flex flex-col bg-sky-100 rounded-sm p-3 shadow"
                    >
                        <img
                            className="mb-1 rounded-sm block object-cover"
                            src={image}
                            alt={name}
                        />
                        <h4>{name}</h4>

                        <ul className="list-disc list-inside">
                            {ingredients.map((ingredient) => (
                                <li
                                    key={`${name}-${ingredient}`}
                                    className="text-sm"
                                >
                                    {ingredient}
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
};

export default Grid;
