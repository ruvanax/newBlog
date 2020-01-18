import Post from "../models/PostModel";

interface postSchema {
    theme: String,
    text: String,
    createdBy: String
}


const createNewPost = function (postData: postSchema, onCreate: any, onError: (msg: string, code: number) => void) : void{
    const storage: Post = new Post();
    storage.create(postData).then(() =>{
        onCreate();
    }).catch((error: any) =>{
        onError(error, 500);
    });
};

const getAllThemes = function (onCreate: any, onError: (msg: string, code: number) => void): void {
    const storage: Post = new Post();
    storage.getAll().then((posts: object) =>{
        onCreate(posts);
    }).catch((error: any) =>{
        onError(error, 500);
    });
};

const getSingleTheme = function (id: string, onCreate: any, onError: (msg: string, code: number) => void): void {
    const storage: Post = new Post();
    storage.getById(id).then((theme: object) =>{
        onCreate(theme);
    }).catch((error: any) =>{
        onError(error, 500);
    });
};

const getSingleUserPosts = function (id: string, onCreate: any, onError: (msg: string, code: number) => void): void {
    const storage: Post = new Post();
    // @ts-ignore
    storage.getPostsCreatedBySingleUser(id).then((themes: object) =>{
        onCreate(themes)
    }).catch((error: any) =>{
        onError(error, 500);
    })
};


export default {
    createNewPost,
    getAllThemes,
    getSingleTheme,
    getSingleUserPosts
}