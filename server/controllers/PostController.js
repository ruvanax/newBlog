"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PostModel_1 = require("../models/PostModel");
const createNewPost = function (postData, onCreate, onError) {
    const storage = new PostModel_1.default();
    storage.create(postData).then(() => {
        onCreate();
    }).catch((error) => {
        onError(error, 500);
    });
};
const getAllThemes = function (onCreate, onError) {
    const storage = new PostModel_1.default();
    storage.getAll().then((posts) => {
        onCreate(posts);
    }).catch((error) => {
        onError(error, 500);
    });
};
const getSingleTheme = function (id, onCreate, onError) {
    const storage = new PostModel_1.default();
    storage.getById(id).then((theme) => {
        onCreate(theme);
    }).catch((error) => {
        onError(error, 500);
    });
};
exports.default = {
    createNewPost,
    getAllThemes,
    getSingleTheme
};
//# sourceMappingURL=PostController.js.map