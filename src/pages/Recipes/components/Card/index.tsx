import type { RecipeType } from "../../types";

type CardProps = {
    recipe: RecipeType;
};

const Card = ({ recipe }: CardProps) => {
    const { name, image, ingredients } = recipe;

    return (
        <div className="flex flex-col bg-sky-50 rounded-sm p-3 shadow">
            <img
                className="mb-1 rounded-sm block object-cover"
                src={image}
                alt={name}
            />
            <h4>{name}</h4>

            <ul className="list-disc list-inside">
                {ingredients.map((ingredient) => (
                    <li key={`${name}-${ingredient}`} className="text-sm">
                        {ingredient}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Card;
