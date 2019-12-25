"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require('express');
const router = express.Router();
const Post = require("../models/post");
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const storage = new Post();
    const posts = yield storage.getAll();
    res.json(posts);
}));
router.route('/post')
    .post((req, res, next) => {
    try {
        const body = req.body;
        const storage = new Post();
        if (req.session && req.session.user) {
            const postObj = {
                theme: body.theme,
                text: body.text,
                createdBy: req.session.user._id
            };
            storage.create(postObj).then((newPost) => {
                const resObj = {
                    message: "Успешно!"
                };
                res.status(200).send(resObj);
            });
        }
    }
    catch (error) {
        next(error);
    }
});
router.route('/post')
    .get((req, res, next) => {
    try {
        const storage = new Post();
        storage.getAll().then((posts) => {
            res.status(200).send(posts);
        });
    }
    catch (error) {
        next(error);
    }
});
module.exports = router;
//# sourceMappingURL=posts.js.map