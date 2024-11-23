let posts = [{
    id: "123",
    title: "TitelData",
    description: "Discover the future of smart living with our cutting-edge, voice-controlled home automation system.",
    name: "Anas"
}]
// let posts = []

//handler
export const getPosts = () => posts
export const addPosts = (post) => {
    posts.push(post)
}

export const deletePosts = (id) => {
    posts = posts.filter((post) => post.id !== id)
}
export const UpdatePost = (id, title, description) => {
    const post = posts.find((post) => post.id === id)
    if (post) {
        post.title = title
        post.description = description
    } else {
        throw new Error("NO POST FOUNDB ")
    }
}


export const getById = (id) => {
    return posts.find((post) => post.id === id)
}