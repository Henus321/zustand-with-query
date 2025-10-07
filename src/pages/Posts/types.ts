export type PostsQueryType = PostType[];

export type PostType = {
    id: number;
    userId: number;
    title: string;
    body: string;
};

export type NewPostType = {
    id?: number;
    userId?: number;
    title: string;
    body: string;
};
