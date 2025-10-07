import { useImperativeModal } from "@/utils/useImperativeModal";
import type { PostType } from "../../types";

import usePostsQuery from "../../api/use-posts-query";
import PostForm from "../PostForm";
import usePosts from "../../hooks/use-posts";
import PostCard from "../PostCard";
import SubmitWarning from "@/components/SubmitWarning";

const Grid = () => {
    const { data: posts } = usePostsQuery();

    const { createPost, updatePost, deletePost } = usePosts();

    const { ModalComponent, closeModal, openModal } = useImperativeModal();

    const openPostForm = (prefill?: PostType) => {
        openModal(
            <PostForm
                prefill={prefill}
                onSuccess={(post) => {
                    if (!prefill) createPost(post);
                    if (prefill) updatePost(post);
                }}
            />
        );
    };

    const openPostDeleteWarning = (id: number) => {
        openModal(
            <SubmitWarning
                onCancel={closeModal}
                onSubmit={() => {
                    deletePost(id);
                    closeModal();
                }}
            />
        );
    };

    return (
        <div className="grid grid-cols-3 gap-3">
            {(posts || []).map((post) => (
                <PostCard
                    onCreate={openPostForm}
                    onUpdate={openPostForm}
                    onDelete={openPostDeleteWarning}
                    key={`post-${post.id}`}
                    post={post}
                />
            ))}

            <ModalComponent />
        </div>
    );
};

export default Grid;
