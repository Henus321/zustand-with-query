import { ROUTES } from "@/config";

import PageHead from "@/components/PageHead";
import PostsGrid from "./components/PostsGrid";

const Posts = () => {
    return (
        <div>
            <PageHead title={ROUTES.posts.label} />

            <PostsGrid />
        </div>
    );
};

export default Posts;
