interface currentUser {
    username: string,
    email: string,
    password: string,
    followers: user[] | user | undefined,
    following: user[] | user | undefined
}

interface user {
    username: string,
    email: string
}

interface reel {
    
}