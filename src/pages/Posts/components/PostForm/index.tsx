import type { PostType } from "../../types";

type PostFormProps = {
    prefill?: PostType;
    onSuccess: (post: PostType) => void;
};

const PostForm = ({ prefill, onSuccess }: PostFormProps) => {
    console.log(prefill, onSuccess);

    return (
        <div className="flex flex-col gap-2 mb-3 bg-sky-100 rounded-md p-3 shadow">
            TODO
        </div>
    );
};

export default PostForm;
