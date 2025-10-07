import { usePostCreateMutation } from "../api/use-post-create-mutation";
import { usePostUpdateMutation } from "../api/use-post-update-mutation";
import { usePostDeleteMutation } from "../api/use-post-delete-mutation";
import type { PostType } from "../types";
import { toast } from "react-toastify";

const usePosts = () => {
    const postCreateMutation = usePostCreateMutation();
    const postUpdateMutation = usePostUpdateMutation();
    const postDeleteMutation = usePostDeleteMutation();

    const createPost = (post: PostType) => {
        postCreateMutation.mutate(post, {
            onSettled: () => {
                toast.error("createPost TODO");
            },
            onError: () => {},
        });
    };

    const updatePost = (post: PostType) => {
        postUpdateMutation.mutate(post, {
            onSettled: () => {
                toast.error("updatePost TODO");
            },
            onError: () => {},
        });
    };

    const deletePost = (id: number) => {
        postDeleteMutation.mutate(id, {
            onSettled: () => {
                toast.error("deletePost TODO");
            },
            onError: () => {},
        });
    };

    return {
        createPost,
        updatePost,
        deletePost,
    };
};

export default usePosts;
