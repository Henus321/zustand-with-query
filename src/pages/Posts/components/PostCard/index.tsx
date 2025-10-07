import type { PostType } from "../../types";
import { FaTrash, FaPlus, FaEdit } from "react-icons/fa";

type RecipeCardProps = {
    post: PostType;
    onCreate: () => void;
    onUpdate: (prefill: PostType) => void;
    onDelete: (id: number) => void;
};

const RecipeCard = ({
    post,
    onCreate,
    onUpdate,
    onDelete,
}: RecipeCardProps) => {
    const { id, body, title } = post;

    return (
        <div
            key={`recipe-${id}`}
            className="flex flex-col bg-sky-100 rounded-sm p-3 shadow"
        >
            <div className="flex p-3 mb-3 rounded-md gap-3 bg-sky-100 shadow">
                <FaPlus
                    className="cursor-pointer hover:text-sky-700"
                    onClick={onCreate}
                />
                <FaTrash
                    className="cursor-pointer hover:text-sky-700"
                    onClick={() => onUpdate(post)}
                />
                <FaEdit
                    className="cursor-pointer hover:text-sky-700"
                    onClick={() => onDelete(post.id)}
                />
            </div>

            <div className="flex flex-col">
                <h4>{title}</h4>
                <span>{body}</span>
            </div>
        </div>
    );
};

export default RecipeCard;
