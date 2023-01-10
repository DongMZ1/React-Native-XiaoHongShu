export type PostsCommentType = {
    time: string,
    auther_id: string,
    auther_name: string
    id: string
    content: string,
    replys : {
        from_auther_name: string,
        from_auth_id: string,
        time: string,
        content: string,
        id: string
    }[]
}

export type PostsType = {
    time: string,
    title: string,
    content: string,
    images: string[]
    id: string,
    auther_id: string,
    comments: PostsCommentType[]
}