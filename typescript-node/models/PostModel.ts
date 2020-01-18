const mongoose = require('mongoose');
const Storage = require('./Storage');
const Schema = mongoose.Schema;


const postSchema = new Schema({
        theme: String,
        text: String,
        createdBy: String,
    },
    {
        timestamps: {
            createdAt: 'createdAt',
            updatedAt: 'updatedAt'
        }
    });


const PostModel = mongoose.model('post', postSchema);

class Post extends Storage{
    constructor() {
        super(PostModel);
    }
    public getPostsCreatedBySingleUser(id: string): object{
        return this.model.find({createdBy: id});
    }
}

export default Post;