"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postController_1 = require("../controllers/postController");
const PostRoute = {
    createRouter(router) {
        return router()
            .post('/post', (req, res, next) => {
            if (req.session && req.session.user) {
                const postObj = {
                    theme: req.body.theme,
                    text: req.body.text,
                    createdBy: req.session.user._id
                };
                postController_1.default.createNewPost(postObj, () => {
                    res.status(200).send({ message: "Успешно" });
                }, (msg, code) => {
                    res.status(code).send({ message: msg });
                });
            }
            else {
                res.status(403);
            }
        })
            .get('/post', (req, res, next) => {
            if (req.session && req.session.user) {
                postController_1.default.getAllThemes((themes) => {
                    res.status(200).send({ message: "Успешно", themes });
                }, (msg, code) => {
                    res.status(code).send({ message: msg });
                });
            }
            else {
                res.status(403);
            }
        });
    }
};
exports.default = PostRoute;
// router.get('/', async (req:any, res:any) =>{
//     const storage: Post = new Post();
//     const posts = await storage.getAll();
//     res.json(posts);
// });
//# sourceMappingURL=posts.js.map