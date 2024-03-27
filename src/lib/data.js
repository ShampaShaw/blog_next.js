//TEMPOARY DATA
const users = [
    {id: 1, name: 'Kyle'},
    {id: 2, name: 'Sally'},
]

const posts = [
    {id:1, title: 'Post 1', body: 'This is the body of post 1', userId: 1},
    {id:2, title: 'Post 2', body: 'This is the body of post 2', userId: 1},
    {id:3, title: 'Post 3', body: 'This is the body of post 3', userId: 2},
    {id:4, title: 'Post 4', body: 'This is the body of post 4', userId: 2},
]


export const getPosts = async () => {
    return posts;
};

export const getPost = async (id) => {
    return posts.find(post => post.id === id);
};

export const getUser = async (id) => {
    return users.find(user => user.id === id);
};