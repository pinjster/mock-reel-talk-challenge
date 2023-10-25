interface User {
    uid: string,
    username: string,
    email: string,
    comments?: Comment[] | Comment,
    posts?: Post[] | Post,
    followers?: User[] | User,
    following?: User[] | User,
    likedPosts?: Post[] | Post,
    likedComments?: Comment[] | Comment,
    likedReels?: Reel[] | Reel,
}

interface Post {
    uid: string,
    author: User["username"],
    body: string,
    userLikes?: User[] | User,
    comments?: Comment[] | Comment
}

interface Comment {
    uid: string,
    author: User["username"],
    origin: Post,
    body: string,
    userLikes?: User[] | User
}

interface Reel {
    uid: string,
    title: string,
    release: string
}