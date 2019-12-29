"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const Storage = require('./storage');
const Schema = mongoose.Schema;
const postSchema = new Schema({
    theme: String,
    text: String,
    createdBy: String,
}, {
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
});
const PostModel = mongoose.model('post', postSchema);
class Post extends Storage {
    constructor() {
        super(PostModel);
    }
}
exports.default = Post;
//# sourceMappingURL=post.js.map